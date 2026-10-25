import { promises as fs } from 'fs';
import fetch from 'node-fetch';
import path from 'path';

import { info, success, warn } from './common';
import Action from '../src/types/Action';
import Event from '../src/types/Event';
import GameValue from '../src/types/GameValue';

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.resolve(ROOT, 'data');
const DOCS_DIR = path.resolve(ROOT, 'documentation');
const LOCALIZATION_URL =
  'https://gitlab.com/justmc/justmc-localization/-/raw/master/creative_plus';
const LOCALES = ['en_US', 'ru_RU', 'ua_UA'];

type Properties = Record<string, string>;

const unescapeProperty = (value: string) =>
  value.replace(/\\(u[0-9a-fA-F]{4}|.)/g, (match, escaped: string) => {
    if (escaped.startsWith('u')) return String.fromCharCode(parseInt(escaped.slice(1), 16));
    return (
      {
        t: '\t',
        n: '\n',
        r: '\r',
        f: '\f',
      }[escaped] || escaped
    );
  });

const parseProperties = (content: string): Properties => {
  const properties: Properties = {};
  const lines = content.split(/\r?\n/);
  let continuedLine = '';

  for (const rawLine of lines) {
    let line = continuedLine ? continuedLine + rawLine.trimStart() : rawLine;
    continuedLine = '';

    let slashCount = 0;
    for (let index = line.length - 1; index >= 0 && line[index] === '\\'; index--)
      slashCount++;
    if (slashCount % 2 === 1) {
      continuedLine = line.slice(0, -1);
      continue;
    }

    line = line.trimStart();
    if (!line || line.startsWith('#') || line.startsWith('!')) continue;

    let separator = -1;
    let escaped = false;
    for (let index = 0; index < line.length; index++) {
      const char = line[index];
      if (!escaped && (char === '=' || char === ':' || /\s/.test(char))) {
        separator = index;
        break;
      }
      if (char === '\\' && !escaped) escaped = true;
      else escaped = false;
    }

    if (separator < 0) {
      properties[unescapeProperty(line)] = '';
      continue;
    }

    let valueStart = separator;
    while (valueStart < line.length && /\s/.test(line[valueStart])) valueStart++;
    if (line[valueStart] === '=' || line[valueStart] === ':') valueStart++;
    while (valueStart < line.length && /\s/.test(line[valueStart])) valueStart++;

    properties[unescapeProperty(line.slice(0, separator))] = unescapeProperty(
      line.slice(valueStart)
    );
  }

  return properties;
};

const loadLocalization = async (locale: string): Promise<Properties> => {
  const response = await fetch(`${LOCALIZATION_URL}/${locale}.properties`);
  if (!response.ok)
    throw new Error(
      `Could not load ${locale} localization: HTTP ${response.status}`
    );
  return parseProperties(await response.text());
};

const loadJson = async <T>(filename: string): Promise<T> =>
  JSON.parse(
    await fs.readFile(path.resolve(DATA_DIR, filename), 'utf-8')
  ) as T;

const localize = (
  properties: Properties,
  key: string,
  missing: Set<string>
) => {
  const value = properties[key];
  if (value === undefined) {
    missing.add(key);
    return key;
  }
  return value.replace(/\r?\n/g, '<br/>');
};

const markdownCell = (value: unknown) =>
  String(value ?? '')
    .replace(/\|/g, '\\|')
    .replace(/\r?\n/g, '<br/>');

const localizeList = (
  properties: Properties,
  entryKey: string,
  category: 'work_with' | 'additional_information',
  values: string[] | undefined,
  missing: Set<string>
) =>
  values
    ?.map((value) =>
      localize(
        properties,
        `${entryKey}.${category}.${value}`,
        missing
      )
    )
    .join('<br/>') || '';
const formatFlag = (value?: true) => value === true;

const markdownTable = (
  headers: string[],
  rows: Array<Array<unknown>>
) => {
  const separator = headers.map(() => '---');
  return [
    `| ${headers.join(' | ')} |`,
    `| ${separator.join(' | ')} |`,
    ...rows.map(
      (row) => `| ${row.map(markdownCell).join(' | ')} |`
    ),
  ].join('\n');
};

const writeMarkdown = (filename: string, title: string, body: string) =>
  fs.writeFile(filename, `# ${title}\n\n${body}\n`, 'utf-8');

