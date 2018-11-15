const router = require("express").Router();

const controller = require("../controller/controller");

router.get("/getCategories", (req, res) => {
  controller.getCategories(result => res.send(result));
});

router.get("/getPosts/:period?", (req, res) => {
  /* Valid periods include 
    '24 Hours', 'Last Week', 'Last Month', 'Last Year'
  */
  controller.getPosts(req.params.period, response => res.send(response));
});

router.get("/getPost/:postId", (req, res) => {
  controller.getPost(req.params.postId, response => res.send(response));
});

router.get("/getComparables", (req, res) => {
  controller.getComparables(result => res.send(result));
});

router.post("/saveResult", (req, res) => {
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

module.exports = router;
