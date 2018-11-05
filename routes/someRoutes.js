const router = require("express").Router();

const controller = require("../controller/controller");

router.get("/getComparables", (req, res) => {
  controller.getComparables(result => res.send(result));
});

router.post("/saveResult", (req, res) => {
  controller.saveResult(
    {
      pickedPostId: req.body.pickedPostId,
      unpickedPostId: req.body.unpickedPostId,
      userId: req.body.userId
    },
    result => {
      res.send(result);
    }
  );
});

module.exports = router;
