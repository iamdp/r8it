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

module.exports = RandomChallenge;
