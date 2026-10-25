import 'dotenv/config';

import { createHash } from 'crypto';
import { promises as fs } from 'fs';
import path from 'path';
import { Gitlab } from '@gitbeaker/node';

import {
  CACHE_DIR,
  createProgress,
  getKotlinFiles,
  info,
  LOCAL_CONFIG,
  LOCAL_SOURCE_ROOT,
  SOURCE_CACHE_DIR,
  success,
  warn,
} from './common';

const DOWNLOAD_CONCURRENCY = 2;
const DOWNLOAD_ATTEMPTS = 5;
const MANIFEST_PATH = path.resolve(CACHE_DIR, 'creative-plus-manifest.json');
const PENDING_PATH = path.resolve(CACHE_DIR, 'creative-plus-pending.json');
const repositoryUrl = LOCAL_CONFIG.gitlabRepositoryUrl
  ? new URL(LOCAL_CONFIG.gitlabRepositoryUrl)
  : undefined;
const PROJECT_PATH = repositoryUrl?.pathname
  .replace(/\.git$/, '')
  .replace(/^\/|\/$/g, '');
const GITLAB_API_URL = repositoryUrl
  ? `${repositoryUrl.origin}/api/v4`
  : undefined;
const API = new Gitlab({
  token: process.env.GITLAB_TOKEN,
  requestTimeout: 30_000,
  ...(repositoryUrl ? { host: repositoryUrl.origin } : {}),
});

const SOURCE_PATH =
  'justmc-creative-plus/src/main/kotlin/ru/justmc/creativeplus';

type CacheManifest = Record<string, string>;
type PendingFile = {
  filePath: string;
  relativePath: string;
  blobId: string;
  error: string;
};

class GitLabHttpError extends Error {
  constructor(
    readonly status: number,
    filePath: string,
    responseText: string
  ) {
    super(`GitLab returned HTTP ${status} for ${filePath}: ${responseText}`);
  }

  get retryable() {
    return this.status >= 500;
  }
}

class DownloadError extends Error {
  constructor(
    filePath: string,
    reason: string,
    readonly rateLimited: boolean,
    cause: unknown
  ) {
    super(`Failed to download ${filePath}: ${reason}`, { cause });
  }
}

const getTargetPath = (relativePath: string) => {
  const targetPath = path.resolve(SOURCE_CACHE_DIR, relativePath);
  if (!targetPath.startsWith(`${SOURCE_CACHE_DIR}${path.sep}`))
    throw new Error(`Invalid cached source path: ${relativePath}`);
  return targetPath;
};

const readManifest = async (): Promise<CacheManifest> => {
  let contents: string;
  try {
    contents = await fs.readFile(MANIFEST_PATH, 'utf8');
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return {};
    throw error;
  }

  const parsed: unknown = JSON.parse(contents);
  if (
    typeof parsed !== 'object' ||
    parsed === null ||
    Array.isArray(parsed) ||
    Object.values(parsed).some((id) => typeof id !== 'string')
  ) {
    throw new Error(`Invalid cache manifest: ${MANIFEST_PATH}`);
  }

  for (const relativePath of Object.keys(parsed))
    getTargetPath(relativePath);

  return parsed as CacheManifest;
};

const readPendingFiles = async (): Promise<PendingFile[]> => {
  let contents: string;
  try {
    contents = await fs.readFile(PENDING_PATH, 'utf8');
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return [];
    throw error;
  }

  const parsed: unknown = JSON.parse(contents);
  if (
    !Array.isArray(parsed) ||
    parsed.some(
      (file) =>
        typeof file !== 'object' ||
        file === null ||
        typeof file.filePath !== 'string' ||
        typeof file.relativePath !== 'string' ||
        typeof file.blobId !== 'string' ||
        typeof file.error !== 'string'
    )
  ) {
    throw new Error(`Invalid pending downloads file: ${PENDING_PATH}`);
  }
  return parsed as PendingFile[];
};

const getRelativePath = (filePath: string) => {
  const prefix = `${SOURCE_PATH}/`;
  if (!filePath.startsWith(prefix))
    throw new Error(`Unexpected source path from GitLab: ${filePath}`);

  const relativePath = filePath.slice(prefix.length);
  getTargetPath(relativePath);
  return relativePath;
};

