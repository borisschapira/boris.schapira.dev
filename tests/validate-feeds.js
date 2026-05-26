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

export function validateFeeds() {
  const errors = [];

  for (const feedUri of feedUris) {
    const feedPath = path.resolve('../_site/', feedUri);
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

// CLI support so existing npm script/node invocation still works
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    validateFeeds();
    console.log('All feeds valid');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
