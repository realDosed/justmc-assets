import { promises as fs } from 'fs';
import chalk from 'chalk';
import path from 'path';

import {
  info,
  success,
  toPrettyPrintJson,
  GAME_VALUES_FILE,
  removeComments,
  matches,
  error,
  exitIfAnyErrors,
  Dictionary,
  CachedIcon,
  GAME_VALUE_ICONS_CACHE_FILE,
  extractValueTypeIcons,
  extractIconTexture,
  loadCachedTextureValues,
  readSourceFile,
  getImportedKotlinSources,
  uncommentKotlinDeclarations,
  warn,
} from './common';

import { ValueTypes, valueTypeFromInternal } from '../src/types/ValueType';
import GameValue from '../src/types/GameValue';

///////////////////////////////////////////////////////////////////////////////

const MENU_GAME_VALUES =
  /(?<!\.)addGameValue\(\s*GameValues\.(.*?),(.*?)(?=add(?:G|Q))/gms;

const MENU_GAME_VALUE_MATERIAL =
  /(?:ItemStack(?:\.of)?\(\s*Material\.([A-Z0-9_]+)(?:\s*,\s*(\d+)\s*)?\s*\)|Material\.([A-Z0-9_]+)|ValueTypes\.([A-Z0-9_]+)\.icon(?:\.clone\(\))?)/;
const STRING = /"(.*?)"/gms;
const WORK_WITH_KEYS = /workWithKeys\s*=\s*(.*?)\)/;

type GameValueMenuIcon = CachedIcon & {
  worksWith: string[];
};

const extractGameValueMenuIcons = (
  gameValueMenuFile: string,
  valueTypeIcons: Record<string, string>,
  textureValues: Record<string, string>,
  importedSources: string[]
) => {
  const icons = matches(gameValueMenuFile, MENU_GAME_VALUES).reduce<
    Dictionary<GameValueMenuIcon>
  >((acc, [, name, iconPart]) => {
    const match =
      iconPart.match(MENU_GAME_VALUE_MATERIAL) ||
      importedSources
        .map((source) => source.match(MENU_GAME_VALUE_MATERIAL))
        .find(Boolean);

    if (!match) {
      error(`Could not extract icon metadata for game value: ${name}`);
      return acc;
    }

    const material =
      match[1] ||
      match[3] ||
      (match[4] ? valueTypeIcons[match[4]] : undefined);

    const amount = Number(match[2]) || 1;

    if (!material) {
      error(`Could not resolve icon material for game value: ${name}`);
      return acc;
    }

    const hasGlint =
      /addUnsafeEnchantment|glint\s*\(\s*\)|setData\s*\(\s*DataComponentTypes\.ENCHANTMENT_GLINT_OVERRIDE\s*\)|setEnchantmentGlintOverride\s*\(\s*true\s*\)/.test(
        iconPart
      );

    const worksWith = matches(
      iconPart.match(WORK_WITH_KEYS)?.[1] || '',
      STRING
    ).map(([, key]) => key);
    const texture = extractIconTexture(iconPart, textureValues);
    return {
      ...acc,
      [name]: {
        id: name.toLowerCase(),
        type: 'game_value',
        material,
        amount,
        hasGlint,
        worksWith,
        ...(texture ? { texture } : {}),
      },
    };
  }, {});

  return icons;
};

///////////////////////////////////////////////////////////////////////////////

