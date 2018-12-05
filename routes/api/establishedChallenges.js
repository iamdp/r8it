const establishedChallenges = require("express").Router();
const controller = require("../../controller/controller");

//Need to rename this route
establishedChallenges.get("/getCategories", (req, res) => {
  controller.getCategories(result => res.send(result));
});

module.exports = establishedChallenges;
