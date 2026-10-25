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
  uncommentKotlinDeclarations,
  warn,
} from './common';

import { naiveActionTypeFromId } from '../src/types/Action';
import ActionArgument, {
  ActionArgumentTypes,
  argumentTypeFromInternal,
  NumberActionArgumentSize,
} from '../src/types/ActionArgument';

///////////////////////////////////////////////////////////////////////////////

const ACTION_NAME = /object\s*(.*?)\s*:.*?"(.*?)"/gms;
const ACTIONS_PATCHES_FILE = path.resolve(PATCHES_DIR, 'actions.json');
const ENUMS_PATCHES_FILE = path.resolve(PATCHES_DIR, 'enums.json');

const ARGUMENT =
  /val\s+.*?\s+by\s+([a-z]+(?:[A-Z](?!ist)[a-z]*)?)(List)?<?([^<>(){}]*)>?\("(.*?)"(?:(?:,\s*(false))|(?:.*))\)\s*{((?:.|\n)*?)(?=^[ \t]{4}\})/gm;

const ARGUMENT_VALUE_SLOTS = /parsing\s*=\s*(.*)/;
const ARGUMENT_DESCRIPTION_SLOTS = /descriptions?\s*=\s*(.*)/;
const SLOTS = /(?:\(?([\d]+)\.\.([\d]+)\)?)|([\d]+)/g;

const ENUM_REGEX =
  /enum\s*?class\s*(.*?)(?:\(.*?\))?\s*\{(.*?)\}(?!\s*\)|,)/gms;
const ENUM_MEMBER_REGEX =
  /(?:(?:^|,)\s*)(?:\b(?!ItemStack|BlockDirection)([A-Z_][\w]*)(?!\))\b(?:\(.*?\))?)/gm;

type Enums = Dictionary<string[]>;

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
      error(`Could not extract icon metadata for action: ${name}`);
      return acc;
    }

    const material =
      match[1] ||
      match[3] ||
      (match[4] ? valueTypeIcons[match[4]] : undefined);

    const amount = Number(match[2]) || 1;

    if (!material) {
      error(`Could not resolve icon material for action: ${name}`);
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

const getArguments = (
  action: string,
  enums: Enums,
  args: Dictionary,
  content: string
) => {
  const _args = matches(content, ARGUMENT);
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

  const actionFiles = (await getSourceFiles('action')).filter((file) => {
    ACTION_NAME.lastIndex = 0;
    const action = matches(
      uncommentKotlinDeclarations(file.content),
      ACTION_NAME
    )[0];
    return Boolean(action && !action[2].includes('dummy'));
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
      let icon = icons[name];

      if (!icon) {
        warn(`Could not find menu icon for action: ${id}; using an empty icon`);
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

      return {
        id,
        category,
        subcategory: icon?.subcategory || null,
        type: actionType,
        args: getArguments(id, enums, {}, contents),
        ...(icon?.worksWith?.length ? { worksWith: icon.worksWith } : {}),
        ...(icon?.additionalInfo?.length
          ? { additionalInfo: icon.additionalInfo }
          : {}),
      };
    }
  );

  exitIfAnyErrors();

  await fs.writeFile(ACTION_ICONS_CACHE_FILE, toPrettyPrintJson(icons));

  await fs.writeFile(ACTIONS_FILE, toPrettyPrintJson(actions));

  success('extracted actions');
})();