const isCached = async (
  relativePath: string,
  fileId: string,
  manifest: CacheManifest
) => {
  const targetPath = getTargetPath(relativePath);
  try {
    if (manifest[relativePath] === fileId) {
      await fs.access(targetPath);
      return true;
    }

    if (!/^[a-f\d]{40}$/i.test(fileId)) return false;
    const content = await fs.readFile(targetPath);
    const blobId = createHash('sha1')
      .update(`blob ${content.length}\0`)
      .update(content)
      .digest('hex');
    return blobId === fileId;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return false;
    throw error;
  }
};

const getFile = async (filePath: string, blobId: string) => {
  let lastError: unknown;
  if (!PROJECT_PATH || !GITLAB_API_URL)
    throw new Error(
      `Set gitlabRepositoryUrl in ${path.resolve(__dirname, '../local.config.json')} to enable remote caching`
    );
  const url = `${GITLAB_API_URL}/projects/${encodeURIComponent(PROJECT_PATH)}/repository/blobs/${encodeURIComponent(blobId)}/raw`;
  const headers = process.env.GITLAB_TOKEN
    ? { 'PRIVATE-TOKEN': process.env.GITLAB_TOKEN }
    : undefined;

  for (let attempt = 1; attempt <= DOWNLOAD_ATTEMPTS; attempt++) {
    try {
      const response = await fetch(url, {
        headers,
        signal: AbortSignal.timeout(30_000),
      });

      if (!response.ok) {
        const responseText = (await response.text()).slice(0, 500);
        const error = new GitLabHttpError(
          response.status,
          filePath,
          `${response.statusText}: ${responseText}`
        );
        if (!error.retryable) throw error;
        lastError = error;
        if (attempt === DOWNLOAD_ATTEMPTS) break;

        const retryAfterHeader = response.headers.get('retry-after');
        const retryAfterSeconds = Number(retryAfterHeader);
        const retryAfterDate = retryAfterHeader
          ? Date.parse(retryAfterHeader)
          : NaN;
        const retryAfterMs =
          retryAfterHeader !== null && Number.isFinite(retryAfterSeconds)
            ? retryAfterSeconds * 1_000
            : retryAfterDate - Date.now();
        const delay = Number.isFinite(retryAfterMs)
          ? Math.max(0, retryAfterMs)
          : Math.min(500 * 2 ** (attempt - 1), 8_000);
        await new Promise((resolve) =>
          setTimeout(resolve, delay + Math.random() * 250)
        );
        continue;
      }

      return Buffer.from(await response.arrayBuffer());
    } catch (error) {
      lastError = error;
      if (error instanceof GitLabHttpError && !error.retryable) break;
      if (attempt === DOWNLOAD_ATTEMPTS) break;

      const delay = Math.min(500 * 2 ** (attempt - 1), 8_000);
      await new Promise((resolve) =>
        setTimeout(resolve, delay + Math.random() * 250)
      );
    }
  }

  const reason =
    lastError instanceof Error ? lastError.message : String(lastError);
  throw new DownloadError(
    filePath,
    reason,
    lastError instanceof GitLabHttpError && lastError.status === 429,
    lastError
  );
};

const isRequiredSource = (filePath: string) => {
  const relativePath = filePath.slice(`${SOURCE_PATH}/`.length);
  if (!relativePath.endsWith('.kt')) return false;
  return (
    relativePath.startsWith('action/') ||
    relativePath.startsWith('editor/menu/action/') ||
    relativePath.startsWith('editor/menu/trigger/') ||
    relativePath === 'core/trigger/Triggers.kt' ||
    relativePath === 'core/value/GameValue.kt' ||
    relativePath === 'core/value/ValueTypes.kt'
  );
};

const writeJsonAtomically = async (filePath: string, contents: unknown) => {
  const temporaryPath = `${filePath}.${process.pid}.tmp`;
  await fs.writeFile(temporaryPath, JSON.stringify(contents, null, 2));
  await fs.rename(temporaryPath, filePath);
};

