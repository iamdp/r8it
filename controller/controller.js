const mongoose = require("mongoose");
const db = require("../models/models");

db.Challenge({ verb: "furriest", noun: "dog" }).save();
