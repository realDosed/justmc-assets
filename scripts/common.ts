import path from 'path';
import fs from 'fs';
import chalk from 'chalk';

export const toPrettyPrintJson = (value: any) => JSON.stringify(value, null, 2);

export const matches = (input: string, regexp: RegExp) =>
  Array.from(input.matchAll(regexp));

const COMMENT_REGEX = /\/\/.*/g;

export const removeComments = (contents: string) =>
  contents.replace(COMMENT_REGEX, '');

export const uncommentKotlinDeclarations = (contents: string) =>
  contents.replace(
    /^([ \t]*)\/\/\s?(?=(?:val\s+\w+\s*=\s*register\b|object\s+\w+\s*:[^\n]*\w*(?:Action|Trigger)\b|val\s+\w+\s+by\s+\w+\s*\())/gm,
    '$1'
  );

export type Dictionary<T = Record<any, any>> = {
  [key: string]: T;
};

export type CachedIconType = 'game_value' | 'event' | 'action';
export type CachedIcon = {
  id: string;
  type: CachedIconType;
  material: string;
  amount: number;
  hasGlint: boolean;

  /**
   * Player head texture
   */
  texture?: string;
};

export const fileExists = async (path: string) =>
  !!(await fs.promises.stat(path).catch((e) => false));

///////////////////////////////////////////////////////////////////////////////

export const success = (...args: any[]) =>
  console.log(chalk.green('success'), ...args);

export const info = (...args: any[]) =>
  console.log(chalk.blue('info'), ...args);

export const warn = (...args: any[]) =>
  console.log(chalk.yellow('warn'), ...args);

let shouldExit = false;
export const error = (...args: any[]) => {
  shouldExit = true;
  console.log(chalk.red('error'), ...args);
  return void 0 as never;
};

export const exitIfAnyErrors = () => {
  if (shouldExit) process.exit(1);
};

///////////////////////////////////////////////////////////////////////////////

export const CACHE_DIR = path.resolve(__dirname, '../.cache');
if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR);
export const PATCHES_DIR = path.resolve(__dirname, '../patches');

export const SOURCE_CACHE_DIR = path.resolve(CACHE_DIR, 'creative-plus');
export const SOURCE_ROOT = SOURCE_CACHE_DIR;

export type KotlinSourceFile = {
  path: string;
  content: string;
};

let allSourceFiles: Promise<KotlinSourceFile[]> | undefined;

export async function getKotlinFiles(
  directory = SOURCE_ROOT
): Promise<string[]> {
  const entries = await fs.promises.readdir(directory, { withFileTypes: true });
  const files: string[][] = await Promise.all(
    entries.map(async (entry): Promise<string[]> => {
      const filePath = path.resolve(directory, entry.name);
      if (entry.isDirectory()) return getKotlinFiles(filePath);
      if (!entry.isFile() || path.extname(entry.name) !== '.kt') return [];
      return [filePath];
    })
  );

  return files.flat();
}

export const sourcePath = (relativePath: string) =>
  path.resolve(SOURCE_ROOT, relativePath);

export const readSourceFile = (relativePath: string) =>
  fs.promises.readFile(sourcePath(relativePath), 'utf8');

export async function getSourceFiles(relativePath: string) {
  const files = await getKotlinFiles(sourcePath(relativePath));
  return Promise.all(
    files.map(async (filePath) => ({
      path: filePath,
      content: await fs.promises.readFile(filePath, 'utf8'),
    }))
  );
}

export async function getImportedKotlinSources(contents: string) {
  const imports = [
    ...contents.matchAll(/^\s*import\s+([\w.*]+)(?:\s+as\s+(\w+))?/gm),
  ].map(([, importPath, alias]) => ({
    packageName: importPath.endsWith('.*')
      ? importPath.slice(0, -2)
      : importPath.slice(0, importPath.lastIndexOf('.')),
    name: alias || importPath.split('.').pop()!,
    wildcard: importPath.endsWith('.*'),
  }));

  if (imports.length === 0) return [];

  allSourceFiles ??= (async () => {
    const files = await getKotlinFiles();
    return Promise.all(
      files.map(async (filePath) => ({
        path: filePath,
        content: await fs.promises.readFile(filePath, 'utf8'),
      }))
    );
  })();

  const sourceFiles = await allSourceFiles;
  return sourceFiles
    .filter((file) => {
      const packageName = file.content.match(/^\s*package\s+([\w.]+)/m)?.[1];
      return imports.some(
        (item) =>
          packageName === item.packageName &&
          (item.wildcard ||
            path.basename(file.path, '.kt') === item.name ||
            new RegExp(
              `\\b(?:object|class|interface|enum\\s+class|val|fun)\\s+${item.name}\\b`
            ).test(file.content))
      );
    })
    .map((file) => file.content);
}

