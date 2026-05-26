import { execFileSync } from 'child_process';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { expect } from 'chai';

import './visual-regression.js'; // registers the visual regression describe blocks
import { validateFeeds } from './validate-feeds.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

describe('generated content (htmlproofer)', function () {
  this.timeout(5 * 60 * 1000);

  it('validates site with htmlproofer', function () {
    // Run the existing npm script defined in tests/package.json

    execFileSync(
      'bundle',
      [
        'exec',
        'htmlproofer ../_site --disable-external --no-enforce-https --allow-missing-href --no-check-external-hash --checks "Links,Scripts"',
      ],
      {
        cwd: resolve(__dirname),
        stdio: 'inherit',
      }
    );
  });
});

// Feeds test
describe('feeds', function () {
  it('validates feeds', function () {
    // validateFeeds throws on failure which causes Mocha to fail the test
    validateFeeds();
  });
});
