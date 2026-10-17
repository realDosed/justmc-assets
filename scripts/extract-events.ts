import { promises as fs } from 'fs';
import path from 'path';

import {
  info,
  success,
  toPrettyPrintJson,
  CACHE_TRIGGERS_FILE,
  EVENTS_FILE,
  removeComments,
  CachedIcon,
  error,
  matches,
  EVENT_ICONS_CACHE_FILE,
  TRIGGER_MENUS_CACHE_DIR,
  Dictionary,
  PATCHES_DIR,
  warn,
  extractIconTexture,
  loadCachedTextureValues,
} from './common';

///////////////////////////////////////////////////////////////////////////////

const EVENTS_PATCHES_FILE = path.resolve(PATCHES_DIR, 'events.json');

const MENU_TRIGGERS =
  /(?<!\.)trigger\(\s*Triggers\.(.*?),(.*?)(?=trigger|open|subcategory)/gms;

const MENU_TRIGGER_MATERIAL =
  /(?:ItemStack(?:\.of)?\(\s*Material\.([A-Z0-9_]+)(?:\s*,\s*(\d+)\s*)?\s*\)|Material\.([A-Z0-9_]+)|ValueTypes\.([A-Z0-9_]+)\.icon(?:\.clone\(\))?)/;
const WORK_WITH_KEYS = /workWithKeys\s*=\s*(.*?)\)/;
const ADDITIONAL_INFO_KEYS = /additionalInfoKeys\s*=\s*(.*?)\)/;
const MENU_TRIGGER_CATEGORY = /creative_plus.category.(.*)_event/;
const STRING = /"(.*?)"/gms;

type EventMenuIcon = CachedIcon & {
  category: string;
  cancellable: boolean;
  worksWith: string[];
  additionalInfo: string[];
};

const getStrings = (content: string, regex: RegExp) =>
  matches(content.match(regex)?.[1] || '', STRING).map(([, key]) => key);

const extractTriggerMenuIcons = (
  triggerMenuFile: string,
  patches: Dictionary,
  textureValues: Record<string, string>
) => {
  const category = triggerMenuFile.match(MENU_TRIGGER_CATEGORY)?.[1] || null;

  return matches(triggerMenuFile, MENU_TRIGGERS).reduce<
    Dictionary<EventMenuIcon>
  >((acc, [, name, iconPart]) => {
    const match = iconPart.match(MENU_TRIGGER_MATERIAL);

    if (!match) {
      error(`Could not extract icon metadata for trigger: ${name}`);
      return acc;
    }

    const material =
      match[1] ||
      match[3] ||
      (match[4]
        ? patches[match[4].toLowerCase()]?.icon?.material
        : undefined);

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
    const patch = patches[id];

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
        ...(patch ? patch.icon : {}),
      },
    };
  }, {});
};

///////////////////////////////////////////////////////////////////////////////

const REGISTERED_EVENT_REGEX = /val\s*(.*?)\s*=\s*register.*\("(.*)"\)/g;

(async () => {
  info('caching event icons...');

  const triggerMenuFiles = await fs.readdir(TRIGGER_MENUS_CACHE_DIR);

  const patches: Dictionary = JSON.parse(
    await fs.readFile(EVENTS_PATCHES_FILE, 'utf-8')
  );
  const textureValues = await loadCachedTextureValues();

  let icons: Dictionary<EventMenuIcon> = {};
  await Promise.all(
    triggerMenuFiles.map(async (file) => {
      const triggersMenuFile = (await fs.readFile(
        path.resolve(TRIGGER_MENUS_CACHE_DIR, file),
        'utf-8'
      )).replace(/^\s*\/\/\s?/gm, '');

      icons = {
        ...icons,
        ...extractTriggerMenuIcons(triggersMenuFile, patches, textureValues),
      };
    })
  );

  /////////////////////////////////////////////////////////////////////////////

  info('extracting events...');

  const triggers = removeComments(
    await fs.readFile(CACHE_TRIGGERS_FILE, 'utf-8')
  );

  const events = Array.from(triggers.matchAll(REGISTERED_EVENT_REGEX))
    .map(([, name, id]) => [name, id])
    .filter(([, id]) => !id.includes('dummy'))
    .map(([name, id]) => {
      let icon = icons[name];

      if (!icon) {
        const patch = patches[id];
        if (patch && patch.icon) {
          icon = patch.icon;
        } else {
          warn('Not found icon for event', id);
          return { id };
        }
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
