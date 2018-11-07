const mongoose = require("mongoose");

// User Schema
const userSchema = mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  dateCreated: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

// Challenge Schema
const challengeSchema = mongoose.Schema({
  verb: { type: String, required: true, trim: true, lowercase: true },
  noun: { type: String, required: true, trim: true, lowercase: true },
  dateCreated: { type: Date, default: Date.now }
});

const Challenge = mongoose.model("Challenge", challengeSchema);

// Post Schema
const postSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  desc: { type: String, required: true, trim: true },
  eloRank: { type: Number, required: true, default: 32 },
  cloudinaryRef: { type: String, required: true },
  challengeId: {
    type: mongoose.Types.ObjectId,
    ref: "Challenge",
    required: true
  },
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  dateCreated: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

// Rating Schema
const ratingSchema = mongoose.Schema({
  pickedPostId: { type: mongoose.Types.ObjectId, ref: "Post", required: true },
  unpickedPostId: {
    type: mongoose.Types.ObjectId,
    ref: "Post",
    required: true
  },
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  dateCreated: { type: Date, default: Date.now }
});

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = {
  User,
  Challenge,
  Post,
  Rating
};
