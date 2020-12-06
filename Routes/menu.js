const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isAdmin = require("../Middleware/isAdmin");

const addMeal = require("../Controllers/Menu/addMeal");
const removeMeal = require("../Controllers/Menu/removeMeal");
const updateMeal = require("../Controllers/Menu/updateMeal");
const removeAll = require("../Controllers/Menu/removeAll");
const mealSearch = require("../Controllers/Menu/mealSearch");

router.post("/addMeal/:classId", auth, isAdmin, addMeal.addMeal);

router.put(
  "/removeMeal/:classId/:mealId",
  auth,
  isAdmin,
  removeMeal.removeMeal
);

router.put("/updateMeal/:mealId", auth, isAdmin, updateMeal.updateMeal);

router.get("/mealSearch", auth, mealSearch.mealsSearch);

router.delete("/removeAll", auth, isAdmin, removeAll.removeAll);

module.exports = router;
