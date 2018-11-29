const mongoose = require("mongoose");

// User Schema
const userSchema = mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  dateCreated: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

// Post Schema
const postSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  desc: { type: String, required: true, trim: true },
  eloRank: { type: Number, default: 1500 },
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
  challenger: { type: mongoose.Types.ObjectId, ref: "Post", required: true },
  challengee: {
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
  Post,
  Rating
};
