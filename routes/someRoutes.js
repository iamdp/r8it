const router = require("express").Router();

router
  .all("/api")
  .get((req, res) => {
    res.send("home page");
  })
  .post((req, res) => {
    res.send("post route");
  });

module.exports = router;
