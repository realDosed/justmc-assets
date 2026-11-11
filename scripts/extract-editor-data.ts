import { promises as fs } from 'fs';
import path from 'path';

import {
  DATA_DIR,
  getSourceFiles,
  info,
  readSourceFile,
  success,
  toPrettyPrintJson,
} from './common';

type CodingBlock = {
  id: string;
  type: 'handler' | 'action';
  slot: number;
};

const ARGUMENTS_FILE = path.resolve(DATA_DIR, 'arguments.json');
const BLOCKS_FILE = path.resolve(DATA_DIR, 'blocks.json');
const ARGUMENT_TYPES = [
  'any',
  'array',
  'block',
  'cell',
  'enum',
  'item',
  'location',
  'map',
  'number',
  'parameter',
  'particle',
  'potion',
  'sound',
  'text',
  'variable',
  'vector',
];

const toId = (name: string) =>
  name
    .replace(/CodingBlock$/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .toLowerCase()
    .replace(/_action$/, '');

const getEquipmentSlots = (content: string) => {
  const slots = new Map<string, number>();
  const itemRegex =
    /setItem\s*\(\s*(\d+)\s*,\s*createEditorItem\s*\(\s*([A-Za-z0-9_]+)\.MAIN_MATERIAL\s*,\s*[A-Za-z0-9_]+\.DISPLAY_COLOR\s*,\s*"([^"]+)"/g;

  for (const match of content.matchAll(itemRegex)) {
    slots.set(match[2], Number(match[1]));
  }

  return slots;
};

const extractCodingBlocks = async (): Promise<CodingBlock[]> => {
  const blockFiles = await getSourceFiles('editor/block');
  const editorEnvironment = await readSourceFile('editor/EditorEnvironment.kt');
  const equipmentSlots = getEquipmentSlots(editorEnvironment);
  const blocks: CodingBlock[] = [];

  for (const file of blockFiles) {
    const classMatches = [
      ...file.content.matchAll(/(?<!abstract\s)class\s+([A-Za-z0-9_]*CodingBlock)\b/g),
    ];

    for (const match of classMatches) {
      const className = match[1];
      const slot = equipmentSlots.get(className);
      if (slot === undefined) continue;

      blocks.push({
        id: toId(className),
        type: file.path.includes(`${path.sep}trigger${path.sep}`)
          ? 'handler'
          : 'action',
        slot,
      });
    }
  }

  return blocks.sort((left, right) => left.id.localeCompare(right.id));
};

(async () => {
  info('generating argument and coding block data...');

  const blocks = await extractCodingBlocks();

  await Promise.all([
    fs.writeFile(ARGUMENTS_FILE, toPrettyPrintJson(ARGUMENT_TYPES)),
    fs.writeFile(BLOCKS_FILE, toPrettyPrintJson(blocks)),
  ]);

  success(
    `generated ${ARGUMENT_TYPES.length} argument types and ${blocks.length} coding blocks`
  );
})();
