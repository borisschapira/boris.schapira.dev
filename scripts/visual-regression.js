// Iteration from https://meowni.ca/posts/2017-puppeteer-tests/#the-thing-that-does-the-diffing (thanks a lot, @notwaldorf!)

const expect = require('chai').expect;
const fs = require('fs');
const pixelmatch = require('pixelmatch');
const PNG = require("pngjs").PNG
const puppeteer = require('puppeteer');
const testDir = "./_captures/test",
  prodDir = "./_captures/reference",
  diffDir = "./_captures/diff";
const testUrl = "https://boris.schapira.local:10443";
const tests = {
  fr: {
    locale: 'fr-FR,fr',
    routes: {
      home: '',
      web: 'web/',
      post: '/2030/01/test-typo/'
    }
  },
  en: {
    locale: 'en-US,en',
    routes: {
      home: '',
      citizen: '/en/citizen/',
    }
  }
};
const contexts = {
  mobile: {
    width: 375,
    height: 667
  },
  desktop: {
    width: 963,
    height: 1712
  }
};

describe('👀 screenshots are correct', function () {
  let browser, page;

  // This is ran when the suite starts up.
  before(async function () {

    // Create the test directory if needed. This and the prodDir
    // variables are global somewhere.
    if (!fs.existsSync(testDir)) fs.mkdirSync(testDir);

    // And its wide screen/small screen subdirectories.
    const rootDirs = [testDir, prodDir, diffDir];
    let i, j;
    for (i = 0; i < rootDirs.length; i++) {
      let rootDir = rootDirs[i];
      for (let t in tests) {
        for (let c in contexts) {
          if (!fs.existsSync(`${rootDir}`)) {
            fs.mkdirSync(`${rootDir}`);
          }
          if (!fs.existsSync(`${rootDir}/${t}_${c}`)) {
            fs.mkdirSync(`${rootDir}/${t}_${c}`);
          }
        }
      }
    }
  });

  // This is ran after every test; clean up after your browser.
  afterEach(() => browser.close());

  for (let t in tests) {

    describe(`${t} tests`, function () {

      // This is ran before every test. It's where you start a clean browser.
      beforeEach(async function () {
        browser = await puppeteer.launch({
          args: [`--lang=${tests[t].locale}`]
        });
        page = await browser.newPage();
      });

      for (let c in contexts) {
        let routes = tests[t].routes;
        describe(`${c} screen`, function () {
          beforeEach(async function () {
            return page.setViewport({
              width: contexts[c].width,
              height: contexts[c].height
            });
          });

          for (let r in routes) {
            it(r, async function () {
              return takeAndCompareScreenshot(page, r, routes[r], `${t}_${c}`);
            });
          }
        });
      }
    });
  }
});

// - page is a reference to the Puppeteer page.
// - route is the path you're loading, which I'm using to name the file.
// - filePrefix is either "wide" or "narrow", since I'm automatically testing both.
async function takeAndCompareScreenshot(page, route, routeUrl, filePrefix) {
  // If you didn't specify a file, use the name of the route.
  let fileName = filePrefix + '/' + (route ? route : 'index');

  // Start the browser, go to the test page, and take a screenshot.
  await page.goto(`${testUrl}/${routeUrl}`);
  await page.screenshot({
    path: `${testDir}/${fileName}.png`,
    fullPage: true
  });

  // Test to see if it's right.
  return compareScreenshots(fileName);
}

async function compareScreenshots(fileName) {
  return new Promise((resolve, reject) => {
    const img1 = fs.createReadStream(`${testDir}/${fileName}.png`).pipe(new PNG()).on('parsed', doneReading);
    const img2 = fs.createReadStream(`${prodDir}/${fileName}.png`).pipe(new PNG()).on('parsed', doneReading);
    const diff = new PNG({
      width: img2.width,
      height: Math.max(img1.height, img2.height)
    });

    let filesRead = 0;

    function doneReading() {
      // Wait until both files are read.
      if (++filesRead < 2) return;

      // Do the visual diff.
      const diff = new PNG({
        width: img2.width,
        height: Math.max(img1.height, img2.height)
      });
      const numDiffPixels = pixelmatch(
        img1.data, img2.data, diff.data, img1.width, img1.height, {
          threshold: 0.2
        });

      if (numDiffPixels > 200) {
        diff.pack().pipe(fs.createWriteStream(`${diffDir}/${fileName}.png`));
      }

      // The files should be the same size.
      expect(img1.width, 'image widths are the same').equal(img2.width);
      expect(img1.height, 'image heights are the same').equal(img2.height);

      // The files should look the same.
      expect(numDiffPixels, 'number of different pixels').below(200);
      resolve();
    }
  });
}