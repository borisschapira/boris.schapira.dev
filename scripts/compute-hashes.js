var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');
const hasha = require('hasha');

// CSS assets folder
const cssFolder = path.resolve(__dirname, '../assets/styles/');
const jsFolder = path.resolve(__dirname, '../assets/scripts/');
let data = { styles: {}, scripts: {} };

// Get files
const cssDirents = fs.readdirSync(cssFolder, { withFileTypes: true });
const cssFiles = cssDirents
  .filter((dirent) => !dirent.isDirectory())
  .map((dirent) => path.resolve(__dirname, '../assets/styles/', dirent.name));

const jsDirents = fs.readdirSync(jsFolder, { withFileTypes: true });
const jsFiles = jsDirents
  .filter((dirent) => !dirent.isDirectory())
  .map((dirent) => path.resolve(__dirname, '../assets/scripts/', dirent.name));

cssFiles.forEach(function (file) {
  // Get the MD5 hash of a file
  const hash = hasha.fromFileSync(file, { algorithm: 'md5' });
  const filename = path.basename(file, path.extname(file));

  data.styles[filename] = hash;
});

jsFiles.forEach(function (file) {
  // Get the MD5 hash of file
  const hash = hasha.fromFileSync(file, { algorithm: 'md5' });
  const filename = path.basename(file, path.extname(file));

  data.scripts[filename] = hash;
});

fs.writeFile(
  path.resolve(__dirname, '../_data/hashes.yml'),
  yaml.safeDump(data, {
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
  }
);
