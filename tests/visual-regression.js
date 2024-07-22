// Iteration from https://meowni.ca/posts/2017-puppeteer-tests/#the-thing-that-does-the-diffing (thanks a lot, @notwaldorf!)

import { createReadStream, createWriteStream, existsSync, mkdirSync } from "fs";
import { expect } from "chai";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import { launch } from "puppeteer";
import { dirname as _dirname } from "path";
import { sync } from "rimraf";

const testDir = "./captures/test";
const prodDir = "./captures/reference";
const diffDir = "./captures/diff";
const testUrl = "http://localhost:8080";
const tests = {
  fr: {
    locale: "fr-FR,fr",
    mode: "light",
    routes: {
      home: "",
      web: "web/",
      post: "notes/1900-01-test-typo/"
    }
  },
  en: {
    locale: "en-US,en",
    mode: "dark",
    routes: {
      home: "",
      dad: "en/dad/"
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

describe("👀 screenshots are correct", () => {
  let browser;
  let page;

  // This is ran when the suite starts up.
  before(async () => {
    // Create the test directory if needed. This and the prodDir
    // variables are global somewhere.
    sync(testDir);
    sync(diffDir);
  });

  // This is ran after every test; clean up after your browser.
  afterEach(() => browser.close());

  for (const t in tests) {
    describe(`${t} tests`, () => {
      // This is ran before every test. It's where you start a clean browser.
      beforeEach(async () => {
        browser = await launch({
          headless: true,
          args: [`--lang=${tests[t].locale}`]
        });
        page = await browser.newPage();
        await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: tests[t].mode }]);
        await page.setExtraHTTPHeaders({
          "Accept-Language": tests[t].locale
        });
      });

      for (const c in contexts) {
        const { routes } = tests[t];
        describe(`${c} screen`, () => {
          beforeEach(async () => {
            return page.setViewport({
              width: contexts[c].width,
              height: contexts[c].height
            });
          });

          for (const r in routes) {
            it(r, async () => {
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
  const fileName = filePrefix + "/" + (route ? route : "index");

  // Start the browser, go to the test page, and take a screenshot.
  ensureDirectoryExistence(`${testDir}/${fileName}.png`);
  await page.goto(`${testUrl}/${routeUrl}`, { waitUntil: "networkidle0" });
  await page.screenshot({
    path: `${testDir}/${fileName}.png`,
    fullPage: route == "post"
  });

  // Test to see if it's right.
  return compareScreenshots(fileName);
}

async function compareScreenshots(fileName) {
  return new Promise(resolve => {
    const img1 = createReadStream(`${testDir}/${fileName}.png`)
      .pipe(new PNG())
      .on("parsed", doneReading);
    const img2 = createReadStream(`${prodDir}/${fileName}.png`)
      .pipe(new PNG())
      .on("parsed", doneReading);

    let filesRead = 0;

    function doneReading() {
      // Wait until both files are read.
      if (++filesRead < 2) {
        return;
      }

      // Do the visual diff.
      const diff = new PNG({
        width: img2.width,
        height: Math.max(img1.height, img2.height)
      });
      const numDiffPixels = pixelmatch(
        img1.data,
        img2.data,
        diff.data,
        img1.width,
        img1.height,
        {
          threshold: 0.2
        }
      );

      if (numDiffPixels > 200) {
        ensureDirectoryExistence(`${diffDir}/${fileName}.png`);
        diff.pack().pipe(createWriteStream(`${diffDir}/${fileName}.png`));
      }

      // The files should be the same size.
      expect(img1.width, "image widths are the same").equal(img2.width);
      expect(img1.height, "image heights are the same").equal(img2.height);

      // The files should look the same.
      expect(numDiffPixels, "number of different pixels").below(200);
      resolve();
    }
  });
}

function ensureDirectoryExistence(filePath) {
  var dirname = _dirname(filePath);
  if (existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  mkdirSync(dirname);
}
