const creatingChallenges = require("express").Router();
const controller = require("../../controller/controller");

creatingChallenges.get("/getRandomChallenge", (req, res) => {
  controller.getRandomChallenge(result => res.send(result));
});

creatingChallenges.post("/addChallenge", (req, res) => {
  controller.addChallenge(
    { verb: req.body.verb, noun: req.body.noun },
    result => res.send(result)
  );
});

creatingChallenges.post("/establishChallenge", (req, res) => {
  controller.establishChallenge(req.body.id, result => res.send(result));
});

module.exports = creatingChallenges;
