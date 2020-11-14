const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isAdmin = require("../Middleware/isAdmin");
const isCashier = require("../Middleware/isCashier");

const addTable = require("../Controllers/Table/addTable");
const updateNumber = require("../Controllers/Table/updateNumber");
const deactivateTable = require("../Controllers/Table/deactivateTable");
const showTable = require("../Controllers/Table/showTable");
const displayTables = require("../Controllers/Table/displayTables");
const tableLogin = require("../Controllers/Table/tableLogin");
const removeTable = require("../Controllers/Table/removeTable");
const removeAll = require("../Controllers/Table/removeAll");
const goOnline = require("../Controllers/Table/goOnline");

router.post("/addTable", auth, isAdmin, addTable.addTable);

router.put("/updateNumber/:tableId", auth, isAdmin, updateNumber.updateNumber);

router.put(
  "/deactivateTable/:tableId",
  auth,
  isAdmin || isCashier,
  deactivateTable.deactivateTable
);

router.put("/goOnline/:tableId", auth, isAdmin || isCashier, goOnline.goOnline);

router.get(
  "/showTable/:tableId",
  auth,
  isAdmin || isCashier,
  showTable.showTable
);

router.get(
  "/displayTables",
  auth,
  isAdmin || isCashier,
  displayTables.displayTables
);

router.put("/tableLogin/:tableId", tableLogin.tableLogin);

router.delete("/removeTable/:tableId", auth, isAdmin, removeTable.removeTable);

router.delete("/removeAll", auth, isAdmin, removeAll.removeAll);

module.exports = router;
