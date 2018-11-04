const mongoose = require("mongoose");
const db = require("../models/models");

mongoose.connect(
  "mongodb://localhost:27017/r8it",
  { useNewUrlParser: true }
);

async function Seed() {
  /* 
    // Challenge Seed
    await new db.Challenge({ verb: "loudest", noun: "jacket" }).save().then(() => {
    mongoose.disconnect();
    }); 
    */

  /* 
    // User Seed
    new db.User({
    firstName: "David",
    lastName: "Pham",
    email: "email@davidpham.ca"
    })
    .save()
    .then(() => mongoose.disconnect());
    */

  // Post Seed
  new db.Post({
    title: "Meet Rags!",
    desc: "My son Jadyen and Rags in the snow.",
    eloRank: "1200",
    cloudinaryRef:
      "little-kids-big-dogs-friendship-photography-andy-seliverstoff-2",
    challengeId: "5bde84da7b201f1c6c8a3983",
    userId: "5bde86950f837d2d88846725"
  }).save();
}
