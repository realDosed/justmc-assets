import fetch from 'node-fetch';
import { promises as fs } from 'fs';
import { inflateRawSync } from 'zlib';
import os from 'os';
import path from 'path';

import {
  getKotlinFiles,
  getSourceFiles,
  LOCAL_CONFIG,
  PATCHES_DIR,
  removeComments,
  success,
  toPrettyPrintJson,
} from './common';
import { SERVER_VERSION } from '../src/constants';

type EnumValues = Record<string, string[]>;
type KotlinSource = {
  content: string;
  path: string;
};

const ENUMS_FILE = path.resolve(PATCHES_DIR, 'enums.json');
const PAPER_API_CACHE_DIR = path.resolve(
  __dirname,
  `../.cache/paper-api/${SERVER_VERSION}`
);
const PAPER_API_BRANCH = `ver/${SERVER_VERSION}`;
const PAPERWEIGHT_WORK_DIR = path.resolve(
  os.homedir(),
  '.gradle/caches/paperweight-userdev/v2/work'
);
const LOCAL_DEPENDENCY_SOURCES_DIR = path.resolve(
  os.homedir(),
  '.gradle/caches/modules-2/files-2.1'
);
const LOCAL_CORE_PROJECT_DIR = LOCAL_CONFIG.serverCoreProjectPath
  ? path.resolve(LOCAL_CONFIG.serverCoreProjectPath)
  : undefined;
