const express = require("express");
const multer = require("multer");

const router = express.Router();

const { Offer } = require("../../Models/Offer");

const imageStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "Offer_Image");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const uploadPic = multer(
  {
    storage: imageStorage,
    limits: {
      fileSize: 3000000
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error("Please upload an image"));
      }
      cb(undefined, true);
    }
  },
  (error, req, res, next) => {
    res.status(404).json({ statusCode: 404, message: error.message });
  }
);

router.put(
  "/addImage/:offerId",
  uploadPic.single("upload"),
  async (req, res) => {
    const offer = await Offer.findOneAndUpdate(
      { _id: req.params.offerId },
      { $set: { image: `https://bolivar1.herokuapp.com/${req.file.path}` } },
      { new: true }
    );

    res.status(200).json({ statusCode: 200, result: offer });
  }
);

module.exports = router;
