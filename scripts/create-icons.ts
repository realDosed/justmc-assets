import fetch from 'node-fetch';
import { promises as fs, existsSync, mkdirSync, exists, readFileSync } from 'fs';
import { createCanvas, loadImage } from 'canvas';
import path from 'path';
import opentype from 'opentype.js';

import {
  Dictionary,
  createProgress,
  error,
  exitIfAnyErrors,
  fileExists,
  ICONS_CACHE_DIR,
  ICONS_DIR,
  EXCLUDED_DATA_IDS,
  info,
  success,
  warn,
  type CachedIcon,
} from './common';

const SIZE = 300;
const FONT_SIZE = 165;
const TEXT_OFFSET_Y = 6;
const TEXT_OFFSET_X = -2;
const SHADOW_OFFSET = 17;
const SHADOW_COLOR = '#373737';
const TEXT_COLOR = 'white';
const DEFAULT_PLAYER_HEAD_ID =
  '31f477eb1a7beee631c2ca64d06f8f68fa93a3386d04452ab27f43acdf1b60cb';

type IconWithCategory = CachedIcon & {
  category?: string;
};

const DEFAULT_DEST_IMAGE_OPTIONS = {
  x: 0,
  y: 0,
  width: SIZE,
  height: SIZE,
};

const HEAD_DEST_IMAGE_WIDTH = 246;
const HEAD_DEST_IMAGE_HEIGHT = 260;
const HEAD_DEST_IMAGE_OPTIONS = {
  x: ~~((SIZE - HEAD_DEST_IMAGE_WIDTH) / 2),
  y: ~~((SIZE - HEAD_DEST_IMAGE_HEIGHT) / 2),
  width: HEAD_DEST_IMAGE_WIDTH,
  height: HEAD_DEST_IMAGE_HEIGHT,
};

const canvas = createCanvas(SIZE, SIZE);
const context = canvas.getContext('2d');
const iconFont = opentype.parse(
  readFileSync(path.resolve(__dirname, '../Minecraft.ttf'))
);

const offCanvas = createCanvas(SIZE, SIZE);
const offContext = offCanvas.getContext('2d');

const glint = fs
  .readFile(path.resolve(__dirname, '../enchanted_item_glint.png'))
  .then(loadImage);

const drawText = (text: string, color: string, x: number, y: number) => {
  const glyphs = iconFont.getPath(text, x, y, FONT_SIZE);
  context.beginPath();

  for (const command of glyphs.commands) {
    switch (command.type) {
      case 'M':
        context.moveTo(command.x, command.y);
        break;
      case 'L':
        context.lineTo(command.x, command.y);
        break;
      case 'C':
        context.bezierCurveTo(
          command.x1,
          command.y1,
          command.x2,
          command.y2,
          command.x,
          command.y
        );
        break;
      case 'Q':
        context.quadraticCurveTo(
          command.x1,
          command.y1,
          command.x,
          command.y
        );
        break;
      case 'Z':
        context.closePath();
        break;
    }
  }

  context.fillStyle = color;
  context.fill();
};

const getPlayerHeadId = (texture?: string): string => {
  if (!texture) return DEFAULT_PLAYER_HEAD_ID;

  try {
    const decoded = Buffer.from(texture, 'base64').toString('utf-8');
    const parsed = JSON.parse(decoded);

    return parsed.textures.SKIN.url.split('/').pop();
  } catch (_) {
    return DEFAULT_PLAYER_HEAD_ID;
  }
};

const loadIcon = async (url: string) => {
  let lastError: unknown;

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url, { timeout: 40_000 });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

      const buffer = await response.buffer();
      return { image: await loadImage(buffer) };
    } catch (cause) {
      lastError = cause;
    }
  }

  throw new Error(
    `Could not load a valid image from ${url}: ${lastError instanceof Error ? lastError.message : String(lastError)}`
  );
};