const ENUM_TYPE = /\benum(?:List)?\s*<\s*([A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*)\s*>/g;
const PLAIN_ENUM_CALL = /\benum\s*\(/g;
const IMPORT = /^\s*import\s+([\w.*]+)(?:\s+as\s+(\w+))?/gm;
const TYPE_ALIAS = /^\s*typealias\s+(\w+)\s*=\s*([\w.]+)/gm;
let localSourceArchivesPromise: Promise<string[]> | undefined;
const localSourceArchives = new Map<string, Buffer>();

type KotlinImport = {
  name: string;
  alias?: string;
};

const getImports = (content: string): KotlinImport[] =>
  [...content.matchAll(IMPORT)].map(([, name, alias]) => ({ name, alias }));

export const getImportedEnumNames = (content: string, type: string) => {
  const imports = getImports(content);
  const typeStart = type.split('.')[0];
  const names = new Set<string>();

  for (const imported of imports) {
    if (imported.name.endsWith('.*')) continue;

    if (
      imported.alias === typeStart ||
      imported.name.split('.').pop() === typeStart
    ) {
      names.add(`${imported.name}${type.slice(typeStart.length)}`);
    } else if (imported.name.endsWith(`.${type}`)) {
      names.add(imported.name);
    }
  }

  if (names.size > 0) return [...names];

  for (const imported of imports)
    if (imported.name.endsWith('.*'))
      names.add(`${imported.name.slice(0, -2)}.${type}`);

  return [...names];
};

const getLocalUtilitySources = async (): Promise<KotlinSource[]> => {
  if (!LOCAL_CORE_PROJECT_DIR) return [];

  const sourceDirectory = path.resolve(
    LOCAL_CORE_PROJECT_DIR,
    'justmc-utils/src/main/kotlin'
  );
  let sourceFiles: string[];
  try {
    sourceFiles = await getKotlinFiles(sourceDirectory);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return [];
    throw error;
  }

  return Promise.all(
    sourceFiles.map(async (sourcePath) => ({
      path: sourcePath,
      content: await fs.readFile(sourcePath, 'utf8'),
    }))
  );
};

const getKotlinTypeAliases = (sources: KotlinSource[]) => {
  const aliases = new Map<string, string>();

  for (const { content: sourceContent } of sources) {
    const content = removeComments(sourceContent);
    const packageName = content.match(/^\s*package\s+([\w.]+)/m)?.[1] ?? '';
    const imports = getImports(content);

    for (const [, alias, target] of content.matchAll(TYPE_ALIAS)) {
      const targetStart = target.split('.')[0];
      const importedTarget = imports.find(
        (imported) =>
          !imported.name.endsWith('.*') &&
          imported.alias === targetStart ||
          (!imported.name.endsWith('.*') &&
            imported.name.split('.').pop() === targetStart)
      );
      const wildcardTarget = imports.find((imported) =>
        imported.name.endsWith('.*')
      );
      const resolvedTarget = importedTarget
        ? `${importedTarget.name}${target.slice(targetStart.length)}`
        : wildcardTarget
          ? `${wildcardTarget.name.slice(0, -2)}.${target}`
          : /^[a-z]/.test(target)
            ? target
            : packageName
              ? `${packageName}.${target}`
              : target;
      aliases.set(
        packageName ? `${packageName}.${alias}` : alias,
        resolvedTarget
      );
    }
  }

  return aliases;
};

const resolveTypeAlias = (
  type: string,
  aliases: Map<string, string>,
  seen = new Set<string>()
): string => {
  if (seen.has(type)) return type;
  const target = aliases.get(type);
  if (!target) return type;
  seen.add(type);
  return resolveTypeAlias(target, aliases, seen);
};

const getSourceClassPath = (importedName: string) => {
  const parts = importedName.split('.');
  const classIndex = parts.findIndex((part) => /^[A-Z]/.test(part));
  const sourceParts =
    classIndex < 0 ? parts : parts.slice(0, classIndex + 1);
  return `${sourceParts.join('/')}.java`;
};

const findClosingDelimiter = (
  content: string,
  start: number,
  opening: string,
  closing: string
) => {
  let depth = 0;
  let quote: string | null = null;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;

  for (let index = start; index < content.length; index++) {
    const character = content[index];
    const nextCharacter = content[index + 1];

    if (lineComment) {
      if (character === '\n') lineComment = false;
      continue;
    }

    if (blockComment) {
      if (character === '*' && nextCharacter === '/') {
        blockComment = false;
        index++;
      }
      continue;
    }

    if (quote) {
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === quote) quote = null;
      continue;
    }

    if (character === '/' && nextCharacter === '/') {
      lineComment = true;
      index++;
      continue;
    }

    if (character === '/' && nextCharacter === '*') {
      blockComment = true;
      index++;
      continue;
    }

    if (character === '"' || character === "'") {
      quote = character;
      continue;
    }

    if (character === opening) depth++;
    else if (character === closing && --depth === 0) return index;
  }

  return -1;
};

const getEnumEntryName = (entry: string) => {
  let index = 0;

  while (index < entry.length) {
    while (/\s/.test(entry[index] || '')) index++;

    if (entry.startsWith('//', index)) {
      const lineEnd = entry.indexOf('\n', index + 2);
      index = lineEnd < 0 ? entry.length : lineEnd + 1;
      continue;
    }

    if (entry.startsWith('/*', index)) {
      const commentEnd = entry.indexOf('*/', index + 2);
      if (commentEnd < 0) return undefined;
      index = commentEnd + 2;
      continue;
    }

    if (entry[index] !== '@') break;
    index++;
    while (/[\w.$]/.test(entry[index] || '')) index++;
    while (/\s/.test(entry[index] || '')) index++;

    if (entry[index] === '(') {
      const annotationEnd = findClosingDelimiter(entry, index, '(', ')');
      if (annotationEnd < 0) return undefined;
      index = annotationEnd + 1;
    }
  }

  return entry.slice(index).match(/^([A-Z_][\w]*)\b/)?.[1];
};

const getEnumEntries = (body: string) => {
  const entries: string[] = [];
  let start = 0;
  let parentheses = 0;
  let brackets = 0;
  let braces = 0;
  let quote: string | null = null;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;

  for (let index = 0; index < body.length; index++) {
    const character = body[index];
    const nextCharacter = body[index + 1];

    if (lineComment) {
      if (character === '\n') lineComment = false;
      continue;
    }
    if (blockComment) {
      if (character === '*' && nextCharacter === '/') {
        blockComment = false;
        index++;
      }
      continue;
    }
    if (quote) {
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === quote) quote = null;
      continue;
    }
    if (character === '/' && nextCharacter === '/') {
      lineComment = true;
      index++;
      continue;
    }
    if (character === '/' && nextCharacter === '*') {
      blockComment = true;
      index++;
      continue;
    }
    if (character === '"' || character === "'") {
      quote = character;
      continue;
    }

    if (character === '(') parentheses++;
    else if (character === ')') parentheses--;
    else if (character === '[') brackets++;
    else if (character === ']') brackets--;
    else if (character === '{') braces++;
    else if (character === '}') braces--;
    else if (
      parentheses === 0 &&
      brackets === 0 &&
      braces === 0 &&
      (character === ',' || character === ';')
    ) {
      entries.push(body.slice(start, index));
      if (character === ';') {
        start = body.length;
        break;
      }
      start = index + 1;
    }
  }

  if (start < body.length) entries.push(body.slice(start));
  return entries
    .map(getEnumEntryName)
    .filter((name): name is string => Boolean(name));
};

