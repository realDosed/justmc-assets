import { promises as fs } from 'fs';
import chalk from 'chalk';
import path from 'path';

import {
  PATCHES_DIR,
  error,
  exitIfAnyErrors,
  info,
  removeComments,
  success,
  Dictionary,
  ACTIONS_FILE,
  toPrettyPrintJson,
  matches,
  CachedIcon,
  ACTION_ICONS_CACHE_FILE,
  extractValueTypeIcons,
  extractIconTexture,
  loadCachedTextureValues,
  mapWithProgress,
  getSourceFiles,
  getImportedKotlinSources,
  extractSubcategoryMenuPositions,
  logDataSummary,
  isExcludedDataId,
  readSourceFile,
  uncommentKotlinDeclarations,
  warn,
} from './common';

import { naiveActionTypeFromId } from '../src/types/Action';
import ActionArgument, {
  ActionArgumentTypes,
  argumentTypeFromInternal,
  MinecraftID,
  NumberActionArgumentType,
} from '../src/types/ActionArgument';
import { ActionCategories } from '../src/ActionsData';
import {
  generateEnumsPatch,
  getImportedEnumNames,
} from './extract-enums';

///////////////////////////////////////////////////////////////////////////////

const ACTION_NAME = /object\s*(.*?)\s*:.*?"(.*?)"/gms;
const ACTIONS_PATCHES_FILE = path.resolve(PATCHES_DIR, 'actions.json');
const ENUMS_PATCHES_FILE = path.resolve(PATCHES_DIR, 'enums.json');

const ARGUMENT_DECLARATION =
  /^[ \t]*val\s+\w+\s+by\s+([a-z]+(?:[A-Z](?!ist)[a-z]*)?)(List)?\s*(?:<([^<>]*)>)?\s*\(/gm;

const ARGUMENT_VALUE_SLOTS = /parsing\s*=\s*(.*)/;
const ARGUMENT_DESCRIPTION_SLOTS = /descriptions?\s*=\s*(.*)/;
const SLOTS = /(?:\(?([\d]+)\.\.([\d]+)\)?)|([\d]+)/g;

type Enums = Dictionary<string[]>;

const ACTION_OBJECTS: Record<string, string> = {
  [ActionCategories.PLAYER]: 'player',
  [ActionCategories.IF_PLAYER]: 'player',
  [ActionCategories.ENTITY]: 'entity',
  [ActionCategories.IF_ENTITY]: 'entity',
  [ActionCategories.GAME]: 'world',
  [ActionCategories.IF_GAME]: 'world',
  [ActionCategories.CONTROL]: 'code',
  [ActionCategories.CONTROLLER]: 'controller',
  [ActionCategories.SET_VARIABLE]: 'variable',
  [ActionCategories.IF_VARIABLE]: 'variable',
  [ActionCategories.SELECT]: 'select',
  [ActionCategories.REPEAT]: 'repeat',
  [ActionCategories.ELSE]: 'code',
  [ActionCategories.CALL_FUNCTION]: 'code',
  [ActionCategories.START_PROCESS]: 'code',
  [ActionCategories.EMPTY]: 'code',
};

const ACTION_NAME_OVERRIDES: Record<string, string> = {
  control_end_thread: 'break',
  controller_exception: 'catch_exception',
  entity_celar_potion_effects: 'clear_potion_effects',
  entity_set_display_culling_suze: 'set_display_culling_size',
  entity_set_no_physics: 'no_physics',
  game_set_world_gamerule: 'set_gamerule',
  if_entity_dummy: 'is_dummy',
  if_game_dummy: 'is_dummy',
  if_player_dummy: 'is_dummy',
  if_player_is_holding: 'holding',
  if_variable_dummy: 'is_dummy',
  player_send_message: 'message',
  set_variable_hash: 'get_text_hash',
  set_variable_multiple: 'set_values',
  set_variable_sort_any_list: 'sort_list',
  set_variable_sort_any_map: 'sort_map',
  set_variable_text: 'set_text',
  set_variable_text_case: 'set_text_case',
  set_variable_text_length: 'get_text_length',
  set_variable_value: 'set_value',
  set_variable_vector: 'set_vector',
  set_variable_warp: 'wrap',
};

const TOP_LEVEL_ACTION_CATEGORIES = new Set<string>([
  ActionCategories.CALL_FUNCTION,
  ActionCategories.START_PROCESS,
  ActionCategories.ELSE,
  ActionCategories.EMPTY,
]);

const getActionName = (id: string, category: string) =>
  ACTION_NAME_OVERRIDES[id] ||
  (id.startsWith(`${category}_`) ? id.slice(category.length + 1) : id);

///////////////////////////////////////////////////////////////////////////////

const MENU_ACTIONS =
  /(?<!\.)action\(\s*(.*?),(.*?)(?=action|open|subcategory)/gms;

const MENU_ACTION_SUBCATEGORY = /translatable.*subcategory\.(.*)\./;

const MENU_ACTION_MATERIAL =
  /(?:ItemStack(?:\.of)?\(\s*Material\.([A-Z0-9_]+)(?:\s*,\s*(\d+)\s*)?\s*\)|Material\.([A-Z0-9_]+)|ValueTypes\.([A-Z0-9_]+)\.icon(?:\.clone\(\))?)/;
const WORK_WITH_KEYS = /workWithKeys\s*=\s*(.*?)\)/;
const ADDITIONAL_INFO_KEYS = /additionalInfoKeys\s*=\s*(.*?)\)/;
const STRING = /"(.*?)"/gms;

