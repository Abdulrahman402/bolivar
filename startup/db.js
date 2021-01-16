const winston = require("winston");
const mongoose = require("mongoose");

const keys = require("../Config/keys");

module.exports = function() {
  mongoose
    .connect(keys.mongoURI)
    .then(() => winston.info("Connected to Lamera Database"))
    .catch(err => console.log("Error while connecting DB", err));
};
