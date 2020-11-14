const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isAdmin = require("../Middleware/isAdmin");

const addClient = require("../Controllers/Client/addClient");
const allClients = require("../Controllers/Client/allClients");
const showClient = require("../Controllers/Client/showClient");
const removeClient = require("../Controllers/Client/removeClient");
const removeAll = require("../Controllers/Client/removeAll");
const askForWaiter = require("../Controllers/Client/askForWaiter");
const askForCheck = require("../Controllers/Client/askForCheck");

router.post("/addClient", addClient.addClient);

router.get("/allClients", auth, isAdmin, allClients.allClients);

router.get("/showClient", auth, isAdmin, showClient.showClient);

router.put("/askForWaiter", auth, askForWaiter.askForWaiter);

router.put("/askForCheck", auth, askForCheck.askForCheck);

router.delete(
  "/removeClient/:clientId",
  auth,
  isAdmin,
  removeClient.removeClient
);

router.delete("/removeAll", auth, isAdmin, removeAll.removeAll);

module.exports = router;
