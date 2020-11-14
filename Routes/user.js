const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isAdmin = require("../Middleware/isAdmin");

const addAdmin = require("../Controllers/User/addAdmin");
const logIn = require("../Controllers/User/logIn");
const allAdmins = require("../Controllers/User/allAdmins");
const allCashiers = require("../Controllers/User/allCashiers");
const myProfile = require("../Controllers/User/myProfile");
const changeCashierInfo = require("../Controllers/User/changeCashierInfo");
const changeInfo = require("../Controllers/User/changeInfo");

router.post("/addAdmin", auth, isAdmin, addAdmin.addAdmin);

router.post("/logIn", logIn.logIn);

router.get("/allAdmins", auth, isAdmin, allAdmins.allAdmins);

router.get("/allCashiers", auth, isAdmin, allCashiers.allCashiers);

router.get("/myProfile", auth, myProfile.myProfile);

router.put(
  "/changeCashierInfo",
  auth,
  isAdmin,
  changeCashierInfo.changeCashierInfo
);

router.put("/changeInfo", auth, changeInfo.changeInfo);

module.exports = router;
