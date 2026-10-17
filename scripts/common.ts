import path from 'path';
import fs from 'fs';
import chalk from 'chalk';

export const toPrettyPrintJson = (value: any) => JSON.stringify(value, null, 2);

export const matches = (input: string, regexp: RegExp) =>
  Array.from(input.matchAll(regexp));

const COMMENT_REGEX = /\/\/.*/g;

export const removeComments = (contents: string) =>
  contents.replace(COMMENT_REGEX, '');

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

export const ACTIONS_DIR = path.resolve(CACHE_DIR, 'actions');
if (!fs.existsSync(ACTIONS_DIR)) fs.mkdirSync(ACTIONS_DIR);

export const ENUMS_CACHE_DIR = path.resolve(CACHE_DIR, 'enums');
if (!fs.existsSync(ENUMS_CACHE_DIR)) fs.mkdirSync(ENUMS_CACHE_DIR);

export const CACHE_TRIGGERS_FILE = path.resolve(CACHE_DIR, 'Triggers.kt');
export const CACHE_GAME_VALUES_FILE = path.resolve(CACHE_DIR, 'GameValues.kt');
export const CACHE_GAME_VALUES_MENU_FILE = path.resolve(
  CACHE_DIR,
  'GameValuesMenu.kt'
);
export const CACHE_VALUE_TYPES_FILE = path.resolve(CACHE_DIR, 'ValueTypes.kt');

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
  const cachedDirectories = [
    ACTIONS_DIR,
    ACTION_MENUS_CACHE_DIR,
    TRIGGER_MENUS_CACHE_DIR,
  ];
  const cachedFiles = [CACHE_GAME_VALUES_MENU_FILE];

  for (const directory of cachedDirectories) {
    const files = await fs.promises.readdir(directory);
    cachedFiles.push(...files.map((file) => path.resolve(directory, file)));
  }

  const contents = await Promise.all(
    cachedFiles.map((file) => fs.promises.readFile(file, 'utf8'))
  );

  return extractTextureValues(contents);
}

export async function extractValueTypeIcons(): Promise<Record<string, string>> {
  const content = await fs.promises.readFile(CACHE_VALUE_TYPES_FILE, 'utf8');
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

///////////////////////////////////////////////////////////////////////////////

export const MENU_CACHE_DIR = path.resolve(CACHE_DIR, 'menu');
if (!fs.existsSync(MENU_CACHE_DIR)) fs.mkdirSync(MENU_CACHE_DIR);

export const ACTION_MENUS_CACHE_DIR = path.resolve(MENU_CACHE_DIR, 'actions');
if (!fs.existsSync(ACTION_MENUS_CACHE_DIR))
  fs.mkdirSync(ACTION_MENUS_CACHE_DIR);

export const TRIGGER_MENUS_CACHE_DIR = path.resolve(MENU_CACHE_DIR, 'triggers');
if (!fs.existsSync(TRIGGER_MENUS_CACHE_DIR))
  fs.mkdirSync(TRIGGER_MENUS_CACHE_DIR);

///////////////////////////////////////////////////////////////////////////////

export const DATA_DIR = path.resolve(__dirname, '../data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

export const EVENTS_FILE = path.resolve(DATA_DIR, 'events.json');
export const GAME_VALUES_FILE = path.resolve(DATA_DIR, 'game_values.json');
export const ACTIONS_FILE = path.resolve(DATA_DIR, 'actions.json');

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

export const OUTPUT_FILE = path.resolve(__dirname, '../src/index.ts');

///////////////////////////////////////////////////////////////////////////////

export const PATCHES_DIR = path.resolve(__dirname, '../patches');
if (!fs.existsSync(PATCHES_DIR)) {
  fs.mkdirSync(PATCHES_DIR);
  error('No patches dir found!');
}