type LocalEnum = {
  enumName: string;
  fileClassName: string;
  packageName: string;
  values: string[];
};

const getKotlinEnums = (sources: KotlinSource[]) => {
  const enums: LocalEnum[] = [];
  const declarationRegex = /\benum\s+class\s+([A-Za-z_]\w*)\b/g;

  for (const { content: sourceContent, path: filePath } of sources) {
    const content = removeComments(sourceContent);
    const packageName = content.match(/^\s*package\s+([\w.]+)/m)?.[1] ?? '';
    const fileClassName = path.basename(filePath, '.kt');
    for (const match of content.matchAll(declarationRegex)) {
      const bodyStart = content.indexOf('{', match.index! + match[0].length);
      if (bodyStart < 0) continue;

      const bodyEnd = findClosingDelimiter(content, bodyStart, '{', '}');
      if (bodyEnd < 0) continue;
      enums.push({
        enumName: match[1],
        fileClassName,
        packageName,
        values: getEnumEntries(content.slice(bodyStart + 1, bodyEnd)),
      });
    }
  }

  return enums;
};

const getEnumTypes = (sources: KotlinSource[]) => {
  const types = new Map<string, Set<string>>();

  for (const { content: sourceContent } of sources) {
    const content = removeComments(sourceContent);
    const locallyDeclaredEnums = new Set(
      [...content.matchAll(/\benum\s+class\s+([A-Za-z_]\w*)\b/g)].map(
        ([, name]) => name
      )
    );

    for (const [, type] of content.matchAll(ENUM_TYPE)) {
      if (!type.includes('.') && locallyDeclaredEnums.has(type)) continue;

      const names = types.get(type) ?? new Set<string>();
      getImportedEnumNames(content, type).forEach((name) => names.add(name));
      types.set(type, names);
    }

    for (const match of content.matchAll(PLAIN_ENUM_CALL)) {
      const openingParenthesis = match.index! + match[0].lastIndexOf('(');
      const closingParenthesis = findClosingDelimiter(
        content,
        openingParenthesis,
        '(',
        ')'
      );
      if (closingParenthesis < 0) continue;

      const callContent = content.slice(
        openingParenthesis + 1,
        closingParenthesis
      );
      const defaultValue = callContent.match(
        /^\s*"[^"]+"\s*,\s*((?:[A-Za-z_]\w*\.)+[A-Z]\w*)\s*(?:,|$)/
      )?.[1];
      const type = defaultValue?.match(/^(.*)\.[A-Z]\w*$/)?.[1];
      if (!type) continue;
      if (!type.includes('.') && locallyDeclaredEnums.has(type)) continue;

      const names = types.get(type) ?? new Set<string>();
      getImportedEnumNames(content, type).forEach((name) => names.add(name));
      types.set(type, names);
    }
  }

  return types;
};

const readPaperCommit = async () => {
  const response = await fetch(
    `https://api.github.com/repos/PaperMC/Paper/branches/${PAPER_API_BRANCH}`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'justmc-assets',
      },
      timeout: 40_000,
    }
  );
  if (!response.ok)
    throw new Error(
      `Could not resolve Paper branch ${PAPER_API_BRANCH}: HTTP ${response.status}`
    );

  const branch: unknown = await response.json();
  if (
    typeof branch !== 'object' ||
    branch === null ||
    !('commit' in branch) ||
    typeof branch.commit !== 'object' ||
    branch.commit === null ||
    !('sha' in branch.commit) ||
    typeof branch.commit.sha !== 'string'
  )
    throw new Error(`Invalid Paper branch response for ${PAPER_API_BRANCH}`);

  return branch.commit.sha;
};

