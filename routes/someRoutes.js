const router = require("express").Router();

router
  .all("/api")
  .getComparables((req, res) => {
    res.send({
      subID: "submissionID",
      imageName: "imageURL",
      title: "imagetitle",
      description: "imageDescription",
      author: "imageAuthor"
    });
  })
  .post((req, res) => {
    res.send("post route");
  });

module.exports = router;
