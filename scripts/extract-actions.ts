import { promises as fs } from 'fs';
import chalk from 'chalk';
import path from 'path';

import {
  ACTIONS_DIR,
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
  ACTION_MENUS_CACHE_DIR,
  ACTION_ICONS_CACHE_FILE,
  extractValueTypeIcons,
  extractIconTexture,
  loadCachedTextureValues,
  ENUMS_CACHE_DIR,
} from './common';

import { naiveActionTypeFromId } from '../src/types/Action';
import ActionArgument, {
  ActionArgumentTypes,
  argumentTypeFromInternal,
  NumberActionArgumentSize,
} from '../src/types/ActionArgument';

///////////////////////////////////////////////////////////////////////////////

const ACTIONS_PATCHES_FILE = path.resolve(PATCHES_DIR, 'actions.json');
const ENUMS_PATCHES_FILE = path.resolve(PATCHES_DIR, 'enums.json');

const ACTION_NAME = /object\s*(.*?)\s*:.*?"(.*?)"/gms;

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
  subcategory: string | null;
  worksWith: string[];
  additionalInfo: string[];
};

const getStrings = (content: string, regex: RegExp) =>
  matches(content.match(regex)?.[1] || '', STRING).map(([, key]) => key);

const extractActionMenuIcons = (
  actionMenuFile: string,
  valueTypeIcons: Record<string, string>,
  textureValues: Record<string, string>
) => {
  const subcategory =
    actionMenuFile.match(MENU_ACTION_SUBCATEGORY)?.[1] || null;

  return matches(actionMenuFile, MENU_ACTIONS).reduce<
    Dictionary<ActionMenuIcon>
  >((acc, [, name, iconPart]) => {
    const match = iconPart.match(MENU_ACTION_MATERIAL);

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
  const _enums: Enums = { ...getEnums(content), ...enums };

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
        if (!args[id] || !('elementType' in args[id]))
          return error(
            `Coudln't find required ${chalk.yellow(
              'element type'
            )} of array argument ${chalk.cyan(id)} in action ${action}`
          );

        return {
          id,
          plural: false,
          type: argumentType,
          valueSlots,
          descriptionSlots,
          elementType: args[id].elementType,
          ...args[id],
        };
      }

      if (argumentType === ActionArgumentTypes.DICTIONARY) {
        if (!args[id] || !('keyType' in args[id]) || !('valueType' in args[id]))
          return error(
            `Coudln't find required ${chalk.yellow(
              'key and value types'
            )} of dictionary argument ${chalk.cyan(id)} in action ${action}`
          );

        return {
          id,
          plural: false,
          type: argumentType,
          valueSlots,
          descriptionSlots,
          keyType: args[id].keyType,
          valueType: args[id].valueType,
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

  const actionMenuFiles = await fs.readdir(ACTION_MENUS_CACHE_DIR);
  const valueTypeIcons = await extractValueTypeIcons();
  const textureValues = await loadCachedTextureValues();

  let icons: Dictionary<ActionMenuIcon> = {};
  await Promise.all(
    actionMenuFiles.map(async (file) => {
      const actionsMenuFile = (await fs.readFile(
        path.resolve(ACTION_MENUS_CACHE_DIR, file),
        'utf-8'
      )).replace(/^\s*\/\/\s?/gm, '');

      icons = {
        ...icons,
        ...extractActionMenuIcons(
          actionsMenuFile,
          valueTypeIcons,
          textureValues
        ),
      };
    })
  );

  exitIfAnyErrors();

  success('cached action icons');

  info('extracting actions...');

  const actionFiles = await fs.readdir(ACTIONS_DIR);

  /////////////////////////////////////////////////////////////////////////////

  const patches: Dictionary = JSON.parse(
    await fs.readFile(ACTIONS_PATCHES_FILE, 'utf-8')
  );

  const enumFiles = await fs.readdir(ENUMS_CACHE_DIR);
  const cachedEnums = await Promise.all(
    enumFiles.map(async (file) =>
      getEnums(
        removeComments(
          await fs.readFile(path.resolve(ENUMS_CACHE_DIR, file), 'utf-8')
        )
      )
    )
  );

  const patchedEnums: Enums = JSON.parse(
    await fs.readFile(ENUMS_PATCHES_FILE, 'utf-8')
  );
  const enums = Object.assign({}, ...cachedEnums, patchedEnums);

  const actions = await Promise.all(
    actionFiles.map(async (file) => {
      const contents = removeComments(
        await fs.readFile(path.resolve(ACTIONS_DIR, file), 'utf-8')
      );

      const ni = matches(contents, ACTION_NAME)[0];
      if (!ni) return error(`Could not find action in file: ${file}`);
      const [, name, id] = ni;
      const { icon: patchIcon, args, ...patch } = patches[id] || {};

      if (!icons[name]) {
        if (!patchIcon)
          return error(
            `Could not find ${chalk.cyan('icon')} for action: ${id}`
          );

        icons[name] = patchIcon;
        icons[name].type = 'action';
      } else if (patchIcon) {
        icons[name] = { ...icons[name], ...patchIcon };
      }

      icons[name].id = id;
      const icon = icons[name];

      const ct = naiveActionTypeFromId(id);
      if (!ct) return error(`Could not find category for action: ${id}`);
      const [category, type] = ct;

      return {
        id,
        category,
        subcategory: icon?.subcategory || null,
        type,
        args: getArguments(id, enums, args || {}, contents),
        ...(icon?.worksWith?.length ? { worksWith: icon.worksWith } : {}),
        ...(icon?.additionalInfo?.length
          ? { additionalInfo: icon.additionalInfo }
          : {}),
        ...patch,
      };
    })
  );

  exitIfAnyErrors();

  await fs.writeFile(ACTION_ICONS_CACHE_FILE, toPrettyPrintJson(icons));

  await fs.writeFile(ACTIONS_FILE, toPrettyPrintJson(actions));

  success('extracted actions');
})();
