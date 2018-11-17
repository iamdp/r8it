const mongoose = require("mongoose");

const randomChallengeSchema = mongoose.Schema({
  verb: { type: String, required: true, trim: true },
  noun: { type: String, required: true, trim: true },
  dateCreated: { type: Date, default: Date.now }
});

const RandomChallenge = mongoose.model(
  "RandomChallenge",
  randomChallengeSchema
);

// Challenge Schema
const challengeSchema = mongoose.Schema({
  verb: { type: String, required: true, trim: true, lowercase: true },
  noun: { type: String, required: true, trim: true, lowercase: true },
  dateCreated: { type: Date, default: Date.now }
});

const Challenge = mongoose.model("Challenge", challengeSchema);

module.exports = { RandomChallenge, Challenge };