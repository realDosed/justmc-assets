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
  NumberActionArgumentSize,
} from '../src/types/ActionArgument';
import { ActionCategories } from '../src/ActionsData';

///////////////////////////////////////////////////////////////////////////////

const ACTION_NAME = /object\s*(.*?)\s*:.*?"(.*?)"/gms;
const ACTIONS_PATCHES_FILE = path.resolve(PATCHES_DIR, 'actions.json');
const ENUMS_PATCHES_FILE = path.resolve(PATCHES_DIR, 'enums.json');

const ARGUMENT_DECLARATION =
  /^[ \t]*val\s+\w+\s+by\s+([a-z]+(?:[A-Z](?!ist)[a-z]*)?)(List)?\s*(?:<([^<>]*)>)?\s*\(/gm;

const ARGUMENT_VALUE_SLOTS = /parsing\s*=\s*(.*)/;
const ARGUMENT_DESCRIPTION_SLOTS = /descriptions?\s*=\s*(.*)/;
const SLOTS = /(?:\(?([\d]+)\.\.([\d]+)\)?)|([\d]+)/g;

const ENUM_REGEX =
  /enum\s*?class\s*(.*?)(?:\(.*?\))?\s*\{(.*?)\}(?!\s*\)|,)/gms;
const ENUM_MEMBER_REGEX =
  /(?:(?:^|,)\s*)(?:\b(?!ItemStack|BlockDirection)([A-Z_][\w]*)(?!\))\b(?:\(.*?\))?)/gm;

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

const getEnums = (content: string) => {
  const enumMatches = matches(content, ENUM_REGEX);

  const enums = enumMatches.reduce<Enums>((acc, [, name, body]) => {
    acc[name] = matches(body.split(';')[0], ENUM_MEMBER_REGEX).map(
      ([, match]) => match
    );

    return acc;
  }, {});

  return enums;
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
    const bool = callContent.match(/,\s*(false)\b/)?.[1];
    return [[declaration, type, plural, enumName, id, bool, body] as const];
  });

const getArguments = (
  action: string,
  enums: Enums,
  args: Dictionary,
  content: string
) => {
  const _args = getArgumentDeclarations(content);
  const _enums: Enums = { ...enums, ...getEnums(content) };

  return _args.map<ActionArgument>(
    ([argumentDeclaration, type, plural, enumName, id, bool, body]) => {
      const argumentType = argumentTypeFromInternal(type);
      if (!argumentType)
        return error(
          `Unknown action argument type ${chalk.cyan(type)} in action ${action}`
        );

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
        const values =
          _enums[type === 'boolean' ? 'Boolean' : enumValuesName || ''];
        if (!values)
          return error(
            `Could not get values of enum argument ${chalk.cyan(
              enumName
            )} in action ${action}`
          );

        return {
          id,
          plural: false,
          type: argumentType,
          valueSlots,
          values,
          ...(bool ? { defaultValue: bool } : {}),
          ...args[id],
        };
      }

      const _descriptionSlots = body.match(ARGUMENT_DESCRIPTION_SLOTS)?.[1];
      if (!_descriptionSlots)
        return error(
          `Could not get description slots of argument ${chalk.cyan(
            id
          )} in action ${action}`
        );
      const descriptionSlots = getSlots(_descriptionSlots);

      if (argumentType === ActionArgumentTypes.NUMBER) {
        return {
          id,
          plural: Boolean(plural),
          type: argumentType,
          valueSlots,
          descriptionSlots,
          size: type as NumberActionArgumentSize,
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
          ...args[id],
        };
      }

      const argument: ActionArgument = {
        id,
        plural: Boolean(plural),
        type: argumentType,
        valueSlots,
        descriptionSlots,
        ...args[id],
      };

      return argument;
    }
  );
};

///////////////////////////////////////////////////////////////////////////////

(async () => {
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

  exitIfAnyErrors();

  success('cached action icons');

  info('extracting actions...');

  /////////////////////////////////////////////////////////////////////////////

  const enumFiles = await getSourceFiles('');
  const cachedEnums = enumFiles.map((file) =>
    getEnums(removeComments(file.content))
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
        type: actionType,
        args: getArguments(id, enums, {}, contents),
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