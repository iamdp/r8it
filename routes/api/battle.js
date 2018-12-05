const battle = require("express").Router();
const controller = require("../../controller/controller");
battle.get("/getComparables", (req, res) => {
  controller.getComparables(result => res.send(result));
});

battle.post("/saveResult", (req, res) => {
  controller.saveResult(
    {
      challenger: req.body.challenger,
      challengee: req.body.challengee,
      userId: req.body.userId
    },
    result => {
      res.send(result);
    }
  );
});

module.exports = battle;
