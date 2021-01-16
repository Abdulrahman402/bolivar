const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isAdmin = require("../Middleware/isAdmin");

const addClass = require("../Controllers/Class/addClass");
const showClass = require("../Controllers/Class/showClass");
const updateName = require("../Controllers/Class/updateName");
const removeClass = require("../Controllers/Class/removeClass");
const displayClasses = require("../Controllers/Class/displayClasses");
const classSearch = require("../Controllers/Class/classSearch");

router.post("/addClass", auth, isAdmin, addClass.addClass);

router.put("/updateName/:classId", auth, isAdmin, updateName.updateName);

router.get("/showClass/:englishName", auth, showClass.showClass);

router.get("/displayClasses", auth, displayClasses.displayClasses);

router.get("/classSearch", auth, classSearch.classSearch);

router.delete("/removeClass/:classId", auth, isAdmin, removeClass.removeClass);

module.exports = router;
