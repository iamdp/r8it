const path = require("path");
const router = require("express").Router();

//Sub-Routes
const establishedChallenges = require("./api/establishedChallenges");
const adminAudit = require("./api/adminAudit");
const posts = require("./api/posts");
const battle = require("./api/battle");

router.use("/api", adminAudit);
router.use("/api", establishedChallenges);
router.use("/api", posts);
router.use("/api", battle);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
