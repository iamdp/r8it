const mongoose = require("mongoose");
const db = require("../models/models");

mongoose.connect(
  "mongodb://localhost:27017/r8it",
  { useNewUrlParser: true }
);

const queries = {
  seedChallenge: function() {
    new db.Challenge({ verb: "loudest", noun: "jacket" })
      .save()
      .then(() => mongoose.disconnect());
  },

  seedUser: function() {
    new db.User({
      firstName: "David",
      lastName: "Pham",
      email: "email@davidpham.ca"
    })
      .save()
      .then(() => mongoose.disconnect());
  },

  seedPost: function() {
    new db.Post({
      title: "Meet Rags!",
      desc: "My son Jadyen and Rags in the snow.",
      eloRank: 1200,
      cloudinaryRef:
        "little-kids-big-dogs-friendship-photography-andy-seliverstoff-2",
      challengeId: "5bde84da7b201f1c6c8a3983",
      userId: "5bde86950f837d2d88846725"
    })
      .save()
      .then(() => mongoose.disconnect());
  },

  seedRating: function() {
    new db.Rating({
      pickedPostId: "5bdef8ad6a8ec03e5cd1a1e3",
      unpickedPostId: "5bdef8d08c3a870f1445d248",
      userId: "5bde86950f837d2d88846725"
    })
      .save()
      .then(() => mongoose.disconnect());
  },

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
  }
};

queries.queryPost();
queries.queryRating();
queries.queryRating2();