type ActionMenuIcon = CachedIcon & {
  category?: string;
  subcategory: string | null;
  worksWith: string[];
  additionalInfo: string[];
};

const REGISTERED_ACTIONS = /register\((\w+)\)/g;
const MENU_ACTION_REFERENCES = /(?<!\.)action\(\s*(\w+)/g;

const menuReferences = (content: string, regex: RegExp) =>
  matches(content, regex).reduce<Record<string, boolean>>((references, match) => {
    const name = match[1];
    const lineStart = content.lastIndexOf('\n', match.index) + 1;
    const beforeCall = content.slice(lineStart, match.index);
    const isCommented = /^\s*\/\//.test(beforeCall);
    references[name] = references[name] || !isCommented;
    return references;
  }, {});

const getStrings = (content: string, regex: RegExp) =>
  matches(content.match(regex)?.[1] || '', STRING).map(([, key]) => key);

const extractActionMenuIcons = (
  actionMenuFile: string,
  actionNames: Set<string>,
  valueTypeIcons: Record<string, string>,
  textureValues: Record<string, string>,
  importedSources: string[]
) => {
  const subcategory =
    actionMenuFile.match(MENU_ACTION_SUBCATEGORY)?.[1] || null;

  return matches(actionMenuFile, MENU_ACTIONS).reduce<
    Dictionary<ActionMenuIcon>
  >((acc, [, name, iconPart]) => {
    if (!actionNames.has(name)) return acc;

    const match =
      iconPart.match(MENU_ACTION_MATERIAL) ||
      importedSources
        .map((source) => source.match(MENU_ACTION_MATERIAL))
        .find(Boolean);

    if (!match) {
      warn(`Could not extract menu icon for action: ${name}; using category icon`);
      return acc;
    }

    const material =
      match[1] ||
      match[3] ||
      (match[4] ? valueTypeIcons[match[4]] : undefined);

    const amount = Number(match[2]) || 1;

    if (!material) {
      warn(`Could not resolve menu icon for action: ${name}; using category icon`);
      return acc;
    }

    const hasGlint =
      /addUnsafeEnchantment|glint\s*\(\s*\)|setData\s*\(\s*DataComponentTypes\.ENCHANTMENT_GLINT_OVERRIDE\s*\)|setEnchantmentGlintOverride\s*\(\s*true\s*\)/.test(
        iconPart
      );

    const worksWith = getStrings(iconPart, WORK_WITH_KEYS);
    const additionalInfo = getStrings(iconPart, ADDITIONAL_INFO_KEYS);
    const texture = extractIconTexture(iconPart, textureValues);

    return {
      ...acc,
      [name]: {
        id: name.toLowerCase(),
        type: 'action',
        material,
        amount,
        subcategory,
        hasGlint,
        worksWith,
        additionalInfo,
        ...(texture ? { texture } : {}),
      },
    };
  }, {});
};

///////////////////////////////////////////////////////////////////////////////

const getSlots = (content: string) => {
  return matches(content, SLOTS).reduce<number[]>(
    (acc, [_, number, other, single]) => {
      if (single) return [...acc, +single];
      const slotsInRange = Array(+other - +number + 1)
        .fill(null)
        .map((_, i) => +number + i);

      return [...acc, ...slotsInRange];
    },
    []
  );
};

const readBalancedBlock = (
  content: string,
  start: number,
  opening: string,
  closing: string
) => {
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = start; index < content.length; index++) {
    const char = content[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') inString = false;
      continue;
    }

    if (char === '"') inString = true;
    else if (char === opening) depth++;
    else if (char === closing && --depth === 0) return index;
  }

  return -1;
};

const splitArguments = (content: string) => {
  const arguments_: string[] = [];
  let start = 0;
  let parentheses = 0;
  let brackets = 0;
  let braces = 0;
  let generics = 0;
  let inString = false;
  let escaped = false;

  for (let index = 0; index < content.length; index++) {
    const char = content[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') inString = false;
      continue;
    }

    if (char === '"') inString = true;
    else if (char === '(') parentheses++;
    else if (char === ')') parentheses--;
    else if (char === '[') brackets++;
    else if (char === ']') brackets--;
    else if (char === '{') braces++;
    else if (char === '}') braces--;
    else if (char === '<' && content[index + 1] !== '=') generics++;
    else if (char === '>' && generics > 0) generics--;
    else if (
      char === ',' &&
      parentheses === 0 &&
      brackets === 0 &&
      braces === 0 &&
      generics === 0
    ) {
      arguments_.push(content.slice(start, index).trim());
      start = index + 1;
    }
  }

  const lastArgument = content.slice(start).trim();
  if (lastArgument) arguments_.push(lastArgument);
  return arguments_;
};

