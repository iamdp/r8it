const mongoose = require("mongoose");
const db = require("../models/models");
const dbChallengeGenerator = require("../models/challengeGenerator");

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
  getCategories: function(cb) {
    db.Challenge.find().exec((err, posts) => {
      cb(posts);
    });
  },

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

  // ******* Challenge Functionality *******
  getComparables: function(cb) {
    // Pick a random challenge, pick 2 random posts from that challenge category then return the results
    db.Challenge.aggregate([{ $sample: { size: 1 } }]).then(challenges => {
      db.Post.aggregate([
        { $match: { challengeId: challenges[0]._id } },
        { $sample: { size: 2 } }
      ]).then(posts => {
        // Creating a property on the post object that adds the cloudinary url
        posts.forEach(post => {
          post.cloudinaryUrl = getCloudinaryUrl(post.cloudinaryRef);
        });
        cb({ challenge: challenges[0], posts });
      });
    });
  },

  saveResult: function(result, cb) {
    // Update winning post
    db.Post.findByIdAndUpdate(result.challenger, {
      $inc: { eloRank: 1 }
    }).exec((err, res) => {
      if (err) console.log(err);

      // Update losing post
      db.Post.findByIdAndUpdate(result.challengee, {
        $inc: { eloRank: -1 }
      }).exec((err, res) => {
        if (err) console.log(err);
      });
    });

    new db.Rating(result).save();
    cb({ result });
  },
  // ******* Challenge Functionality *******

  // ******* Challenge Generator *******
  addChallengeNoun: function(noun, cb) {
    new dbChallengeGenerator.ChallengeNoun({ noun }).save().then(result => {
      cb(result);
    });
  },

  addChallengeVerb: function(verb, cb) {
    new dbChallengeGenerator.ChallengeVerb({ verb }).save().then(result => {
      cb(result);
    });
  },

  getRandomChallenge: function(cb) {
    console.log("here1");
    dbChallengeGenerator.ChallengeNoun.aggregate([
      { $sample: { size: 1 } }
    ]).then(noun => {
      console.log("here2");
      dbChallengeGenerator.ChallengeVerb.aggregate([
        { $sample: { size: 1 } }
      ]).then(verb => {
        console.log("here3");
        cb({ noun: noun[0].noun, verb: verb[0].verb });
      });
    });
  }
  // ******* Challenge Generator *******
};