const REGISTERED_GAME_VALUES =
  /val\s*(.*?)\s*=\s*register\("(.*)",\s*ValueTypes.([\w]*)/g;
const NEXT_GAME_VALUE = /^[ \t]{4}val\s+[A-Z][A-Z0-9_]*\s*=\s*register\(/gm;
const VALUE_CONTAINER_TYPE =
  /DefinedValueContainer\s*\(\s*ValueTypes\.([A-Z_]+)/g;
const MAP_CONTAINER_TYPES =
  /result\s*\[\s*DefinedValueContainer\s*\(\s*ValueTypes\.([A-Z_]+)[\s\S]*?\]\s*=\s*DefinedValueContainer\s*\(\s*ValueTypes\.([A-Z_]+)/g;
const MAP_KEY_TYPE =
  /result\s*\[\s*DefinedValueContainer\s*\(\s*ValueTypes\.([A-Z_]+)/g;

const inferGameValueCollectionTypes = (type: string, body: string) => {
  const valueTypes = matches(body, VALUE_CONTAINER_TYPE)
    .map(([, type]) => valueTypeFromInternal(type))
    .filter((type): type is NonNullable<typeof type> => Boolean(type));

  if (type === ValueTypes.LIST) {
    const nonNumericTypes = valueTypes.filter((type) => type !== 'number');
    const itemTypes = [...new Set(nonNumericTypes.length ? nonNumericTypes : valueTypes)];
    return {
      elementType: itemTypes.length === 1 ? itemTypes[0] : 'any',
    };
  }

  if (type === ValueTypes.DICTIONARY) {
    const entries = matches(body, MAP_CONTAINER_TYPES).map(([, key, value]) => [
      valueTypeFromInternal(key),
      valueTypeFromInternal(value),
    ]);
    const keyTypes = [
      ...new Set(
        matches(body, MAP_KEY_TYPE)
          .map(([, key]) => valueTypeFromInternal(key))
          .filter(Boolean)
      ),
    ];
    const entryValueTypes = [
      ...new Set(entries.map(([, value]) => value).filter(Boolean)),
    ];

    return {
      keyType: keyTypes.length === 1 ? keyTypes[0] : 'any',
      valueType: entryValueTypes.length === 1 ? entryValueTypes[0] : 'any',
    };
  }

  return {};
};

(async () => {
  info('caching game value icons...');

  const gameValuesMenuFile = (
    await readSourceFile('editor/menu/gamevalue/GameValuesMenu.kt')
  ).replace(/^\s*\/\/\s?/gm, '');
  const importedSources = await getImportedKotlinSources(gameValuesMenuFile);

  const valueTypeIcons = await extractValueTypeIcons();
  const textureValues = await loadCachedTextureValues();
  const menuIcons = extractGameValueMenuIcons(
    gameValuesMenuFile,
    valueTypeIcons,
    textureValues,
    importedSources
  );

  success('cached game value icons');

  info('extracting game values...');

  const gameValuesFile = removeComments(
    uncommentKotlinDeclarations(
      await readSourceFile('core/value/GameValue.kt')
    )
  );

  const declarations = matches(gameValuesFile, REGISTERED_GAME_VALUES);
  const registeredGameValues = declarations.map((declaration, index) => {
    const [, name, id, _type] = declaration;
    const type = valueTypeFromInternal(_type);
    if (!type) error(`Unknown internal type: ${_type}`);
    const bodyStart = declaration.index! + declaration[0].length;
    const nextDeclaration = NEXT_GAME_VALUE.exec(
      gameValuesFile.slice(bodyStart)
    );
    NEXT_GAME_VALUE.lastIndex = 0;
    const bodyEnd = nextDeclaration?.index ?? gameValuesFile.length - bodyStart;
    const body = gameValuesFile.slice(bodyStart, bodyStart + bodyEnd);

    return {
      id,
      name,
      type: type!,
      ...inferGameValueCollectionTypes(type!, body),
    };
  });

  exitIfAnyErrors();

  /////////////////////////////////////////////////////////////////////////////

  const gameValues = registeredGameValues.map((_gameValue) => {
    let icon = menuIcons[_gameValue.name];

    if (!icon) {
      warn(
        `Could not find menu icon for game value: ${_gameValue.id}; using an empty icon`
      );
      icon = {
        id: _gameValue.id,
        type: 'game_value',
        material: 'AIR',
        amount: 1,
        hasGlint: false,
        worksWith: [],
      };
      menuIcons[_gameValue.name] = icon;
    }

    let gameValue = {
      id: _gameValue.id,
      type: _gameValue.type,
      ...('elementType' in _gameValue
        ? { elementType: _gameValue.elementType }
        : {}),
      ...('keyType' in _gameValue
        ? { keyType: _gameValue.keyType, valueType: _gameValue.valueType }
        : {}),
      ...(icon?.worksWith?.length
        ? { worksWith: icon.worksWith }
        : {}),
    } as GameValue;

    if (gameValue.type === ValueTypes.DICTIONARY)
      if (!gameValue.keyType || !gameValue.valueType)
        return error(
          `Coudln't find required ${chalk.red(
            'key and value types'
          )} for dictionary game value: ${gameValue.id}`
        );

    if (gameValue.type === ValueTypes.LIST)
      if (!gameValue.elementType)
        return error(
          `Coudln't find required ${chalk.red(
            'element type'
          )} for list game value: ${gameValue.id}`
        );

    return gameValue;
  });

  await fs.writeFile(GAME_VALUE_ICONS_CACHE_FILE, toPrettyPrintJson(menuIcons));
  await fs.writeFile(GAME_VALUES_FILE, toPrettyPrintJson(gameValues));

  exitIfAnyErrors();

  success('extracted game values');
})();