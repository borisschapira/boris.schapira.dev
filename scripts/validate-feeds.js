const parser = require('fast-xml-parser');
const fs = require('fs');
const path = require('path');

const feedUris = [
  '_site/feed.xml',
  '_site/web/feed.xml',
  '_site/citoyen/feed.xml',
  '_site/papa/feed.xml',
  '_site/en/feed.xml',
  '_site/en/web/feed.xml',
  '_site/en/citizen/feed.xml',
  '_site/en/dad/feed.xml',
];

for (const feedUri of feedUris) {
  const feed = fs.readFileSync(feedUri).toString('utf-8');

  try {
    const validateResult = parser.validate(feed);
    if (validateResult !== true) {
      throw validateResult.err;
    }
  } catch (error) {
    console.log(error);
  }
}
