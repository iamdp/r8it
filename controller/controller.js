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
  process.env.MONGODB_URI || "mongodb://localhost:27017/r8it",
  { useNewUrlParser: true }
);

function getCloudinaryUrl(cloudinaryRef) {
  return cloudinary.url(
    cloudinaryRef,
    config.cloudinary.standardTransformation
  );
}

module.exports = {
  getPosts: function(cb) {
    db.Post.find()
      .limit(20)
      .sort("-eloRank")
      .exec((err, posts) => {
        cb(posts);
      });
  },

  // ******* Challenge Functionality *******
  getComparables: function(cb) {
    // Pick a random challenge, pick 2 random posts from that challenge category then return the results
    db.Challenge.aggregate([{ $sample: { size: 1 } }]).then(challenges => {
      db.Post.aggregate([
        { $match: { challengeId: challenges[0]._id } },
        { $sample: { size: 2 } }
      ]).then(posts => {
        console.log(challenges[0], posts);
        // Creating a property on the post object that adds the cloudinary url
        posts.forEach(post => {
          post.cloudinaryUrl = getCloudinaryUrl(post.cloudinaryRef);
        });
        cb({ challenge: challenges[0], posts });
      });
    });
  },

  saveResult: function(result, cb) {
    // Increments picked post eloRank by +1
    db.Post.findByIdAndUpdate(result.challenger, {
      $inc: { eloRank: 1 }
    }).exec((err, res) => {
      console.log(err, res);
    });

    new db.Rating(result).save();
    cb({ result });

    // Decrements unpicked post eloRank by 01
    db.Post.findByIdAndUpdate(result.challengee, {
      $inc: { eloRank: -1 }
    }).exec((err, res) => {
      console.log(err, res);
    });

    new db.Rating(result).save();
    cb({ result });
  }
  // ******* Challenge Functionality *******
};