export const extractTextureValues = (contents: string[]) => {
  const values: Record<string, string> = {};
  const constantRegex =
    /(?:const\s+)?val\s+([A-Z][A-Z0-9_]*)\s*=\s*"([A-Za-z0-9+/=]+)"/g;

  contents.forEach((content) => {
    for (const [, name, value] of content.matchAll(constantRegex)) {
      values[name] = value;
    }
  });

  const declarationRegex =
    /^[ \t]*(?:private\s+)?(?:const\s+)?val\s+([A-Z][A-Z0-9_]*)\s*=/gm;

  contents.forEach((content) => {
    const declarations = [...content.matchAll(declarationRegex)];

    declarations.forEach((declaration, index) => {
      const start = declaration.index! + declaration[0].length;
      const end = declarations[index + 1]?.index ?? content.length;
      const profileValue = content
        .slice(start, end)
        .match(
          /ProfileProperty\s*\(\s*"textures"\s*,\s*(?:"([A-Za-z0-9+/=]+)"|([A-Z][A-Z0-9_]*))\s*\)/
        );

      if (profileValue) {
        const value = profileValue[1] || values[profileValue[2]];
        if (value) values[declaration[1]] = value;
      }
    });
  });

  return values;
};

export const extractIconTexture = (
  content: string,
  textureValues: Record<string, string>
) => {
  const textureValue = content.match(
    /setTextureValue\s*\(\s*(?:"([A-Za-z0-9+/=]+)"|([A-Z][A-Z0-9_]*))\s*\)/
  );
  if (textureValue) return textureValue[1] || textureValues[textureValue[2]];

  const profile = content.match(
    /(?:setProfile\s*\(|playerProfile\s*=\s*)(?:[A-Za-z_][\w]*\.)*([A-Z][A-Z0-9_]*)/
  );
  return profile ? textureValues[profile[1]] : undefined;
};

export async function loadCachedTextureValues(): Promise<Record<string, string>> {
  const files = await getKotlinFiles();
  const contents = await Promise.all(
    files.map((file) => fs.promises.readFile(file, 'utf8'))
  );

  return extractTextureValues(contents);
}

export async function extractValueTypeIcons(): Promise<Record<string, string>> {
  const content = await readSourceFile('core/value/ValueTypes.kt');
  const icons: Record<string, string> = {};

  const declarationRegex = /val\s+([A-Z][A-Z0-9_]*)\s*=\s*register\s*\(/g;
  const declarations = [...content.matchAll(declarationRegex)];
  const nextDeclarationRegex = /\n\s*val\s+[A-Z][A-Z0-9_]*\s*=/;
  const materialRegex =
    /ItemStack(?:\.of)?\s*\(\s*Material\.([A-Z0-9_]+)/g;

  for (let i = 0; i < declarations.length; i++) {
    const declaration = declarations[i];
    const name = declaration[1];
    const start = declaration.index! + declaration[0].length;
    const nextDeclaration = nextDeclarationRegex.exec(content.slice(start));
    const end = nextDeclaration
      ? start + nextDeclaration.index
      : content.length;
    const block = content.slice(start, end);

    let iconPart = block;
    const aprilFirstIndex = block.indexOf('DurationUtils.isAprilFirst()');

    if (aprilFirstIndex !== -1) {
      const elseIndex = block.indexOf('else', aprilFirstIndex);

      if (elseIndex === -1) {
        error(`Could not find else branch for value type: ${name}`);
        continue;
      }

      iconPart = block.slice(elseIndex + 'else'.length);
    }

    const materials = [...iconPart.matchAll(materialRegex)].map(
      (match) => match[1]
    );

    if (materials.length === 0) {
      error(`Could not extract icon material for value type: ${name}`);
      continue;
    }

    icons[name] = materials[0];
  }

  return icons;
}

export const DATA_DIR = path.resolve(__dirname, '../data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

export const EVENTS_FILE = path.resolve(DATA_DIR, 'events.json');
export const GAME_VALUES_FILE = path.resolve(DATA_DIR, 'game_values.json');
export const ACTIONS_FILE = path.resolve(DATA_DIR, 'actions.json');
export const OUTPUT_FILE = path.resolve(__dirname, '../src/index.ts');

///////////////////////////////////////////////////////////////////////////////

export const ICONS_CACHE_DIR = path.resolve(CACHE_DIR, 'icons');
if (!fs.existsSync(ICONS_CACHE_DIR)) fs.mkdirSync(ICONS_CACHE_DIR);
export const GAME_VALUE_ICONS_CACHE_FILE = path.resolve(
  ICONS_CACHE_DIR,
  'game_values.json'
);
export const EVENT_ICONS_CACHE_FILE = path.resolve(
  ICONS_CACHE_DIR,
  'events.json'
);
export const ACTION_ICONS_CACHE_FILE = path.resolve(
  ICONS_CACHE_DIR,
  'actions.json'
);

export const ICONS_DIR = path.resolve(__dirname, '../icons');
if (!fs.existsSync(ICONS_DIR)) fs.mkdirSync(ICONS_DIR);