const getTopLevelAssignment = (content: string) => {
  let inString = false;
  let escaped = false;
  let depth = 0;
  for (let index = 0; index < content.length; index++) {
    const char = content[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') inString = false;
      continue;
    }

    if (char === '"') inString = true;
    else if (char === '(' || char === '[' || char === '{') depth++;
    else if (char === ')' || char === ']' || char === '}') depth--;
    else if (char === '=' && depth === 0) return index;
  }
  return -1;
};

const parseKotlinNumber = (expression: string): number | undefined => {
  const value = expression.trim();
  const constants: Record<string, number> = {
    'Int.MIN_VALUE': -2147483648,
    'Int.MAX_VALUE': 2147483647,
    'Long.MIN_VALUE': -9223372036854775808,
    'Long.MAX_VALUE': 9223372036854776000,
    'Float.MIN_VALUE': 1.401298464324817e-45,
    'Float.MAX_VALUE': 3.4028234663852886e38,
    'Double.MIN_VALUE': Number.MIN_VALUE,
    'Double.MAX_VALUE': Number.MAX_VALUE,
    'Character.MIN_RADIX': 2,
    'Character.MAX_RADIX': 36,
    'ArrayValueContainer.MAX_ARRAY_VALUES': 20000,
  };
  if (Object.prototype.hasOwnProperty.call(constants, value))
    return constants[value];

  if (value.startsWith('(') && value.endsWith(')')) {
    const closingParenthesis = readBalancedBlock(value, 0, '(', ')');
    if (closingParenthesis === value.length - 1)
      return parseKotlinNumber(value.slice(1, -1));
  }

  if (value.startsWith('-')) {
    const positiveValue = parseKotlinNumber(value.slice(1));
    if (positiveValue !== undefined) return -positiveValue;
  }

  const multiplication = value.match(/^(.+?)\s*\*\s*(.+)$/);
  if (multiplication) {
    const left = parseKotlinNumber(multiplication[1]);
    const right = parseKotlinNumber(multiplication[2]);
    if (left !== undefined && right !== undefined) return left * right;
  }

  if (
    !/^[+-]?(?:\d[\d_]*(?:\.\d[\d_]*)?|\.\d[\d_]*)(?:[eE][+-]?\d[\d_]*)?[fFdDlL]?$/.test(
      value
    )
  )
    return undefined;

  const number = Number(value.replace(/_/g, '').replace(/[fFdDlL]$/, ''));
  return Number.isFinite(number) ? number : undefined;
};

