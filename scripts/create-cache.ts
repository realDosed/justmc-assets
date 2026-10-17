import 'dotenv/config';

import { promises as fs } from 'fs';
import path from 'path';
import { Gitlab } from '@gitbeaker/node';

import { info, SOURCE_CACHE_DIR, success } from './common';

const PROJECT_ID = 21858804;
const DOWNLOAD_CONCURRENCY = 8;
const DOWNLOAD_ATTEMPTS = 3;
const API = new Gitlab({
  token: process.env.GITLAB_TOKEN,
  requestTimeout: 30_000,
});

const SOURCE_PATH =
  'justmc-creative-plus/src/main/kotlin/ru/justmc/creativeplus';

const getFile = async (filePath: string) => {
  let lastError: unknown;

  for (let attempt = 1; attempt <= DOWNLOAD_ATTEMPTS; attempt++) {
    try {
      return await API.RepositoryFiles.showRaw(PROJECT_ID, filePath);
    } catch (error) {
      lastError = error;
      if (attempt < DOWNLOAD_ATTEMPTS)
        await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
    }
  }

  throw new Error(`Failed to download ${filePath}`, { cause: lastError });
};

(async () => {
  info('fetching creative-plus source tree...');

  const sourceFiles = (
    await API.Repositories.tree(PROJECT_ID, {
      path: SOURCE_PATH,
      recursive: true,
    })
  ).filter((file) => file.type === 'blob');

  info(`caching ${sourceFiles.length} source files...`);

  let nextFileIndex = 0;
  const downloadWorkers = Array.from(
    { length: Math.min(DOWNLOAD_CONCURRENCY, sourceFiles.length) },
    async () => {
      while (nextFileIndex < sourceFiles.length) {
        const file = sourceFiles[nextFileIndex++];
        const relativePath = path.relative(SOURCE_PATH, file.path);
        const targetPath = path.resolve(SOURCE_CACHE_DIR, relativePath);
        await fs.mkdir(path.dirname(targetPath), { recursive: true });
        await fs.writeFile(targetPath, await getFile(file.path));
      }
    }
  );

  await Promise.all(downloadWorkers);

  success('cached creative-plus source tree');
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});