const posts = require("express").Router();

const controller = require("../../controller/controller");

posts.get("/getPosts/:period?", (req, res) => {
  /* Valid periods include 
    '24 Hours', 'Last Week', 'Last Month', 'Last Year'
  */
  controller.getPosts(req.params.period, response => res.send(response));
});

posts.get("/getPost/:postId", (req, res) => {
  controller.getPost(req.params.postId, response => res.send(response));
});

posts.post("/submitPost", (req, res) => {
  //Destucturing req.body
  const {
    title,
    description: desc,
    cloudinaryRef,
    challengeId,
    userId
  } = req.body;

  controller.submitPost(
    {
      title,
      desc,
      cloudinaryRef,
      challengeId,
      userId
    },
    result => {
      res.send(result);
    }
  );
});

module.exports = posts;