const parseKotlinDefaultValue = (
  expression: string,
  allowEnumValue = false
): unknown => {
  const value = expression.trim();
  if (value === 'true' || value === 'false') return value;
  if (value === 'null') return null;
  if (/^(?:emptyList|listOf)\s*\(/.test(value)) {
    const openingParenthesis = value.indexOf('(');
    const closingParenthesis = readBalancedBlock(
      value,
      openingParenthesis,
      '(',
      ')'
    );
    if (closingParenthesis === value.length - 1) {
      const body = value.slice(openingParenthesis + 1, closingParenthesis);
      return value.startsWith('emptyList') || !body.trim()
        ? []
        : splitArguments(body).map((part) =>
            parseKotlinDefaultValue(part, allowEnumValue)
          );
    }
  }
  if (/^(?:emptyMap|mapOf)\s*</.test(value) || /^emptyMap\s*\(/.test(value))
    return {};
  if (/^(?:ArrayValueContainer|MapValueContainer)\.empty\s*\(/.test(value))
    return value.startsWith('ArrayValueContainer') ? [] : {};
  if (/^EmptyValueContainer\s*</.test(value)) return null;
  if (/^CellValue\s*\(/.test(value))
    return { name: '', global: false, storage: null, storagePath: null };
  if (/^Variable\.of\s*\(/.test(value))
    return { name: 'default', scope: 'LOCAL' };
  if (/^Vector\s*\(/.test(value))
    return { x: 0, y: 0, z: 0 };
  if (/^Location\s*\(/.test(value))
    return { x: 0, y: 0, z: 0, yaw: 0, pitch: 0 };
  if (/^SoundValue\s*\(/.test(value))
    return { id: 'minecraft:dummy', volume: 0, pitch: 0 };
  if (/^ParticleValue\s*\(/.test(value))
    return {
      id: 'minecraft:white_ash',
      count: 1,
      spread: [0, 0],
      motion: { x: 0, y: 0, z: 0 },
    };
  if (/^PotionValue\s*\(/.test(value))
    return { type: 'minecraft:speed', duration: 0, amplifier: 0 };

  const number = parseKotlinNumber(value);
  if (number !== undefined) return number;

  const stringValue = value.match(/^("(?:\\.|[^"\\])*")$/);
  if (stringValue) {
    try {
      return JSON.parse(stringValue[1]);
    } catch {
      return undefined;
    }
  }

  const textValue = value.match(/^TextValue\(\s*("(?:\\.|[^"\\])*")/);
  if (textValue) {
    try {
      return JSON.parse(textValue[1]);
    } catch {
      return undefined;
    }
  }

  const material = value.match(/Material\.([A-Z0-9_]+)/);
  if (material) return `minecraft:${material[1].toLowerCase()}`;

  if (allowEnumValue) {
    const enumValue = value.match(/(?:^|\.)([A-Z][A-Z0-9_]*)$/);
    if (enumValue) return enumValue[1];
  }

  return undefined;
};

const getArgumentHelperDefaults = (content: string) => {
  const defaults: Record<string, string> = {};
  const declaration = /\bfun\s+(?:<([\s\S]*?)>\s*)?([a-z]\w*)\s*\(/g;

  for (const match of content.matchAll(declaration)) {
    const openingParenthesis = match.index! + match[0].lastIndexOf('(');
    const closingParenthesis = readBalancedBlock(
      content,
      openingParenthesis,
      '(',
      ')'
    );
    if (closingParenthesis < 0) continue;

    const parameters = splitArguments(
      content.slice(openingParenthesis + 1, closingParenthesis)
    );
    const defaultParameter = parameters.find((parameter) =>
      /^\s*defaultValue\s*:/.test(parameter)
    );
    if (!defaultParameter) continue;

    const assignment = getTopLevelAssignment(defaultParameter);
    if (assignment < 0) continue;
    defaults[match[2]] = defaultParameter.slice(assignment + 1).trim();
  }

  return defaults;
};

const getFallbackDefaultValue = (
  type: ActionArgument['type'],
  plural: boolean,
  enumValues: string[] = []
) => {
  if (plural) return [];

  switch (type) {
    case ActionArgumentTypes.NUMBER:
      return 0;
    case ActionArgumentTypes.TEXT:
      return '';
    case ActionArgumentTypes.ITEM:
      return 'minecraft:air';
    case ActionArgumentTypes.BLOCK:
      return 'minecraft:stone';
    case ActionArgumentTypes.LOCATION:
      return { x: 0, y: 0, z: 0, yaw: 0, pitch: 0 };
    case ActionArgumentTypes.VECTOR:
      return { x: 0, y: 0, z: 0 };
    case ActionArgumentTypes.SOUND:
      return { id: 'minecraft:dummy', volume: 0, pitch: 0 };
    case ActionArgumentTypes.PARTICLE:
      return null;
    case ActionArgumentTypes.POTION:
      return { type: 'minecraft:speed', duration: 0, amplifier: 0 };
    case ActionArgumentTypes.CELL:
      return { name: '', global: false, storage: null, storagePath: null };
    case ActionArgumentTypes.LIST:
      return [];
    case ActionArgumentTypes.DICTIONARY:
      return {};
    case ActionArgumentTypes.VARIABLE:
      return { name: 'default', scope: 'LOCAL' };
    case ActionArgumentTypes.ANY:
      return null;
    case ActionArgumentTypes.ENUM:
      return enumValues[0];
    default:
      return undefined;
  }
};

const isMinecraftId = (value: unknown): value is MinecraftID =>
  typeof value === 'string' && /^minecraft:[a-z0-9_]+$/.test(value);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isNumber = (value: unknown): value is number =>
  typeof value === 'number';

const isLocationDefaultValue = (
  value: unknown
): value is { x: number; y: number; z: number; yaw: number; pitch: number } =>
  isRecord(value) &&
  isNumber(value.x) &&
  isNumber(value.y) &&
  isNumber(value.z) &&
  isNumber(value.yaw) &&
  isNumber(value.pitch);

const isVectorDefaultValue = (
  value: unknown
): value is { x: number; y: number; z: number } =>
  isRecord(value) &&
  isNumber(value.x) &&
  isNumber(value.y) &&
  isNumber(value.z);

const isSoundDefaultValue = (
  value: unknown
): value is { id: MinecraftID; volume: number; pitch: number } =>
  isRecord(value) &&
  isMinecraftId(value.id) &&
  isNumber(value.volume) &&
  isNumber(value.pitch);

const isParticleDefaultValue = (
  value: unknown
): value is {
  id: MinecraftID;
  count: number;
  spread: [number, number];
  motion: { x: number; y: number; z: number };
} =>
  isRecord(value) &&
  isMinecraftId(value.id) &&
  isNumber(value.count) &&
  Array.isArray(value.spread) &&
  value.spread.length === 2 &&
  value.spread.every(isNumber) &&
  isVectorDefaultValue(value.motion);

const isPotionDefaultValue = (
  value: unknown
): value is { type: MinecraftID; duration: number; amplifier: number } =>
  isRecord(value) &&
  isMinecraftId(value.type) &&
  isNumber(value.duration) &&
  isNumber(value.amplifier);

const isCellDefaultValue = (
  value: unknown
): value is {
  name: string;
  global: boolean;
  storage: string | null;
  storagePath: string | null;
} =>
  isRecord(value) &&
  typeof value.name === 'string' &&
  typeof value.global === 'boolean' &&
  (typeof value.storage === 'string' || value.storage === null) &&
  (typeof value.storagePath === 'string' || value.storagePath === null);

const isVariableDefaultValue = (
  value: unknown
): value is { name: string; scope: string } =>
  isRecord(value) &&
  typeof value.name === 'string' &&
  typeof value.scope === 'string';

const isDefaultValueOrList = <T>(
  value: unknown,
  guard: (item: unknown) => item is T
): value is T | T[] =>
  guard(value) || (Array.isArray(value) && value.every(guard));

const getArgumentOptions = (callContent: string) => {
  const parts = splitArguments(callContent);
  const options: Record<string, string> = {};
  let positionalIndex = 0;

  for (const part of parts.slice(1)) {
    const assignment = getTopLevelAssignment(part);
    if (assignment >= 0) {
      options[part.slice(0, assignment).trim()] = part
        .slice(assignment + 1)
        .trim();
    } else {
      positionalIndex++;
      options[`$${positionalIndex}`] = part;
    }
  }
  return options;
};

const getEnumEntries = (body: string) => {
  const entries: string[] = [];
  let start = 0;
  let parentheses = 0;
  let brackets = 0;
  let braces = 0;
  let inString = false;
  let escaped = false;

  for (let index = 0; index < body.length; index++) {
    const char = body[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') inString = false;
      continue;
    }

    if (char === '"') inString = true;
    else if (char === '(') parentheses++;
    else if (char === ')') parentheses--;
    else if (char === '[') brackets++;
    else if (char === ']') brackets--;
    else if (char === '{') braces++;
    else if (char === '}') braces--;
    else if (
      parentheses === 0 &&
      brackets === 0 &&
      braces === 0 &&
      (char === ',' || char === ';')
    ) {
      entries.push(body.slice(start, index));
      if (char === ';') {
        start = body.length;
        break;
      }
      start = index + 1;
    }
  }

  if (start < body.length) entries.push(body.slice(start));
  return entries
    .map((entry) => entry.match(/^\s*([A-Z_][\w]*)\b/)?.[1])
    .filter((name): name is string => Boolean(name));
};

const ENUM_DECLARATION = /\benum\s+class\s+([A-Za-z_]\w*)\b/g;

const getEnums = (content: string) => {
  const enums: Enums = {};

  for (const match of content.matchAll(ENUM_DECLARATION)) {
    const name = match[1];
    const declarationEnd = match.index! + match[0].length;
    const bodyStart = content.indexOf('{', declarationEnd);
    if (bodyStart < 0) continue;

    const bodyEnd = readBalancedBlock(content, bodyStart, '{', '}');
    if (bodyEnd < 0) continue;
    enums[name] = getEnumEntries(content.slice(bodyStart + 1, bodyEnd));
  }

  return enums;
};

const getArgumentDeclarations = (content: string) =>
  matches(content, ARGUMENT_DECLARATION).flatMap((match) => {
    const [, type, plural, enumName] = match;
    const openingParenthesis = match.index! + match[0].lastIndexOf('(');
    const closingParenthesis = readBalancedBlock(
      content,
      openingParenthesis,
      '(',
      ')'
    );
    if (closingParenthesis < 0) return [];

    const callContent = content.slice(
      openingParenthesis + 1,
      closingParenthesis
    );
    const id = callContent.match(/^\s*"([^"]+)"/)?.[1];
    if (!id) return [];

    let body = '';
    let declarationEnd = closingParenthesis + 1;
    let bodyStart = declarationEnd;
    while (/\s/.test(content[bodyStart] || '')) bodyStart++;
    if (content[bodyStart] === '{') {
      const bodyEnd = readBalancedBlock(content, bodyStart, '{', '}');
      if (bodyEnd >= 0) {
        body = content.slice(bodyStart + 1, bodyEnd);
        declarationEnd = bodyEnd + 1;
      }
    }

    const declaration = content.slice(match.index!, declarationEnd);
    return [
      [declaration, type, plural, enumName, id, callContent, body] as const,
    ];
  });

const getArguments = (
  action: string,
  enums: Enums,
  args: Dictionary,
  content: string,
  helperDefaults: Record<string, string>
) => {
  const _args = getArgumentDeclarations(content);
  const _enums: Enums = { ...enums, ...getEnums(content) };

  return _args.map<ActionArgument>(
    ([argumentDeclaration, type, plural, enumName, id, callContent, body]) => {
      const argumentType = argumentTypeFromInternal(type);
      if (!argumentType)
        return error(
          `Unknown action argument type ${chalk.cyan(type)} in action ${action}`
        );

      const options = getArgumentOptions(callContent);
      const isPlural = Boolean(plural);
      const helperName = `${type}${isPlural ? 'List' : ''}`;
      const rawDefaultValue =
        options.defaultValue ??
        options.$1 ??
        helperDefaults[helperName];
      let defaultValue =
        rawDefaultValue !== undefined
          ? parseKotlinDefaultValue(
            rawDefaultValue,
            argumentType === ActionArgumentTypes.ENUM
          )
          : undefined;
      const numericRange = options.range || options.$2;
      const range = numericRange?.split('..');
      const min =
        options.min !== undefined
          ? parseKotlinNumber(options.min)
          : range?.length === 2
            ? parseKotlinNumber(range[0])
            : undefined;
      const max =
        options.max !== undefined
          ? parseKotlinNumber(options.max)
          : range?.length === 2
            ? parseKotlinNumber(range[1])
            : undefined;
      const numberBounds = {
        ...(min !== undefined ? { min } : {}),
        ...(max !== undefined ? { max } : {}),
      };

      const _valueSlots = body.match(ARGUMENT_VALUE_SLOTS)?.[1];
      if (!_valueSlots)
        return error(
          `Could not get value slots of argument ${chalk.cyan(
            id
          )} in action ${action}`
        );
      const valueSlots = getSlots(_valueSlots);

      if (argumentType === ActionArgumentTypes.ENUM) {
        const defaultEnumName = argumentDeclaration.match(
          /\b(?:enum|triState)\s*(?:<[^>]*>)?\s*\(\s*"[^"]+"\s*,\s*([A-Z][\w]*(?:\.[A-Z][\w]*)*)\./
        )?.[1];
        const resolvedEnumName =
          enumName ||
          (type.toLowerCase() === 'tristate'
            ? 'TriStateEnum'
            : defaultEnumName);
        const enumValuesName =
          resolvedEnumName === 'TriState' ? 'TriStateEnum' : resolvedEnumName;
        const enumKeys =
          type === 'boolean'
            ? ['Boolean']
            : [
                ...getImportedEnumNames(content, enumValuesName || ''),
                enumValuesName || '',
              ];
        const values = enumKeys
          .map((key) => _enums[key])
          .find((enumValues) => enumValues !== undefined);
        if (!values)
          return error(
            `Could not get values of enum argument ${chalk.cyan(
              enumName
            )} in action ${action}`
          );

        const enumDefault =
          typeof defaultValue === 'boolean'
            ? String(defaultValue)
            : typeof defaultValue === 'string'
              ? defaultValue
              : undefined;
        const enumDefaultValue = enumDefault
          ? values.find(
              (value) => value.toLowerCase() === enumDefault.toLowerCase()
            )
          : values[0];
        if (enumDefaultValue === undefined)
          return error(
            `Could not get default value of enum argument ${chalk.cyan(
              id
            )} in action ${action}`
          );

        return {
          id,
          plural: false,
          type: argumentType,
          valueSlots,
          values,
          defaultValue: enumDefaultValue,
          ...args[id],
        };
      }

      const _descriptionSlots = body.match(ARGUMENT_DESCRIPTION_SLOTS)?.[1];
      const descriptionSlots = _descriptionSlots
        ? getSlots(_descriptionSlots)
        : [];
      if (defaultValue === undefined)
        defaultValue = getFallbackDefaultValue(
          argumentType,
          isPlural
        );
      if (
        defaultValue === null &&
        (argumentType === ActionArgumentTypes.LOCATION ||
          argumentType === ActionArgumentTypes.VECTOR)
      )
        defaultValue = getFallbackDefaultValue(argumentType, false);
      const defaultValueField = { defaultValue };

      if (argumentType === ActionArgumentTypes.NUMBER) {
        const numericDefaultValue = isDefaultValueOrList(
          defaultValue,
          isNumber
        )
          ? defaultValue
          : isPlural
            ? []
            : 0;
        return {
          id,
          plural: Boolean(plural),
          type: argumentType,
          valueSlots,
          descriptionSlots,
          numberType: type as NumberActionArgumentType,
          defaultValue: numericDefaultValue,
          ...numberBounds,
          ...args[id],
        };
      }

      if (argumentType === ActionArgumentTypes.LIST) {
        return {
          id,
          plural: false,
          type: argumentType,
          valueSlots,
          descriptionSlots,
          elementType: args[id]?.elementType || 'any',
          ...defaultValueField,
          ...args[id],
        };
      }

      if (argumentType === ActionArgumentTypes.DICTIONARY) {
        return {
          id,
          plural: false,
          type: argumentType,
          valueSlots,
          descriptionSlots,
          keyType:
            type.toLowerCase() === 'parameters'
              ? 'text'
              : args[id]?.keyType || 'any',
          valueType: args[id]?.valueType || 'any',
          ...defaultValueField,
          ...args[id],
        };
      }

      if (argumentType === ActionArgumentTypes.TEXT) {
        const textDefaultValue = isDefaultValueOrList(
          defaultValue,
          (value): value is string => typeof value === 'string'
        )
          ? defaultValue
          : isPlural
            ? []
            : '';
        return {
          id,
          plural: Boolean(plural),
          type: argumentType,
          valueSlots,
          descriptionSlots,
          defaultValue: textDefaultValue,
          ...args[id],
        };
      }

      if (
        argumentType === ActionArgumentTypes.ITEM ||
        argumentType === ActionArgumentTypes.BLOCK
      ) {
        const itemDefaultValue = isDefaultValueOrList(
          defaultValue,
          isMinecraftId
        )
          ? defaultValue
          : isPlural
            ? []
            : argumentType === ActionArgumentTypes.ITEM
              ? 'minecraft:air'
              : 'minecraft:stone';
        return {
          id,
          plural: Boolean(plural),
          type: argumentType,
          valueSlots,
          descriptionSlots,
          defaultValue: itemDefaultValue,
          ...args[id],
        };
      }

      if (argumentType === ActionArgumentTypes.LOCATION) {
        const locationDefaultValue = isDefaultValueOrList(
          defaultValue,
          isLocationDefaultValue
        )
          ? defaultValue
          : { x: 0, y: 0, z: 0, yaw: 0, pitch: 0 };
        return {
          id,
          plural: isPlural,
          type: argumentType,
          valueSlots,
          descriptionSlots,
          defaultValue: locationDefaultValue,
          ...args[id],
        };
      }

      if (argumentType === ActionArgumentTypes.VECTOR) {
        const vectorDefaultValue = isDefaultValueOrList(
          defaultValue,
          isVectorDefaultValue
        )
          ? defaultValue
          : { x: 0, y: 0, z: 0 };
        return {
          id,
          plural: isPlural,
          type: argumentType,
          valueSlots,
          descriptionSlots,
          defaultValue: vectorDefaultValue,
          ...args[id],
        };
      }

      if (argumentType === ActionArgumentTypes.SOUND) {
        const soundDefaultValue = isDefaultValueOrList(
          defaultValue,
          isSoundDefaultValue
        )
          ? defaultValue
          : { id: 'minecraft:dummy' as const, volume: 0, pitch: 0 };
        return {
          id,
          plural: isPlural,
          type: argumentType,
          valueSlots,
          descriptionSlots,
          defaultValue: soundDefaultValue,
          ...args[id],
        };
      }

      if (argumentType === ActionArgumentTypes.PARTICLE) {
        const particleDefaultValue =
          defaultValue === null
            ? null
            : isDefaultValueOrList(defaultValue, isParticleDefaultValue)
              ? defaultValue
              : isPlural
                ? []
                : null;
        return {
          id,
          plural: isPlural,
          type: argumentType,
          valueSlots,
          descriptionSlots,
          defaultValue: particleDefaultValue,
          ...args[id],
        };
      }

      if (argumentType === ActionArgumentTypes.POTION) {
        const potionDefaultValue = isDefaultValueOrList(
          defaultValue,
          isPotionDefaultValue
        )
          ? defaultValue
          : { type: 'minecraft:speed' as const, duration: 0, amplifier: 0 };
        return {
          id,
          plural: isPlural,
          type: argumentType,
          valueSlots,
          descriptionSlots,
          defaultValue: potionDefaultValue,
          ...args[id],
        };
      }

      if (argumentType === ActionArgumentTypes.CELL) {
        const cellDefaultValue = isCellDefaultValue(defaultValue)
          ? defaultValue
          : { name: '', global: false, storage: null, storagePath: null };
        return {
          id,
          plural: false,
          type: argumentType,
          valueSlots,
          descriptionSlots,
          defaultValue: cellDefaultValue,
          ...args[id],
        };
      }

      if (argumentType === ActionArgumentTypes.VARIABLE) {
        const variableDefaultValue = isDefaultValueOrList(
          defaultValue,
          isVariableDefaultValue
        )
          ? defaultValue
          : isPlural
            ? []
            : { name: 'default', scope: 'LOCAL' };
        return {
          id,
          plural: isPlural,
          type: argumentType,
          valueSlots,
          descriptionSlots,
          defaultValue: variableDefaultValue,
          ...args[id],
        };
      }

      const argument: ActionArgument = {
        id,
        plural: isPlural,
        type: ActionArgumentTypes.ANY,
        valueSlots,
        descriptionSlots,
        defaultValue,
        ...args[id],
      };

      return argument;
    }
  );
};

///////////////////////////////////////////////////////////////////////////////

(async () => {
  await generateEnumsPatch();

  info('caching action icons...');

  const actionsRegistry = await readSourceFile('action/Actions.kt');
  const registeredActions = new Set(
    matches(actionsRegistry, REGISTERED_ACTIONS).map(([, name]) => name)
  );
  const allActionFiles = await getSourceFiles('action');
  const actionFiles = allActionFiles.filter((file) => {
    ACTION_NAME.lastIndex = 0;
    const action = matches(
      uncommentKotlinDeclarations(file.content),
      ACTION_NAME
    )[0];
    return Boolean(
      action &&
        registeredActions.has(action[1]) &&
        !isExcludedDataId('actions', action[2])
    );
  });
  const actionNames = new Set(
    actionFiles.flatMap((file) => {
      const action = matches(
        uncommentKotlinDeclarations(file.content),
        ACTION_NAME
      )[0];
      return action ? [action[1]] : [];
    })
  );
  const actionMenuFiles = await getSourceFiles('editor/menu/action');
  const valueTypeIcons = await extractValueTypeIcons();
  const textureValues = await loadCachedTextureValues();

  const iconsByFile = await mapWithProgress(
    'Extracting action menus',
    actionMenuFiles,
    (file) => file.path,
    async (file) => {
      const actionsMenuFile = file.content.replace(/^\s*\/\/\s?/gm, '');
      const importedSources = await getImportedKotlinSources(file.content);
      return extractActionMenuIcons(
        actionsMenuFile,
        actionNames,
        valueTypeIcons,
        textureValues,
        importedSources
      );
    }
  );
  const icons: Dictionary<ActionMenuIcon> = Object.assign({}, ...iconsByFile);
  const menuActionReferences = actionMenuFiles.reduce<Record<string, boolean>>(
    (references, file) => {
      for (const [name, isActive] of Object.entries(
        menuReferences(file.content, MENU_ACTION_REFERENCES)
      ))
        references[name] = references[name] || isActive;
      return references;
    },
    {}
  );
  const menuActionPositions = Object.assign(
    {},
    ...actionMenuFiles.map((file) =>
      extractSubcategoryMenuPositions(file.content, MENU_ACTION_REFERENCES)
    )
  );

  exitIfAnyErrors();

  success('cached action icons');

  info('extracting actions...');

  /////////////////////////////////////////////////////////////////////////////

  const enumFiles = await getSourceFiles('');
  const cachedEnums = enumFiles.map((file) =>
    getEnums(removeComments(file.content))
  );
  const actionHelperDefaults = getArgumentHelperDefaults(
    await readSourceFile('core/action/Action.kt')
  );
  const patchedEnums: Enums = JSON.parse(
    await fs.readFile(ENUMS_PATCHES_FILE, 'utf-8')
  );
  const enums = Object.assign({}, ...cachedEnums, patchedEnums);
  const actionPatches: Dictionary = JSON.parse(
    await fs.readFile(ACTIONS_PATCHES_FILE, 'utf-8')
  );
  const actions = await mapWithProgress(
    'Extracting actions',
    actionFiles,
    (file) => file.path,
    async (file) => {
      const contents = removeComments(
        uncommentKotlinDeclarations(file.content)
      );

      const ni = matches(contents, ACTION_NAME)[0];
      if (!ni)
        return error(`Could not find action in file: ${path.basename(file.path)}`);
      const [, name, id] = ni;
      const ct = naiveActionTypeFromId(id);
      if (!ct) return error(`Could not find category for action: ${id}`);
      const [category, type] = ct;
      const object = ACTION_OBJECTS[category];
      if (!object)
        return error(
          `Could not find object for action category: ${category}`
        );
      let icon = icons[name];

      if (!icon) {
        warn(`Could not find menu icon for action: ${id}; using its category icon`);
        icon = {
          id,
          type: 'action',
          category,
          material: 'AIR',
          amount: 1,
          hasGlint: false,
          subcategory: null,
          worksWith: [],
          additionalInfo: [],
        };
        icons[name] = icon;
      } else {
        icon.id = id;
      }

      const actionType = actionPatches[id]?.type || type;
      const menuReference = menuActionReferences[name];

      return {
        id,
        name: getActionName(id, category),
        object,
        category,
        subcategory: icon?.subcategory || null,
        ...(menuActionPositions[name] || {}),
        type: actionType,
        args: getArguments(
          id,
          enums,
          {},
          contents,
          actionHelperDefaults
        ),
        ...(!TOP_LEVEL_ACTION_CATEGORIES.has(category) &&
        menuReference === undefined
          ? { deprecated: true }
          : {}),
        ...(!TOP_LEVEL_ACTION_CATEGORIES.has(category) &&
        menuReference === false
          ? { unused: true }
          : {}),
        ...(icon?.worksWith?.length ? { worksWith: icon.worksWith } : {}),
        ...(icon?.additionalInfo?.length
          ? { additionalInfo: icon.additionalInfo }
          : {}),
      };
    }
  );

  exitIfAnyErrors();

  await logDataSummary('Actions', ACTIONS_FILE, actions);

  await fs.writeFile(ACTION_ICONS_CACHE_FILE, toPrettyPrintJson(icons));
  await fs.writeFile(ACTIONS_FILE, toPrettyPrintJson(actions));

  success('extracted actions');
})();