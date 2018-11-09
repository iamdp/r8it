const router = require("express").Router();

const controller = require("../controller/controller");

router.get("/getRandomChallenge", (req, res) => {
  controller.getRandomChallenge(result => res.send(result));
});

router.post("/addChallengeVerb", (req, res) => {
  controller.addChallengeVerb(req.body.verb, result => res.send(result));
});

router.post("/addChallengeNoun", (req, res) => {
  controller.addChallengeNoun(req.body.noun, result => res.send(result));
});

module.exports = router;
