const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const user = require("../Routes/user");
const clas = require("../Routes/class");
const menu = require("../Routes/menu");
const table = require("../Routes/table");
const offer = require("../Routes/offer");
const feedback = require("../Routes/feedback");
const client = require("../Routes/client");
const mealImage = require("../Controllers/Menu/addImage");
const classImage = require("../Controllers/Class/addImage");
const offerImage = require("../Controllers/Offer/addImage");

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(compression());
  app.use("/Menu_Image", express.static("Menu_Image"));
  app.use("/Class_Image", express.static("Class_Image"));
  app.use("/Offer_Image", express.static("Offer_Image"));
  app.use("/api/user", user);
  app.use("/api/class", clas);
  app.use("/api/menu", menu);
  app.use("/api/table", table);
  app.use("/api/offer", offer);
  app.use("/api/feedback", feedback);
  app.use("/api/client", client);
  app.use("/api/menu", mealImage);
  app.use("/api/class", classImage);
  app.use("/api/offer", offerImage);
};
