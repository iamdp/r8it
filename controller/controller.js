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

const queries = {
  queryPost: function() {
    db.Post.find({})
      .populate("userId")
      .exec((err, docs) => console.log(docs));
  },

  queryRating: function() {
    db.Rating.find()
      .gte("dateCreated", new Date(2017, 01, 01))
      .populate({ path: "pickedPostId", select: "title" })
      .exec((err, docs) => console.log(docs));
  },

  queryRating2: function() {
    db.Rating.find()
      .gte("dateCreated", new Date(2017, 01, 01))
      .populate("title")
      .exec((err, docs) => console.log(docs));
  },

  getPosts: function() {
    db.Post.find()
      .limit(2)
      .sort("-eloRank")
      .exec((err, posts) => {
        console.log(posts);
      });
  },

  getCloudinaryUrl: function(cloudinaryRef) {
    return cloudinary.url(
      cloudinaryRef,
      config.cloudinary.standardTransformation
    );
  },

  getComparables: function(cb) {
    let random;
    db.Challenge.countDocuments().exec(function(err, count) {
      random = Math.floor(Math.random() * (count - 2)) + 0;

      db.Challenge.findOne()
        .skip(random)
        .exec(function(err, challenge) {
          db.Post.countDocuments().exec(function(err, count) {
            random = Math.floor(Math.random() * (count - 2)) + 0;

            db.Post.find()
              .skip(random)
              .limit(2)
              .exec(async function(err, posts) {
                cb({ challenge, posts });
              });
          });
        });
    });
  }
};

queries.getComparables(result => console.log(result));
