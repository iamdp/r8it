const mongoose = require("mongoose");
const db = require("../models/models");

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
  }
};

queries.getPosts();
