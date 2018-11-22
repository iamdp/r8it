const router = require("express").Router();

const controller = require("../controller/controller");

router.get("/getRandomChallenge", (req, res) => {
  controller.getRandomChallenge(result => res.send(result));
});

router.post("/addChallenge", (req, res) => {
  controller.addChallenge(
    { verb: req.body.userVerb, noun: req.body.userNoun },
    result => res.send(result)
  );
});

router.post("/establishChallenge", (req, res) => {
  controller.establishChallenge(req.body.id, result => res.send(result));
});

module.exports = router;
