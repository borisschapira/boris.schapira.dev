import { XMLValidator } from 'fast-xml-parser';
import fs from 'fs';
import path from 'path';

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

for (const feedUri of feedUris) {
  const feed = fs
    .readFileSync(path.resolve('../_site/', feedUri))
    .toString('utf-8');
  try {
    const validateResult = XMLValidator.validate(feed);
    if (validateResult !== true) {
      throw validateResult.err;
    } else {
      console.log(`Valid feed: ${feedUri}`)
    }
  } catch (error) {
    console.log(error);
  }
}
