var request     = require("request-promise-native");
var fs          = require('fs');
var path          = require('path');
var yaml        = require('js-yaml');
var mkdirp      = require('mkdirp');
require('dotenv').config();

/*
  Collect and stash comments for the build
*/
(async function () {


  // Set up our request with appropriate auth token and Form ID
  var url = "https://api.netlify.com/api/v1/forms/${process.env.APPROVED_COMMENTS_FORM_ID}/submissions/";

  var comments = await fetchComments();

  comments.forEach(comment => createCommentFile(comment.data));

  function fetchComments() {
    var options = {
      uri: 'https://api.netlify.com/api/v1/forms/' + process.env.APPROVED_COMMENTS_FORM_ID + '/submissions/',
      qs: {
          access_token: process.env.API_AUTH
      },
      json: true
    };

    return new request(options)
    .catch(function (err) {
        console.log(err);
    });
  }

  function createCommentFile(comment) {

    if(!comment.timestamp) {
      let temp_timestamp = new Date().getTime();
      console.warn("No timestamp for a comment, creating one: " + temp_timestamp);
      comment.timestamp = temp_timestamp;
    }

    if(!comment.guid) {
      let temp_guid = (function guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      })();
      console.warn("No guid for a comment, creating one: " + temp_guid);
      comment.guid = temp_guid;
    }

    // Each comment is stored in a single file with a timestamp-based file path
    var comment_folder = path.resolve(__dirname, "../_data/comments/" + comment.slug + "/");
    var comment_filename = "comment-" + comment.timestamp + ".yml";
    var comment_path = path.resolve(comment_folder, comment_filename);

    // If the file does not exist, we create it.
    // Else, we do nothing. The comment has already been
    // saved and, maybe, altered. So we don't override the file.
    if(!fs.existsSync(comment_path)) {
      mkdirp(comment_folder);
      fs.writeFile(
        comment_path,
        yaml.safeDump(
          {
            "_id": comment.guid,
            "_parent": comment.origin,
            "message": comment.message,
            "name": comment.name,
            "email": comment.email,
            "replying_to": comment.replying_to,
            "date": new Date(parseInt(comment.timestamp)).toISOString()

          }, {
          'styles': {
            '!!null': 'canonical' // dump null as ~
          },
          'sortKeys': false        // sort object keys
        }),
        {
          flag: 'w'
        },
        function(err) {
          if(err) {
            console.log(err);
          } else {
            console.log("Comment data saved.");
          }
        }
      );
    } else {
      console.log("Comment already existed. Doing nothing.");
    }
  }










  //   , function(err, response, body){
  //     if(!err && response.statusCode === 200){

  //     var content;
  //     // First I want to read the file
  //     fs.readFile('../comments.json', function read(err, data) {
  //         if (err) {
  //             throw err;
  //         }
  //         content = data;

  //         // Invoke the next step here however you like
  //         console.log(content);   // Put all of the code here (not the best solution)
  //         processComments(comments);          // Or put the next step in a function and invoke it
  //     });


  //       var body = JSON.parse(body);
  //       var comments = {};

  //       // massage the data into the shape we want,
  //       // and add a gravatar URL if possible
  //       for(var item in body){
  //         var data = body[item].data;

  //         var comment = {
  //           name: data.name,
  //           comment: "\n" + data.comment.trim(), // add a newline before the markdown so that 11ty can spot the markdown and interpret it.
  //           date: body[item].created_at
  //         };

  //         // Add it to an existing array or create a new one
  //         if(comments[data.path]){
  //           comments[data.path].push(comment);
  //         } else {
  //           comments[data.path] = [comment];
  //         }
  //       }

  //       // write our data to a file where our site generator can get it.
  //       fs.writeFile(buildSrc + "/site/_data/comments.json", JSON.stringify(comments, null, 2), function(err) {
  //         if(err) {
  //           console.log(err);
  //           done();
  //         } else {
  //           console.log("Comments data saved.");
  //           done();
  //         }
  //       });

  //     } else {
  //       console.log("Couldn't get comments from Netlify");
  //       done();
  //     }
  //   });


  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve(x);
  //     }, 2000);
  //   });
  // }

  // // Go and get the data from Netlify's submissions API
  // request(url, function(err, response, body){
  //   if(!err && response.statusCode === 200){

  //   var content;
  //   // First I want to read the file
  //   fs.readFile('../comments.json', function read(err, data) {
  //       if (err) {
  //           throw err;
  //       }
  //       content = data;

  //       // Invoke the next step here however you like
  //       console.log(content);   // Put all of the code here (not the best solution)
  //       processComments(comments);          // Or put the next step in a function and invoke it
  //   });


  //     var body = JSON.parse(body);
  //     var comments = {};

  //     // massage the data into the shape we want,
  //     // and add a gravatar URL if possible
  //     for(var item in body){
  //       var data = body[item].data;

  //       var comment = {
  //         name: data.name,
  //         comment: "\n" + data.comment.trim(), // add a newline before the markdown so that 11ty can spot the markdown and interpret it.
  //         date: body[item].created_at
  //       };

  //       // Add it to an existing array or create a new one
  //       if(comments[data.path]){
  //         comments[data.path].push(comment);
  //       } else {
  //         comments[data.path] = [comment];
  //       }
  //     }

  //     // write our data to a file where our site generator can get it.
  //     fs.writeFile(buildSrc + "/site/_data/comments.json", JSON.stringify(comments, null, 2), function(err) {
  //       if(err) {
  //         console.log(err);
  //         done();
  //       } else {
  //         console.log("Comments data saved.");
  //         done();
  //       }
  //     });

  //   } else {
  //     console.log("Couldn't get comments from Netlify");
  //     done();
  //   }
  // });
})();
