'use strict';

var request = require("request");

// populate environment variables locally.
require('dotenv').config()


/*
  Our serverless function handler
*/
export function handler(event, context, callback) {

  // get the arguments from the notification
  var body = JSON.parse(event.body);

  // prepare call to the Slack API
  var slackURL = process.env.SLACK_WEBHOOK_URL
  var slackPayload = {
    "text": "New comment on " + process.env.URL,
    "attachments": [
      {
        "fallback": "New comment on the comment example site",
        "color": "#444",
        "author_name": body.data.email,
        "title": body.data.slug,
        "title_link": body.data.origin,
        "text": body.data.message
      },
      {
        "fallback": "Manage comments on " + process.env.URL,
        "callback_id": "comment-action",
        "actions": [
          {
            "type": "button",
            "text": "Approve comment",
            "name": "approve",
            "value": body.id
          },
          {
            "type": "button",
            "style": "danger",
            "text": "Delete comment",
            "name": "delete",
            "value": body.id
          }
        ]
      }]
    };

    // post the notification to Slack
    request.post({url:slackURL, json: slackPayload}, function(err, httpResponse, body) {
      var msg;
      if (err) {
        msg = 'Post to Slack failed:' + err;
      } else {
        msg = 'Post to Slack successful!  Server responded with:' + body;
      }
      callback(null, {
        statusCode: 200,
        body: msg
      })
      return console.log(msg);
    });

}
