import { XMLValidator } from 'fast-xml-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const feedUris = [
  'feed.xml',
  'web/feed.xml',
  'citoyen/feed.xml',
  'papa/feed.xml',
  'en/feed.xml',
  'en/web/feed.xml',
  'en/citizen/feed.xml',
  'en/dad/feed.xml',
];

function validateFeeds() {
  const errors = [];

  for (const feedUri of feedUris) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const SITE_DIR = path.resolve(__dirname, '..', '_site');
    const feedPath = path.resolve(SITE_DIR, feedUri);
    let feed;
    try {
      feed = fs.readFileSync(feedPath, 'utf-8');
    } catch (err) {
      errors.push({ feedUri, error: `Could not read ${feedPath}: ${err.message}` });
      continue;
    }

    try {
      const validateResult = XMLValidator.validate(feed);
      if (validateResult !== true) {
        errors.push({ feedUri, error: validateResult.err || validateResult });
      }
    } catch (error) {
      errors.push({ feedUri, error });
    }
  }

  if (errors.length > 0) {
    const details = errors.map(e => `• ${e.feedUri}: ${e.error}`).join('\n');
    const err = new Error(`Feeds validation failed:\n${details}`);
    err.details = errors;
    throw err;
  }
}

describe('🛜 Feeds are present and valid', function () {
  it('validates feeds', function () {
    // validateFeeds throws on failure which causes Mocha to fail the test
    validateFeeds();
  });
});
