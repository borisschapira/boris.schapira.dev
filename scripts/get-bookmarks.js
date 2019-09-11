var fs = require("fs");
var path = require("path");
var yaml = require("js-yaml");
var mkdirp = require("mkdirp");
let Parser = require("rss-parser");
let parser = new Parser();
const crypto = require("crypto");
const slugify = require("slugify");
const escapeStringRegexp = require("escape-string-regexp");
const removals = "<>.~\":/?#[]{}()@!$'()*+,;=";

/*
  Collect and stash comments for the build
*/
(async function() {
  // Set up our request with appropriate auth token and Form ID
  const feeds = [
    "https://my.framasoft.org/u/borisschapira/?do=rss&searchtags=boostmarks&nb=10000",
    "https://my.framasoft.org/u/borisschapira/?do=rss&searchtags=sharemarks&nb=10000"
  ];

  let tags = new Array();

  await asyncForEach(feeds, async feed_url => {
    var feed = await parser.parseURL(feed_url);
    feed.items.forEach(createBookmarkFile);
  });

  createBookmarksTagsFile();

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  function cleanMyFramaContent(content) {
    return content
      .replace(/&#8212; &lt;a.*\/a&gt;/g, "")
      .replace("<br />\n</p>", "\n</p>");
  }

  function stringToHash(string) {
    return crypto
      .createHash("md5")
      .update(string)
      .digest("hex");
  }

  function getDate(d) {
    return [
      d.getFullYear(),
      ("00" + (d.getMonth() + 1)).slice(-2),
      ("00" + (d.getDate())).slice(-2)
    ].join("-");
  }

  function tagSlug(tag) {
    return slugify(tag, {
      replacement: "-",
      remove: new RegExp(
        "[" + escapeStringRegexp(removals) + "]",
        "g"
      ),
      lower: true
    });
  }

  function createBookmarksTagsFile() {
    console.log({ tags });

    let tagCount = tags.reduce(function(tagsCount, currentTag) {
      if (typeof tagsCount[currentTag] !== "undefined") {
        tagsCount[currentTag]++;
        return tagsCount;
      } else {
        tagsCount[currentTag] = 1;
        return tagsCount;
      }
    }, {});

    let orderedTagObjects = [...new Set(tags)].sort().map(tag => {
      return {
        name: tag,
        slug: tagSlug(tag),
        count: tagCount[tag]
      };
    });

    console.log({ orderedTagObjects });

    fs.writeFile(
      path.resolve(__dirname, "../_data/tagsCount.yml"),
      "---\n" +
        yaml.safeDump(orderedTagObjects, {
          styles: {
            "!!null": "canonical" // dump null as ~
          },
          sortKeys: false // sort object keys
        }),
      {
        flag: "w"
      },
      function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Bookmark tags data saved.");
        }
      }
    );
  }

  function createBookmarkFile(bookmark) {
    let thisTags = [...new Set(bookmark.categories.map(x => x["_"]))];

    tags = [...tags, ...thisTags];

    // Each comment is stored in a single file with a timestamp-based file path
    var dateString = getDate(new Date(bookmark.isoDate));
    var yearString = "" + new Date(bookmark.isoDate).getFullYear();
    var bookmarks_folder = path.resolve(__dirname, "../_bookmarks/");
    var bookmark_year_folder = path.resolve(bookmarks_folder, yearString);
    var bookmark_filename =
      dateString + "-" + stringToHash(bookmark.guid) + ".md";
    var bookmark_path = path.resolve(bookmark_year_folder, bookmark_filename);

    // If the file does not exist, we create it.
    // Else, we do nothing. The bookmark has already been
    // saved and, maybe, altered. So we don't override the file.
    if (!fs.existsSync(bookmarks_folder)) mkdirp(bookmarks_folder);
    if (!fs.existsSync(bookmark_year_folder)) mkdirp(bookmark_year_folder);
    fs.writeFile(
      bookmark_path,
      "---\n" +
        yaml.safeDump(
          {
            _id: bookmark.guid,
            title: bookmark.title,
            link: bookmark.link,
            date: getDate(new Date(bookmark.isoDate)),
            tags: thisTags.map(t=>{return {name:t,slug:tagSlug(t)}})
          },
          {
            styles: {
              "!!null": "canonical" // dump null as ~
            },
            sortKeys: false // sort object keys
          }
        ) +
        "---\n" +
        cleanMyFramaContent(bookmark.content),
      {
        flag: "w"
      },
      function(err) {
        if (err) {
          console.log(err);
        }
      }
    );
  }
})();
