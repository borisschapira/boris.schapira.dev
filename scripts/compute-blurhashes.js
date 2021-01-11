var fs = require('fs');
var path = require('path');
const HashMap = require('hashmap');
var yaml = require('js-yaml');
const { createCanvas, loadImage } = require('canvas');
const { encode } = require('blurhash');
const globby = require('globby');

const getImageData = (image) => {
  const canvas = createCanvas(200, 200);
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext('2d');
  context.drawImage(image, 0, 0);
  return context.getImageData(0, 0, image.width, image.height);
};

const encodeImageToBlurhash = async (imageUrl) => {
  const image = await loadImage(imageUrl);
  const imageData = getImageData(image);
  return encode(imageData.data, imageData.width, imageData.height, 4, 4);
};

(async () => {
  let data = new HashMap();

  const listAllImageFilesAndDirs = (dir) => globby(`${dir}/**/*.{jpg,png}`);
  const imgFiles = await listAllImageFilesAndDirs(
    path.resolve(__dirname, '../assets/images/')
  );

  for (let index = 0; index < imgFiles.length; index++) {
    const file = imgFiles[index];
    const relativePath = path.relative(path.resolve(__dirname, '..'), file);
    const bhEncoder = encodeImageToBlurhash(path.resolve(__dirname, file));
    console.log(relativePath, await bhEncoder);
    data.set(relativePath, await bhEncoder);
  }

  fs.writeFile(
    path.resolve(__dirname, '../_data/blurhashes.yml'),
    yaml.dump(data.entries(), {
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
        console.log('Blurhashes data saved.');
      }
    }
  );
})();
