const userChallenges = require("express").Router();
const controller = require("../../controller/controller");

userChallenges.get("/getUserChallenges", (req, res) => {
  controller.getUserChallenge(result => res.send(result));
});

userChallenges.post("/moveUserChallenge", (req, res) => {
  controller.moveUserChallenge(req.body.challengeId, result =>
    res.send(result)
  );
});

userChallenges.post("/deleteUserChallenge", (req, res) => {
  controller.deleteUserChallenge(req.body.challengeId, result =>
    res.send(result)
  );
});

userChallenges.post("/createUserChallenge", (req, res) => {
  controller.createUserChallenge(
    { verb: req.body.verb, noun: req.body.noun },
    result => res.send(result)
  );
});

module.exports = userChallenges;