const findPaperEnum = async (
  type: string,
  importedNames: Set<string>,
  commit: string
) => {
  const enumName = type.split('.').pop()!;
  const sourceCandidates = new Set<string>();

  for (const importedName of importedNames)
    sourceCandidates.add(getSourceClassPath(importedName));

  for (const relativePath of sourceCandidates) {
    const cachedPath = path.resolve(
      PAPER_API_CACHE_DIR,
      commit,
      relativePath
    );
    let content: string;

    try {
      content = await fs.readFile(cachedPath, 'utf8');
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;

      const url = `https://raw.githubusercontent.com/PaperMC/Paper/${commit}/paper-api/src/main/java/${relativePath}`;
      const response = await fetch(url, { timeout: 40_000 });
      if (response.status === 404) continue;
      if (!response.ok)
        throw new Error(
          `Could not download Paper source ${relativePath}: HTTP ${response.status}`
        );

      content = await response.text();
      await fs.mkdir(path.dirname(cachedPath), { recursive: true });
      await fs.writeFile(cachedPath, content);
    }

    const declarationRegex = new RegExp(`\\benum\\s+${enumName}\\b`);
    const declaration = declarationRegex.exec(content);
    if (!declaration) continue;

    const bodyStart = content.indexOf(
      '{',
      declaration.index! + declaration[0].length
    );
    if (bodyStart < 0) continue;
    const bodyEnd = findClosingDelimiter(content, bodyStart, '{', '}');
    if (bodyEnd < 0) continue;

    const values = getEnumEntries(content.slice(bodyStart + 1, bodyEnd));
    if (values.length > 0) return values;
  }

  return undefined;
};

const readZipEntry = (archive: Buffer, entryPath: string) => {
  const endOfCentralDirectory = archive.lastIndexOf(
    Buffer.from([0x50, 0x4b, 0x05, 0x06])
  );
  if (endOfCentralDirectory < 0)
    throw new Error('Invalid Paperweight Mache sources archive');

  const fileCount = archive.readUInt16LE(endOfCentralDirectory + 10);
  let centralDirectoryOffset = archive.readUInt32LE(
    endOfCentralDirectory + 16
  );

  for (let index = 0; index < fileCount; index++) {
    if (archive.readUInt32LE(centralDirectoryOffset) !== 0x02014b50)
      throw new Error('Invalid Paperweight Mache sources archive directory');

    const compression = archive.readUInt16LE(centralDirectoryOffset + 10);
    const compressedSize = archive.readUInt32LE(centralDirectoryOffset + 20);
    const nameLength = archive.readUInt16LE(centralDirectoryOffset + 28);
    const extraLength = archive.readUInt16LE(centralDirectoryOffset + 30);
    const commentLength = archive.readUInt16LE(centralDirectoryOffset + 32);
    const localHeaderOffset = archive.readUInt32LE(
      centralDirectoryOffset + 42
    );
    const nameStart = centralDirectoryOffset + 46;
    const name = archive.toString('utf8', nameStart, nameStart + nameLength);

    if (name === entryPath) {
      if (archive.readUInt32LE(localHeaderOffset) !== 0x04034b50)
        throw new Error(`Invalid local ZIP header for ${entryPath}`);

      const localNameLength = archive.readUInt16LE(localHeaderOffset + 26);
      const localExtraLength = archive.readUInt16LE(localHeaderOffset + 28);
      const dataStart =
        localHeaderOffset + 30 + localNameLength + localExtraLength;
      const compressed = archive.subarray(
        dataStart,
        dataStart + compressedSize
      );

      if (compression === 0) return compressed.toString('utf8');
      if (compression === 8)
        return inflateRawSync(compressed).toString('utf8');
      throw new Error(
        `Unsupported ZIP compression method ${compression} for ${entryPath}`
      );
    }

    centralDirectoryOffset +=
      46 + nameLength + extraLength + commentLength;
  }

  return undefined;
};

