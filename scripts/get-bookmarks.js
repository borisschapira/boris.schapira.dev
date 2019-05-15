var fs = require("fs");
var path = require("path");
var yaml = require("js-yaml");
var mkdirp = require("mkdirp");
let Parser = require("rss-parser");
let parser = new Parser();
const crypto = require("crypto");

/*
  Collect and stash comments for the build
*/
(async function() {
  // Set up our request with appropriate auth token and Form ID
  const feeds = [
    "https://my.framasoft.org/u/borisschapira/?do=rss&searchtags=boostmarks&nb=10000",
    "https://my.framasoft.org/u/borisschapira/?do=rss&searchtags=sharemarks&nb=10000"
  ];

  feeds.forEach(async feed_url => {
    var feed = await parser.parseURL(feed_url);
    feed.items.forEach(createBookmarkFile);
  });

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
      (d.getMonth() + 1).padLeft(),
      d.getDate().padLeft()
    ].join("-");
  }

  Number.prototype.padLeft = function(base, chr) {
    var len = String(base || 10).length - String(this).length + 1;
    return len > 0 ? new Array(len).join(chr || "0") + this : this;
  };

  function createBookmarkFile(bookmark) {
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
            tags: bookmark.categories.map(x => {
              return x["_"];
            })
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
        } else {
          console.log("Bookmark data saved.");
        }
      }
    );
  }
})();
