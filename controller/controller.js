const mongoose = require("mongoose");
const db = require("../models/models");
const dbChallenge = require("../models/challenge-models");
const moment = require("moment");

const cloudinary = require("cloudinary");
const config = require("../config.json");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
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
    dbChallenge.Challenge.find().exec((err, posts) => {
      cb(posts);
    });
  },

  getPosts: function(period, cb) {
    let query = {};

    if (period) {
      let calculatedPeriod;

      switch (period) {
        case "24 Hours":
          calculatedPeriod = moment().subtract(1, "days");
          break;
        case "Last Week":
          calculatedPeriod = moment().subtract(1, "weeks");
          break;
        case "Last Month":
          calculatedPeriod = moment().subtract(1, "months");
          break;
        case "Last Year":
          calculatedPeriod = moment().subtract(1, "years");
          break;
        default:
          calculatedPeriod = moment().subtract(1, "years");
          break;
      }
      query = {
        dateCreated: {
          $gte: calculatedPeriod.toISOString()
        }
      };
    }

    db.Post.find(query)
      .limit(20)
      .sort("-eloRank")
      .exec((err, posts) => {
        cb(posts);
      });
  },

  getPost: function(postId, cb) {
    db.Post.findById(postId).exec((err, post) => {
      cb(post);
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
    dbChallenge.Challenge.aggregate([{ $sample: { size: 1 } }]).then(
      challenges => {
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
      }
    );
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
  addChallenge: function(challenge, cb) {
    new dbChallenge.RandomChallenge({
      verb: challenge.verb,
      noun: challenge.noun
    }).save((err, result) => {
      if (err) console.log(err);
      cb(result);
    });
  },

  getRandomChallenge: function(cb) {
    dbChallenge.RandomChallenge.aggregate([{ $sample: { size: 1 } }])
      .then(challenge => {
        cb({
          noun: challenge[0].noun,
          verb: challenge[0].verb,
          id: challenge[0]._id
        });
      })
      .catch(err => console.log(err));
  },
  
  establishChallenge: function(challenge, cb) {
    dbChallenge.RandomChallenge.findByIdAndDelete(challenge, (err, res) => {
      if (err) console.log(err);
      const { verb, noun } = res;
      new dbChallenge.Challenge({ verb, noun }).save((err, result) => {
        if (err) console.log(err);
        cb(result);
      });
    });
  },
  // ******* Challenge Generator *******
  
  submitPost: (postData, cb) => {
    db.Post.create(postData, (err, res) => {
      if (err) return handleError(err);
      console.log(res);
      cb(result);
    });
  }
};
