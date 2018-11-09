const mongoose = require("mongoose");

// Challenge Verb Schema
const challengeVerbSchema = mongoose.Schema({
  verb: { type: String, required: true, trim: true },
  dateCreated: { type: Date, default: Date.now }
});

const ChallengeVerb = mongoose.model("ChallengeVerb", challengeVerbSchema);

// Challenge Noun Schema
const challengeNounSchema = mongoose.Schema({
  noun: { type: String, required: true, trim: true },
  dateCreated: { type: Date, default: Date.now }
});

const ChallengeNoun = mongoose.model("ChallengeNoun", challengeNounSchema);

module.exports = {
  ChallengeVerb,
  ChallengeNoun
};