const drawIcon = async (icon: CachedIcon) => {
  if (icon.material === 'AIR') {
    context.clearRect(0, 0, SIZE, SIZE);
    return canvas.toBuffer();
  }

  let url: string;
  let destinationOpts = DEFAULT_DEST_IMAGE_OPTIONS;

  if (icon.material === 'PLAYER_HEAD') {
    destinationOpts = HEAD_DEST_IMAGE_OPTIONS;
    url = `https://mc-heads.net/head/${getPlayerHeadId(icon.texture)}`;
  } else {
    url = `https://raw.githubusercontent.com/Owen1212055/mc-assets/main/item-assets/${icon.material}.png`;
  }

  let image: Awaited<ReturnType<typeof loadImage>>;
  try {
    ({ image } = await loadIcon(url));
  } catch (cause) {
    return error(
      `Could not load image for icon ${icon.id} (${icon.material}): ${cause}`
    );
  }

  context.clearRect(0, 0, SIZE, SIZE);
  context.drawImage(
    image,
    destinationOpts.x,
    destinationOpts.y,
    destinationOpts.width,
    destinationOpts.height
  );

  if (icon.hasGlint) {
    offContext.clearRect(0, 0, SIZE, SIZE);
    offContext.drawImage(image, 0, 0, SIZE, SIZE);
    offContext.save();
    offContext.globalCompositeOperation = 'source-atop';
    offContext.drawImage(await glint, 0, 0, SIZE, SIZE);
    offContext.restore();

    context.save();
    context.globalAlpha = 0.5;
    context.globalCompositeOperation = 'lighter';
    context.drawImage(await loadImage(offCanvas.toBuffer()), 0, 0);
    context.restore();
  }

  if (!('amount' in icon) || icon.amount < 2) return canvas.toBuffer();

  const text = icon.amount.toString();
  const width = iconFont.getAdvanceWidth(text, FONT_SIZE);
  const x = SIZE - width - TEXT_OFFSET_X;
  const y = SIZE - TEXT_OFFSET_Y;

  drawText(text, SHADOW_COLOR, x, y);
  drawText(text, TEXT_COLOR, x - SHADOW_OFFSET, y - SHADOW_OFFSET);

  return canvas.toBuffer();
};

(async () => {
  info('creating icons...');
  const iconsDir = await fs.readdir(ICONS_CACHE_DIR);

  for (const categoryFile of iconsDir) {
    const icons: Dictionary<IconWithCategory> = JSON.parse(
      await fs.readFile(path.resolve(ICONS_CACHE_DIR, categoryFile), 'utf-8')
    );

    const category = `${categoryFile.replace('.json', '')}`;
    const categoryDir = path.resolve(ICONS_DIR, category);
    info(`creating ${category} icons...`);

    if (!(await fileExists(categoryDir))) await fs.mkdir(categoryDir);

    const iconList = Object.values(icons);
    const progress = createProgress(
      `Creating ${category} icons`,
      iconList.length
    );
    let processed = 0;
    await Promise.all(
      iconList.map(async (icon) => {
        try {
          const iconPath = path.resolve(categoryDir, `${icon.id}.png`);

          if (icon.material === 'AIR' && icon.category) {
            const categoryIconPath = path.resolve(
              categoryDir,
              'categories',
              `${icon.category}.png`
            );
            if (await fileExists(categoryIconPath))
              return await fs.copyFile(categoryIconPath, iconPath);
          }

          if (
            icon.material !== 'PLAYER_HEAD' &&
            icon.material !== 'AIR' &&
            icon.amount < 2 &&
            (await fileExists(iconPath))
          )
            return;
          const picture = await drawIcon(icon);
          if (!picture) return;

          return await fs.writeFile(iconPath, picture);
        } finally {
          progress.update(icon.id, ++processed);
        }
      })
    );
    progress.complete();

    const excludedIds =
      category === 'actions'
        ? EXCLUDED_DATA_IDS.actions
        : category === 'events'
          ? EXCLUDED_DATA_IDS.events
          : category === 'game_values'
            ? EXCLUDED_DATA_IDS.values
            : [];
    await Promise.all(
      excludedIds.map(async (id) => {
        const iconPath = path.resolve(categoryDir, `${id}.png`);
        if (await fileExists(iconPath)) await fs.unlink(iconPath);
      })
    );

    exitIfAnyErrors();

    success(`created ${category} icons`);
  }

  info('creating extra icons...');

  const extraIconsFile = path.resolve(ICONS_DIR, 'extra_icons.json');
  if (!(await fileExists(extraIconsFile))) {
    warn('skipping extra icons; icons/extra_icons.json is missing');
    return;
  }

  const extraIcons: (CachedIcon & { path: string })[] = JSON.parse(
    await fs.readFile(extraIconsFile, 'utf-8')
  );

  const extraProgress = createProgress('Creating extra icons', extraIcons.length);
  let extraProcessed = 0;
  await Promise.all(
    extraIcons.map(async (icon) => {
      try {
        const dir = path.resolve(ICONS_DIR, icon.path);
        if (!existsSync(dir)) mkdirSync(dir);

        return await fs.writeFile(`${dir}/${icon.id}.png`, await drawIcon(icon));
      } finally {
        extraProgress.update(icon.id, ++extraProcessed);
      }
    })
  );
  extraProgress.complete();

  success('created all icons');
})();