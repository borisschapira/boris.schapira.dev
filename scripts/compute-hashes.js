import { hashFile } from 'hasha';
import { readdir, writeFile } from 'fs/promises';
import { dirname, resolve, extname, basename } from 'path';
import { dump } from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function hashFolder(folder) {
  const dirents = await readdir(folder, { withFileTypes: true });
  const files = dirents.filter(d => !d.isDirectory());

  const entries = await Promise.all(
    files.map(async dirent => {
      const filePath = resolve(folder, dirent.name);
      const hash = await hashFile(filePath, { algorithm: 'md5' });
      return [basename(dirent.name, extname(dirent.name)), hash];
    })
  );

  return Object.fromEntries(entries);
}

const [styles, scripts] = await Promise.all([
  hashFolder(resolve(__dirname, '../assets/styles/')),
  hashFolder(resolve(__dirname, '../assets/scripts/')),
]);

await writeFile(
  resolve(__dirname, '../_data/hashes.yml'),
  dump({ styles, scripts }, { sortKeys: false }),
  { flag: 'w' }
);

console.log('Hashes data saved.');