(async () => {
  if (LOCAL_SOURCE_ROOT) {
    info(`using local read-only source: ${LOCAL_SOURCE_ROOT}`);
    success('skipped remote source caching');
    return;
  }

  info('fetching creative-plus source tree...');

  if (!PROJECT_PATH)
    throw new Error(
      `Set gitlabRepositoryUrl in ${path.resolve(__dirname, '../local.config.json')} to use remote caching`
    );

  const sourceFiles = (
    await API.Repositories.tree(PROJECT_PATH, {
      path: SOURCE_PATH,
      recursive: true,
    })
  ).filter((file) => file.type === 'blob' && isRequiredSource(file.path));

  const previousManifest = await readManifest();
  const previousPending = await readPendingFiles();
  const currentManifest: CacheManifest = {};
  const filesToDownload: {
    filePath: string;
    relativePath: string;
    blobId: string;
  }[] = [];

  const scanProgress = createProgress(
    'Checking source cache',
    sourceFiles.length
  );
  let scanned = 0;
  for (const file of sourceFiles) {
    if (typeof file.id !== 'string')
      throw new Error(`Missing blob ID for ${file.path}`);

    const relativePath = getRelativePath(file.path);
    if (await isCached(relativePath, file.id, previousManifest)) {
      currentManifest[relativePath] = file.id;
    } else {
      filesToDownload.push({
        filePath: file.path,
        relativePath,
        blobId: file.id,
      });
    }
    scanProgress.update(relativePath, ++scanned);
  }
  scanProgress.complete();

  const pendingOrder = new Map(
    previousPending.map((file, index) => [file.filePath, index])
  );
  filesToDownload.sort(
    (left, right) =>
      (pendingOrder.get(left.filePath) ?? Number.MAX_SAFE_INTEGER) -
      (pendingOrder.get(right.filePath) ?? Number.MAX_SAFE_INTEGER)
  );

  info(
    `caching ${sourceFiles.length} required source files (${filesToDownload.length} to download)...`
  );

  const pendingFiles: PendingFile[] = [];
  let rateLimited = false;
  let nextFileIndex = 0;
  let completedDownloads = 0;
  const downloadProgress = createProgress(
    'Downloading source files',
    filesToDownload.length
  );
  const downloadWorkers = Array.from(
    { length: Math.min(DOWNLOAD_CONCURRENCY, filesToDownload.length) },
    async () => {
      while (!rateLimited && nextFileIndex < filesToDownload.length) {
        const { filePath, relativePath, blobId } =
          filesToDownload[nextFileIndex++];
        let downloadedContents: Buffer | undefined;
        try {
          downloadedContents = await getFile(filePath, blobId);
        } catch (error) {
          if (!(error instanceof DownloadError)) throw error;
          const reason =
            error instanceof Error ? error.message : String(error);
          pendingFiles.push({ filePath, relativePath, blobId, error: reason });
          if (error.rateLimited) rateLimited = true;
          warn(`skipping ${filePath}: ${reason}`);
          downloadProgress.update(relativePath, ++completedDownloads);
          continue;
        }

        const targetPath = getTargetPath(relativePath);
        await fs.mkdir(path.dirname(targetPath), { recursive: true });
        const temporaryPath = `${targetPath}.${process.pid}.tmp`;
        await fs.writeFile(temporaryPath, downloadedContents);
        await fs.rename(temporaryPath, targetPath);
        currentManifest[relativePath] = blobId;
        downloadProgress.update(relativePath, ++completedDownloads);
      }
    }
  );

  await Promise.all(downloadWorkers);

  if (rateLimited) {
    for (const file of filesToDownload.slice(nextFileIndex)) {
      pendingFiles.push({
        ...file,
        error: 'Deferred after GitLab rate limit response',
      });
    }
  }
  if (rateLimited) {
    downloadProgress.update('paused after GitLab rate limit', completedDownloads);
    downloadProgress.end();
  } else {
    downloadProgress.complete();
  }

  for (const relativePath of Object.keys(previousManifest)) {
    if (!Object.hasOwn(currentManifest, relativePath)) {
      await fs.rm(getTargetPath(relativePath), { force: true });
    }
  }

  const selectedPaths = new Set(
    sourceFiles.map((file) => getRelativePath(file.path))
  );
  let existingFiles: string[] = [];
  try {
    existingFiles = await getKotlinFiles(SOURCE_CACHE_DIR);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
  }
  for (const filePath of existingFiles) {
    const relativePath = path.relative(SOURCE_CACHE_DIR, filePath);
    if (!selectedPaths.has(relativePath))
      await fs.rm(filePath, { force: true });
  }

  await writeJsonAtomically(MANIFEST_PATH, currentManifest);
  if (pendingFiles.length > 0) {
    await writeJsonAtomically(PENDING_PATH, pendingFiles);
    warn(
      `${pendingFiles.length} files are pending; they will be retried first on the next run. See ${PENDING_PATH}`
    );
  } else {
    await fs.rm(PENDING_PATH, { force: true });
  }

  success('cached creative-plus source tree');
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});