const findMacheEnum = async (
  type: string,
  importedNames: Set<string>,
  projectDirectory: string | undefined,
  archivePaths: string[]
) => {
  const enumName = type.split('.').pop()!;
  const relativePaths = new Set<string>();

  for (const importedName of importedNames)
    relativePaths.add(getSourceClassPath(importedName));

  for (const relativePath of relativePaths) {
    const projectSourcePaths = projectDirectory
      ? [
          path.resolve(projectDirectory, relativePath),
          path.resolve(projectDirectory, 'src/main/java', relativePath),
          path.resolve(projectDirectory, 'paper-server/src/main/java', relativePath),
        ]
      : [];
    for (const sourcePath of projectSourcePaths) {
      try {
        const content = await fs.readFile(sourcePath, 'utf8');
        const values = parseJavaEnum(content, enumName);
        if (values) return values;
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
      }
    }

    for (const archivePath of archivePaths) {
      const archive = await fs.readFile(archivePath);
      const content = readZipEntry(archive, relativePath);
      if (!content) continue;

      const values = parseJavaEnum(content, enumName);
      if (values) return values;
    }
  }

  return undefined;
};

const getSourceArchives = async (directory: string): Promise<string[]> => {
  let entries;
  try {
    entries = await fs.readdir(directory, { withFileTypes: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return [];
    throw error;
  }

  const nested = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.resolve(directory, entry.name);
      if (entry.isDirectory()) return getSourceArchives(entryPath);
      return entry.isFile() && entry.name.endsWith('-sources.jar')
        ? [entryPath]
        : [];
    })
  );
  return nested.flat();
};

const findLocalDependencyEnum = async (
  type: string,
  importedNames: Set<string>
) => {
  localSourceArchivesPromise ??= getSourceArchives(
    LOCAL_DEPENDENCY_SOURCES_DIR
  );
  const sourceArchives = await localSourceArchivesPromise;
  const enumName = type.split('.').pop()!;
  const relativePaths = new Set<string>();

  for (const importedName of importedNames)
    relativePaths.add(getSourceClassPath(importedName));

  for (const archivePath of sourceArchives) {
    let archive = localSourceArchives.get(archivePath);
    if (!archive) {
      archive = await fs.readFile(archivePath);
      localSourceArchives.set(archivePath, archive);
    }
    for (const relativePath of relativePaths) {
      const content = readZipEntry(archive, relativePath);
      if (!content) continue;

      const values = parseJavaEnum(content, enumName);
      if (values) return values;
    }
  }

  return undefined;
};

const parseJavaEnum = (content: string, enumName: string) => {
  const declaration = new RegExp(`\\benum\\s+${enumName}\\b`).exec(content);
  if (!declaration) return undefined;
  const bodyStart = content.indexOf(
    '{',
    declaration.index! + declaration[0].length
  );
  if (bodyStart < 0) return undefined;
  const bodyEnd = findClosingDelimiter(content, bodyStart, '{', '}');
  if (bodyEnd < 0) return undefined;

  const values = getEnumEntries(content.slice(bodyStart + 1, bodyEnd));
  return values.length > 0 ? values : undefined;
};

const findMacheSources = async () => {
  const configuredDirectory = LOCAL_CORE_PROJECT_DIR
    ? path.resolve(LOCAL_CORE_PROJECT_DIR, '.gradle/caches/paperweight-userdev/v2/work')
    : PAPERWEIGHT_WORK_DIR;
  const workDirectories = [
    configuredDirectory,
    ...(configuredDirectory === PAPERWEIGHT_WORK_DIR ? [] : [PAPERWEIGHT_WORK_DIR]),
  ];
  const archives = new Set<string>();

  for (const workDirectory of workDirectories) {
    let entries: string[];
    try {
      entries = await fs.readdir(workDirectory);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') continue;
      throw error;
    }

    const candidates = await Promise.all(
      entries
        .filter((entry) => entry.startsWith('setupMacheSources_'))
        .map(async (entry) => {
          const archive = path.resolve(workDirectory, entry, 'output.zip');
          try {
            const stats = await fs.stat(archive);
            return { archive, modifiedAt: stats.mtimeMs };
          } catch (error) {
            if ((error as NodeJS.ErrnoException).code === 'ENOENT')
              return undefined;
            throw error;
          }
        })
    );

    candidates
      .filter((candidate) => candidate !== undefined)
      .sort((left, right) => right.modifiedAt - left.modifiedAt)
      .forEach(({ archive }) => archives.add(archive));
  }

  return [...archives];
};

