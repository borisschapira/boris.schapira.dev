// Iteration from https://meowni.ca/posts/2017-puppeteer-tests/#the-thing-that-does-the-diffing
// (thanks a lot, @notwaldorf!)

import { createReadStream, createWriteStream, mkdirSync } from 'fs';
import { expect } from 'chai';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import { launch } from 'puppeteer';
import { dirname, resolve } from 'path';
import { rimrafSync } from 'rimraf';
import open from 'open';

const TEST_DIR = './captures/test';
const PROD_DIR = './captures/reference';
const DIFF_DIR = './captures/diff';
const TEST_URL = 'http://localhost:8080';
const DIFF_THRESHOLD = 0.2;
const MAX_ACCEPTABLE_DIFF_PIXELS = 200;
const CONCURRENCY = 4;

const tests = {
  fr: {
    locale: 'fr-FR,fr',
    mode: 'light',
    routes: {
      home: '',
      web: 'web/',
      post: 'notes/1900-01-test-typo/',
    },
  },
  en: {
    locale: 'en-US,en',
    mode: 'dark',
    routes: {
      home: '',
      dad: 'en/dad/',
    },
  },
};

const contexts = {
  mobile: { width: 375, height: 667 },
  desktop: { width: 963, height: 1712 },
};

// ─── Helpers ──────────────────────────────────────────────

function ensureDirForFile(filePath) {
  mkdirSync(dirname(filePath), { recursive: true });
}

function decodePNG(path) {
  return new Promise((resolve, reject) => {
    createReadStream(path)
      .pipe(new PNG())
      .on('parsed', function () {
        resolve(this);
      })
      .on('error', reject);
  });
}

async function writePNG(png, path) {
  ensureDirForFile(path);
  return new Promise((resolve, reject) => {
    png.pack().pipe(createWriteStream(path)).on('finish', resolve).on('error', reject);
  });
}

async function compareScreenshots(fileName) {
  const [img1, img2] = await Promise.all([
    decodePNG(`${TEST_DIR}/${fileName}.png`),
    decodePNG(`${PROD_DIR}/${fileName}.png`),
  ]);

  expect(img1.width, `${fileName}: image widths`).equal(img2.width);
  expect(img1.height, `${fileName}: image heights`).equal(img2.height);

  const diff = new PNG({ width: img1.width, height: img1.height });
  const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, {
    threshold: DIFF_THRESHOLD,
  });

  if (numDiffPixels > MAX_ACCEPTABLE_DIFF_PIXELS) {
    const diffPath = resolve(`${DIFF_DIR}/${fileName}.png`);
    await writePNG(diff, diffPath);
    await open(diffPath);
  }

  return { fileName, numDiffPixels };
}

/**
 * Take a screenshot for a single route/viewport combo using its own page.
 */
async function captureAndCompare(browser, { lang, locale, mode, size, viewport, route, routeUrl }) {
  const page = await browser.newPage();
  try {
    await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: mode }]);
    await page.setExtraHTTPHeaders({ 'Accept-Language': locale });
    await page.setViewport(viewport);

    const fileName = `${lang}_${size}/${route || 'index'}`;
    const testPath = `${TEST_DIR}/${fileName}.png`;

    ensureDirForFile(testPath);
    await page.goto(`${TEST_URL}/${routeUrl}`, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: testPath, fullPage: route === 'post' });

    return compareScreenshots(fileName);
  } finally {
    await page.close();
  }
}

/**
 * Run async tasks with controlled concurrency.
 */
async function parallel(tasks, concurrency) {
  const results = [];
  const executing = new Set();

  for (const task of tasks) {
    const p = task().then(r => {
      executing.delete(p);
      return r;
    });
    executing.add(p);
    results.push(p);
    if (executing.size >= concurrency) {
      await Promise.race(executing);
    }
  }

  return Promise.all(results);
}

// ─── Test suite ───────────────────────────────────────────

describe('👀 screenshots are correct', function () {
  // Generous timeout — we're running many screenshots per test block
  this.timeout(120_000);

  before(() => {
    rimrafSync(TEST_DIR);
    rimrafSync(DIFF_DIR);
  });

  for (const [lang, { locale, mode, routes }] of Object.entries(tests)) {
    describe(`${lang} tests`, () => {
      let browser;

      // One browser per language (--lang is a browser-level flag)
      before(async () => {
        browser = await launch({
          headless: true,
          args: [`--lang=${locale}`],
        });
      });

      after(() => browser.close());

      // All viewport × route combos run in parallel on separate pages
      it('all routes match reference screenshots', async () => {
        const tasks = [];

        for (const [size, viewport] of Object.entries(contexts)) {
          for (const [route, routeUrl] of Object.entries(routes)) {
            tasks.push(() =>
              captureAndCompare(browser, {
                lang,
                locale,
                mode,
                size,
                viewport,
                route,
                routeUrl,
              })
            );
          }
        }

        const results = await parallel(tasks, CONCURRENCY);

        // Report all failures at once instead of stopping at the first
        const failures = results.filter(r => r.numDiffPixels > MAX_ACCEPTABLE_DIFF_PIXELS);
        if (failures.length > 0) {
          const details = failures
            .map(f => `  • ${f.fileName}: ${f.numDiffPixels} diff pixels`)
            .join('\n');
          expect.fail(`${failures.length} screenshot(s) differ from reference:\n${details}`);
        }
      });
    });
  }
});
