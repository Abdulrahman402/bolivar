require("express-async-errors");
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const path = require("path");
const winston = require("winston");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicPath = path.join(__dirname, "./Public");

require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT || 1000;

const server2 = server.listen(port, () => {
  winston.info(`Listening on port ${port}`);
});

io.on("connection", socket => {
  console.log("New connection");
  socket.on("Test", data => {
    console.log(data);
  });
});

app.use(express.static(publicPath));

module.exports = {
  server2
};
