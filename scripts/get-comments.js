const axios = require('axios');
const qs = require('qs');
const { existsSync, writeFile } = require('fs');
const { resolve } = require('path');
const yaml = require('js-yaml');
const mkdirp = require('mkdirp');
require('dotenv').config();

/*
  Collect and stash comments for the build
*/
(async function() {
  const { data: comments } = await axios.get(
    'https://api.netlify.com/api/v1/forms/' +
      process.env.APPROVED_COMMENTS_FORM_ID +
      '/submissions/?',
    {
      params: {
        access_token: process.env.API_AUTH
      }
    }
  );
  comments.forEach(comment => createCommentFile(comment.data));

  function createCommentFile(comment) {
    if (!comment.timestamp) {
      let temp_timestamp = new Date().getTime();
      console.warn(
        'No timestamp for a comment, creating one: ' + temp_timestamp
      );
      comment.timestamp = temp_timestamp;
    }

    if (!comment.guid) {
      let temp_guid = (function guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return (
          s4() +
          s4() +
          '-' +
          s4() +
          '-' +
          s4() +
          '-' +
          s4() +
          '-' +
          s4() +
          s4() +
          s4()
        );
      })();
      console.warn('No guid for a comment, creating one: ' + temp_guid);
      comment.guid = temp_guid;
    }

    // Each comment is stored in a single file with a timestamp-based file path
    var comment_folder = resolve(
      __dirname,
      '../_data/comments/' + comment.slug + '/'
    );
    var comment_filename = 'comment-' + comment.timestamp + '.yml';
    var comment_path = resolve(comment_folder, comment_filename);

    // If the file does not exist, we create it.
    // Else, we do nothing. The comment has already been
    // saved and, maybe, altered. So we don't override the file.
    if (!existsSync(comment_path)) {
      mkdirp(comment_folder);
      writeFile(
        comment_path,
        yaml.safeDump(
          {
            _id: comment.guid,
            _parent: comment.origin,
            message: comment.message,
            name: comment.name,
            email: comment.email,
            replying_to: comment.replying_to,
            date: new Date(parseInt(comment.timestamp)).toISOString()
          },
          {
            styles: {
              '!!null': 'canonical' // dump null as ~
            },
            sortKeys: false // sort object keys
          }
        ),
        {
          flag: 'w'
        },
        function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log('Comment data saved.');
          }
        }
      );
    } else {
      console.log('Comment already existed. Doing nothing.');
    }
  }
})();
