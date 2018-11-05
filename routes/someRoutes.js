const router = require("express").Router();

const controller = require("../controller/controller");

router.get("getComparables", (req, res) => {
  controller.getComparables(result => res.send(result));
});

module.exports = router;
