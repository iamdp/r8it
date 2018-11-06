const mongoose = require("mongoose");
const db = require("../models/models");

const cloudinary = require("cloudinary");
const config = require("../config.json");

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret
});

mongoose.connect(
  "mongodb://localhost:27017/r8it",
  { useNewUrlParser: true }
);

module.exports = {
  getPosts: function(cb) {
    db.Post.find()
      .limit(20)
      .sort("-eloRank")
      .exec((err, posts) => {
        cb(posts);
      });
  },

  getCloudinaryUrl: function(cloudinaryRef) {
    return cloudinary.url(
      cloudinaryRef,
      config.cloudinary.standardTransformation
    );
  },

  // ******* START: Challenge Functionality *******
  getComparables: function(cb) {
    let random;

    // Figure out how many # of challenges there are.
    db.Challenge.countDocuments().exec(function(err, count) {
      // Generate a random number to pick a random valid challenge.
      random = Math.floor(Math.random() * count);

      // Use the random # to pick a random challenge
      db.Challenge.findOne()
        .skip(random)
        .exec(function(err, challenge) {
          // Using the challenge specified above, find two random posts

          // DB Currently does not have sufficient data to reliably server two posts in the same challenge, increase data, then run.
          db.Post.find({ challengeId: challenge._id })
            //db.Post.find()
            .countDocuments()
            .exec(function(err, count) {
              random = Math.floor(Math.random() * (count - 2));

              db.Post.find({ challengeId: challenge._id })
                .skip(random)
                .limit(2)
                .exec(function(err, posts) {
                  cb({
                    challenge,
                    posts
                  });
                });
            });
        });
    });
  },

  saveResult: function(result, cb) {
    db.Post.findByIdAndUpdate(result.pickedPostId, {
      $inc: { eloRank: 1 }
    }).exec((err, res) => {
      console.log(err, res);
    });

    new db.Rating(result).save();
    cb({ result });
  }
  // ******* START: Challenge Functionality *******
};
