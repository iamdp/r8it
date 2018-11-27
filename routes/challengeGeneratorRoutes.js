const router = require("express").Router();
const controller = require("../controller/controller");

router.get("/getRandomChallenge", (req, res) => {
  controller.getRandomChallenge(result => res.send(result));
});

router.post("/addChallenge", (req, res) => {
  controller.addChallenge(
    { verb: req.body.verb, noun: req.body.noun },
    result => res.send(result)
  );
});

router.post("/establishChallenge", (req, res) => {
  controller.establishChallenge(req.body.id, result => res.send(result));
});

router.get("/getUserChallenges", (req, res) => {
  controller.getUserChallenge(result => res.send(result));
});

router.post("/moveUserChallenge", (req, res) => {
  controller.moveUserChallenge(req.body.challengeId, result =>
    res.send(result)
  );
});

router.post("/deleteUserChallenge", (req, res) => {
  controller.deleteUserChallenge(req.body.challengeId, result =>
    res.send(result)
  );
});

router.post("/createUserChallenge", (req, res) => {
  controller.createUserChallenge(
    { verb: req.body.verb, noun: req.body.noun },
    result => res.send(result)
  );
});

module.exports = router;
