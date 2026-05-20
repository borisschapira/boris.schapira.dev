import { readdir, writeFile } from 'fs/promises';
import { resolve, relative, extname } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { dump } from 'js-yaml';
import { createCanvas, loadImage } from 'canvas';
import { encode } from 'blurhash';
import { globby } from 'globby';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Réduire l'image pour accélérer le calcul — le blurhash n'a pas besoin de la pleine résolution
const THUMB_WIDTH = 64;

function getBlurHash(image) {
  const ratio = THUMB_WIDTH / image.width;
  const width = THUMB_WIDTH;
  const height = Math.round(image.height * ratio);

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0, width, height);

  const imageData = ctx.getImageData(0, 0, width, height);
  return encode(imageData.data, width, height, 4, 4);
}

async function encodeImageToBlurhash(filePath) {
  const image = await loadImage(filePath);
  return getBlurHash(image);
}

const CONCURRENCY = 8; // limiter la mémoire

async function processInBatches(items, fn, concurrency) {
  const results = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(fn));
    results.push(...batchResults);
  }
  return results;
}

const rootDir = resolve(__dirname, '..');
const imgFiles = await globby(`${resolve(rootDir, 'assets/images')}/**/*.{jpg,png}`);

const entries = await processInBatches(
  imgFiles,
  async file => {
    const relativePath = relative(rootDir, file);
    const hash = await encodeImageToBlurhash(file);
    console.log(relativePath, hash);
    return [relativePath, hash];
  },
  CONCURRENCY
);

const data = Object.fromEntries(entries);

await writeFile(resolve(__dirname, '../_data/blurhashes.yml'), dump(data, { sortKeys: false }), {
  flag: 'w',
});

console.log('Blurhashes data saved.');
