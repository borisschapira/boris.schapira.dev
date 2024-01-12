import { hashFileSync } from 'hasha';
import { readdirSync, writeFile } from 'fs';
import { dirname, resolve, extname, basename } from 'path';
import { dump } from 'js-yaml';
import { fileURLToPath } from 'url';

// Get __dirname back
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// CSS assets folder
const cssFolder = resolve(__dirname, '../assets/styles/');
const jsFolder = resolve(__dirname, '../assets/scripts/');
let data = { styles: {}, scripts: {} };

// Get files
const cssDirents = readdirSync(cssFolder, { withFileTypes: true });
const cssFiles = cssDirents
  .filter((dirent) => !dirent.isDirectory())
  .map((dirent) => resolve(__dirname, '../assets/styles/', dirent.name));

const jsDirents = readdirSync(jsFolder, { withFileTypes: true });
const jsFiles = jsDirents
  .filter((dirent) => !dirent.isDirectory())
  .map((dirent) => resolve(__dirname, '../assets/scripts/', dirent.name));

cssFiles.forEach(function (file) {
  // Get the MD5 hash of a file
  const hash = hashFileSync(file, { algorithm: 'md5' });
  const filename = basename(file, extname(file));

  data.styles[filename] = hash;
});

jsFiles.forEach(function (file) {
  // Get the MD5 hash of file
  const hash = hashFileSync(file, { algorithm: 'md5' });
  const filename = basename(file, extname(file));

  data.scripts[filename] = hash;
});

writeFile(
  resolve(__dirname, '../_data/hashes.yml'),
  dump(data, {
    styles: {
      '!!null': 'canonical', // dump null as ~
    },
    sortKeys: false, // sort object keys
  }),
  {
    flag: 'w',
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Hashes data saved.');
    }
  },
);
