const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isAdmin = require("../Middleware/isAdmin");

const addFeedback = require("../Controllers/Feedback/addFeedback");
const displayFeedback = require("../Controllers/Feedback/displayFeedback");
const showFeedback = require("../Controllers/Feedback/showFeedback");
const removeFeedback = require("../Controllers/Feedback/removeFeedback");
const removeAll = require("../Controllers/Feedback/removeAll");

router.post("/addFeedback", addFeedback.addFeedback);

router.get("/displayFeedback", auth, isAdmin, displayFeedback.displayFeedback);

router.get(
  "/showFeedback/:feedbackId",
  auth,
  isAdmin,
  showFeedback.showFeedback
);

router.delete(
  "/removeFeedback/:feedbackId",
  auth,
  isAdmin,
  removeFeedback.removeFeedback
);

router.delete("/removeAll", auth, isAdmin, removeAll.removeAll);

module.exports = router;
