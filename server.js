const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4000;
const app = express();
const bodyParser = require("body-parser");

const someRoutes = require("./routes/someRoutes");
const challengeGeneratorRoutes = require("./routes/challengeGeneratorRoutes");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Routes
app.use("/api", someRoutes);
app.use("/api", challengeGeneratorRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
