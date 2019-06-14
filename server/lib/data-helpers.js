"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {
    // Inserts new tweet onto the database
    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {
        db.collection("tweets").insertOne(newTweet);
        callback(null, true);
      });
    },
    // gets all tweets if there are no errors
    getTweets: function(callback) {
      db.collection("tweets").find({}).toArray((err, tweets) => {
        if (err) {
          return callback(err);
        };
        callback(null, tweets);
      });
    }
  };
}
