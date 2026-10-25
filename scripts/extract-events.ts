import { promises as fs } from 'fs';

import {
  info,
  success,
  toPrettyPrintJson,
  EVENTS_FILE,
  removeComments,
  CachedIcon,
  error,
  matches,
  EVENT_ICONS_CACHE_FILE,
  Dictionary,
  warn,
  extractIconTexture,
  loadCachedTextureValues,
  extractValueTypeIcons,
  getSourceFiles,
  mapWithProgress,
  readSourceFile,
  getImportedKotlinSources,
  uncommentKotlinDeclarations,
} from './common';

///////////////////////////////////////////////////////////////////////////////

const MENU_TRIGGERS =
  /(?<!\.)trigger\(\s*Triggers\.(.*?),(.*?)(?=trigger|open|subcategory)/gms;

const MENU_TRIGGER_MATERIAL =
  /(?:ItemStack(?:\.of)?\(\s*Material\.([A-Z0-9_]+)(?:\s*,\s*(\d+)\s*)?\s*\)|Material\.([A-Z0-9_]+)|ValueTypes\.([A-Z0-9_]+)\.icon(?:\.clone\(\))?)/;
const WORK_WITH_KEYS = /workWithKeys\s*=\s*(.*?)\)/;
const ADDITIONAL_INFO_KEYS = /additionalInfoKeys\s*=\s*(.*?)\)/;
const MENU_TRIGGER_CATEGORY = /creative_plus.category.(.*)_event/;
const STRING = /"(.*?)"/gms;

type EventMenuIcon = CachedIcon & {
  category: string | null;
  cancellable: boolean;
  worksWith: string[];
  additionalInfo: string[];
};

const getStrings = (content: string, regex: RegExp) =>
  matches(content.match(regex)?.[1] || '', STRING).map(([, key]) => key);

const extractTriggerMenuIcons = (
  triggerMenuFile: string,
  valueTypeIcons: Record<string, string>,
  textureValues: Record<string, string>,
  importedSources: string[]
) => {
  const category = triggerMenuFile.match(MENU_TRIGGER_CATEGORY)?.[1] || null;

  return matches(triggerMenuFile, MENU_TRIGGERS).reduce<
    Dictionary<EventMenuIcon>
  >((acc, [, name, iconPart]) => {
    const match =
      iconPart.match(MENU_TRIGGER_MATERIAL) ||
      importedSources
        .map((source) => source.match(MENU_TRIGGER_MATERIAL))
        .find(Boolean);

    if (!match) {
      error(`Could not extract icon metadata for trigger: ${name}`);
      return acc;
    }

    const material =
      match[1] ||
      match[3] ||
      (match[4] ? valueTypeIcons[match[4]] : undefined);

    const amount = Number(match[2]) || 1;

    if (!material) {
      error(`Could not resolve icon material for trigger: ${name}`);
      return acc;
    }

    const hasGlint =
      /addUnsafeEnchantment|glint\s*\(\s*\)|setData\s*\(\s*DataComponentTypes\.ENCHANTMENT_GLINT_OVERRIDE\s*\)|setEnchantmentGlintOverride\s*\(\s*true\s*\)/.test(
        iconPart
      );

    const cancellable = iconPart.includes('true');
    const worksWith = getStrings(iconPart, WORK_WITH_KEYS);
    const additionalInfo = getStrings(iconPart, ADDITIONAL_INFO_KEYS);
    const texture = extractIconTexture(iconPart, textureValues);
    const id = name.toLowerCase();

    return {
      ...acc,
      [name]: {
        id,
        type: 'event',
        material,
        amount,
        hasGlint,
        category,
        cancellable,
        worksWith,
        additionalInfo,
        ...(texture ? { texture } : {}),
      },
    };
  }, {});
};

///////////////////////////////////////////////////////////////////////////////

const REGISTERED_EVENT_REGEX = /val\s*(.*?)\s*=\s*register.*\("(.*)"\)/g;

(async () => {
  info('caching event icons...');

  const triggerMenuFiles = await getSourceFiles('editor/menu/trigger');

  const valueTypeIcons = await extractValueTypeIcons();
  const textureValues = await loadCachedTextureValues();

  const iconsByFile = await mapWithProgress(
    'Extracting trigger menus',
    triggerMenuFiles,
    (file) => file.path,
    async (file) => {
      const triggersMenuFile = file.content.replace(/^\s*\/\/\s?/gm, '');
      const importedSources = await getImportedKotlinSources(file.content);
      return extractTriggerMenuIcons(
        triggersMenuFile,
        valueTypeIcons,
        textureValues,
        importedSources
      );
    }
  );
  const icons: Dictionary<EventMenuIcon> = Object.assign({}, ...iconsByFile);

  /////////////////////////////////////////////////////////////////////////////

  info('extracting events...');

  const triggers = removeComments(
    uncommentKotlinDeclarations(
      await readSourceFile('core/trigger/Triggers.kt')
    )
  );

  const events = Array.from(triggers.matchAll(REGISTERED_EVENT_REGEX))
    .map(([, name, id]) => [name, id])
    .filter(([, id]) => !id.includes('dummy'))
    .map(([name, id]) => {
      let icon = icons[name];

      if (!icon) {
        warn(`Not found menu icon for event: ${id}; using an empty icon`);
        icons[name] = {
          id,
          type: 'event',
          material: 'AIR',
          amount: 1,
          hasGlint: false,
          category: null,
          cancellable: false,
          worksWith: [],
          additionalInfo: [],
        };
        return { id };
      }

      icon.id = id;
      return {
        id,
        category: icon.category,
        cancellable: icon.cancellable,
        ...(icon.worksWith?.length ? { worksWith: icon.worksWith } : {}),
        ...(icon.additionalInfo?.length
          ? { additionalInfo: icon.additionalInfo }
          : {}),
      };
    });

  await fs.writeFile(EVENT_ICONS_CACHE_FILE, toPrettyPrintJson(icons));

  success('cached event icons');

  await fs.writeFile(EVENTS_FILE, toPrettyPrintJson(events));

  success('extracted events');
})();