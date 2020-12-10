const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");
const isAdmin = require("../Middleware/isAdmin");

const addOffer = require("../Controllers/Offer/addOffer");
const removeOffer = require("../Controllers/Offer/removeOffer");
const updateOffer = require("../Controllers/Offer/updateOffer");
const removeAll = require("../Controllers/Offer/removeAll");
const displayOffer = require("../Controllers/Offer/displayOffer");
const showOffer = require("../Controllers/Offer/showOffers");

router.post("/addOffer", auth, isAdmin, addOffer.addOffer);

router.delete("/removeOffer/:offerId", auth, isAdmin, removeOffer.removeOffer);

router.delete("/removeAll", auth, isAdmin, removeAll.removeAll);

router.put("/updateOffer/:offerId", auth, isAdmin, updateOffer.updateOffer);

router.get("/displayOffer/:offerId", auth, displayOffer.DisplayOffer);

router.get("/showOffer", auth, showOffer.showOffer);

module.exports = router;
