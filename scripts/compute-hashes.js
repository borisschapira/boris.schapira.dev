var fs = require("fs");
var path = require("path");
var yaml = require("js-yaml");
const hasha = require("hasha");

// CSS assets folder
const cssFolder = path.resolve(__dirname, "../assets/styles/");
let data = { styles: {} };

// Get files
const dirents = fs.readdirSync(cssFolder, { withFileTypes: true });
const files = dirents
  .filter(dirent => !dirent.isDirectory())
  .map(dirent => path.resolve(__dirname, "../assets/styles/", dirent.name));

files.forEach(function(file, index) {
  // Get the MD5 hash of an image
  const hash = hasha.fromFileSync(file, { algorithm: "md5" });
  const filename = path.basename(file, path.extname(file));

  data.styles[filename] = hash;
});

fs.writeFile(
  path.resolve(__dirname, "../_data/hashes.yml"),
  yaml.safeDump(data, {
    'styles': {
      '!!null': 'canonical' // dump null as ~
    },
    'sortKeys': false       // sort object keys
  }),
  {
    flag: 'w'
  },
  function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Hashes data saved.");
    }
  }
);