const generateActionDocs = async (
  locale: string,
  properties: Properties,
  actions: Action[],
  missing: Set<string>
) => {
  const groups = new Map<string, Action[]>();
  for (const action of actions) {
    const entries = groups.get(action.object) || [];
    entries.push(action);
    groups.set(action.object, entries);
  }

  const directory = path.resolve(DOCS_DIR, locale, 'actions');
  await fs.mkdir(directory, { recursive: true });

  for (const [object, entries] of groups) {
    const rows = entries
      .sort((left, right) => left.id.localeCompare(right.id))
      .map((action) => [
        localize(
          properties,
          `creative_plus.action.${action.id}.name`,
          missing
        ),
        action.id,
        action.category,
        action.subcategory,
        action.type,
        ('args' in action ? action.args : [])
          .map((argument) => `${argument.id}: ${argument.type}`)
          .join('<br/>'),
        localizeList(
          properties,
          `creative_plus.action.${action.id}`,
          'work_with',
          action.worksWith,
          missing
        ),
        localizeList(
          properties,
          `creative_plus.action.${action.id}`,
          'additional_information',
          action.additionalInfo,
          missing
        ),
        formatFlag(action.deprecated),
        formatFlag(action.unused),
        localize(
          properties,
          `creative_plus.action.${action.id}.description`,
          missing
        ),
      ]);

    await writeMarkdown(
      path.resolve(directory, `${object}.md`),
      `${object[0].toUpperCase()}${object.slice(1)} actions`,
      markdownTable(
        [
          'Name',
          'ID',
          'Category',
          'Subcategory',
          'Type',
          'Arguments',
          'Works with',
          'Additional info',
          'Deprecated',
          'Unused',
          'Description',
        ],
        rows
      )
    );
  }
};

const generateEventDocs = async (
  locale: string,
  properties: Properties,
  events: Event[],
  missing: Set<string>
) => {
  const rows = events
    .sort((left, right) => left.id.localeCompare(right.id))
    .map((event) => [
      localize(
        properties,
        `creative_plus.trigger.${event.id}.name`,
        missing
      ),
      event.id,
      event.category,
      event.cancellable,
      localizeList(
        properties,
        `creative_plus.trigger.${event.id}`,
        'work_with',
        event.worksWith,
        missing
      ),
      localizeList(
        properties,
        `creative_plus.trigger.${event.id}`,
        'additional_information',
        event.additionalInfo,
        missing
      ),
      formatFlag(event.deprecated),
      formatFlag(event.unused),
      localize(
        properties,
        `creative_plus.trigger.${event.id}.description`,
        missing
      ),
    ]);

  await writeMarkdown(
    path.resolve(DOCS_DIR, locale, 'events.md'),
    'Events',
    markdownTable(
      [
        'Name',
        'ID',
        'Category',
        'Cancellable',
        'Works with',
        'Additional info',
        'Deprecated',
        'Unused',
        'Description',
      ],
      rows
    )
  );
};

const generateGameValueDocs = async (
  locale: string,
  properties: Properties,
  values: GameValue[],
  missing: Set<string>
) => {
  const rows = values
    .sort((left, right) => left.id.localeCompare(right.id))
    .map((value) => [
      localize(
        properties,
        `creative_plus.game_value.${value.id}.name`,
        missing
      ),
      value.id,
      value.type,
      value.selector,
      'elementType' in value ? value.elementType : '',
      'keyType' in value ? value.keyType : '',
      'valueType' in value ? value.valueType : '',
      localizeList(
        properties,
        `creative_plus.game_value.${value.id}`,
        'work_with',
        value.worksWith,
        missing
      ),
      localizeList(
        properties,
        `creative_plus.game_value.${value.id}`,
        'additional_information',
        value.additionalInfo,
        missing
      ),
      formatFlag(value.deprecated),
      formatFlag(value.unused),
      localize(
        properties,
        `creative_plus.game_value.${value.id}.description`,
        missing
      ),
    ]);

  await writeMarkdown(
    path.resolve(DOCS_DIR, locale, 'values.md'),
    'Game values',
    markdownTable(
      [
        'Name',
        'ID',
        'Type',
        'Selector',
        'Element type',
        'Key type',
        'Value type',
        'Works with',
        'Additional info',
        'Deprecated',
        'Unused',
        'Description',
      ],
      rows
    )
  );
};

(async () => {
  info('loading data and localization...');
  const [actions, events, values] = await Promise.all([
    loadJson<Action[]>('actions.json'),
    loadJson<Event[]>('events.json'),
    loadJson<GameValue[]>('values.json'),
  ]);
  const localizations = await Promise.all(
    LOCALES.map(async (locale) => [locale, await loadLocalization(locale)] as const)
  );

  const missing = new Set<string>();
  for (const [locale, properties] of localizations) {
    await fs.mkdir(path.resolve(DOCS_DIR, locale), { recursive: true });
    await generateActionDocs(locale, properties, actions, missing);
    await generateEventDocs(locale, properties, events, missing);
    await generateGameValueDocs(locale, properties, values, missing);
  }

  if (missing.size)
    warn(
      `${missing.size} localization keys were missing; keys are included in the generated docs`
    );
  success(`generated localized Markdown docs in ${DOCS_DIR}`);
})();
