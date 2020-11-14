require("express-async-errors");
const express = require("express");
const winston = require("winston");

const app = express();

require("./startup/db")();
require("./startup/routes")(app);

app.get("/", async (req, res) => {
  res.send("Hello");
  console.log("Hi");
});

const port = process.env.PORT || 1000;

const server = app.listen(port, () => {
  winston.info(`Listening on port ${port}`);
});

module.exports = server;