const getLocalEnumValues = (
  type: string,
  importedNames: Set<string>,
  localEnums: LocalEnum[]
) => {
  const importedMatches = localEnums.filter((localEnum) => {
    const sourceClassName = localEnum.packageName
      ? `${localEnum.packageName}.${localEnum.fileClassName}`
      : localEnum.fileClassName;
    const topLevelEnumName = localEnum.packageName
      ? `${localEnum.packageName}.${localEnum.enumName}`
      : localEnum.enumName;
    return (
      localEnum.enumName === type.split('.').pop() &&
      [...importedNames].some(
        (importedName) =>
          importedName === topLevelEnumName ||
          importedName === sourceClassName ||
          importedName.startsWith(`${sourceClassName}.`)
      )
    );
  });
  if (importedMatches.length === 1) return importedMatches[0].values;
  return undefined;
};

export const generateEnumsPatch = async () => {
  const [allSources, actionSources, utilitySources] = await Promise.all([
    getSourceFiles(''),
    getSourceFiles('action'),
    getLocalUtilitySources(),
  ]);
  const allKotlinSources = [...allSources, ...utilitySources];
  const localEnums = getKotlinEnums(allKotlinSources);
  const typeAliases = getKotlinTypeAliases(utilitySources);
  const enumTypes = getEnumTypes(actionSources);
  const externalTypes = [...enumTypes].filter(
    ([type, importedNames]) =>
      [...importedNames].some((importedName) => {
        const resolvedName = resolveTypeAlias(importedName, typeAliases);
        return !getLocalEnumValues(
          resolvedName,
          new Set([importedName, resolvedName]),
          localEnums
        );
      })
  );
  const macheSources =
    externalTypes.length > 0 ? await findMacheSources() : [];
  const enums: EnumValues = {};
  let paperCommit: string | undefined;

  for (const [type, importedNames] of enumTypes) {
    const candidates = new Map<string, string[]>();

    for (const importedName of importedNames) {
      const resolvedName = resolveTypeAlias(importedName, typeAliases);
      const valuesFromKotlin = getLocalEnumValues(
        resolvedName,
        new Set([importedName, resolvedName]),
        localEnums
      );
      if (valuesFromKotlin) {
        candidates.set(importedName, valuesFromKotlin);
        continue;
      }

      const resolvedNames = new Set([resolvedName]);
      const localCoreValues = await findMacheEnum(
        resolvedName,
        resolvedNames,
        LOCAL_CORE_PROJECT_DIR,
        macheSources
      );
      const localDependencyValues = localCoreValues
        ? undefined
        : await findLocalDependencyEnum(resolvedName, resolvedNames);
      if (!localCoreValues && !localDependencyValues && !paperCommit)
        paperCommit = await readPaperCommit();
      const paperValues =
        localCoreValues || localDependencyValues
          ? undefined
          : await findPaperEnum(resolvedName, resolvedNames, paperCommit!);
      const sourceValues =
        localCoreValues ?? localDependencyValues ?? paperValues;
      if (!sourceValues)
        throw new Error(
          `Could not find enum values for ${importedName} in project or Paper ${SERVER_VERSION} sources`
        );
      candidates.set(importedName, sourceValues);
    }

    if (candidates.size === 1) {
      const values = candidates.values().next().value as string[];
      enums[type] = values;
      if (type === 'TriState') enums.TriStateEnum = values;
    } else {
      for (const [importedName, values] of candidates)
        enums[importedName] = values;
    }
  }

  const booleanEnum = localEnums.find(
    (localEnum) => localEnum.fileClassName === 'BooleanEnum'
  );
  if (booleanEnum) enums.Boolean = booleanEnum.values;
  if (enums.TriState && !enums.TriStateEnum)
    enums.TriStateEnum = enums.TriState;

  await fs.writeFile(ENUMS_FILE, toPrettyPrintJson(enums));
  success(`generated enum patches for Paper ${SERVER_VERSION}`);
};

if (require.main === module) {
  generateEnumsPatch();
}
