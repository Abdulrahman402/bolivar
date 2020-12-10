const express = require("express");
const multer = require("multer");

const router = express.Router();

const { Class } = require("../../Models/Class");

const imageStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "Class_Image");
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
    res
      .status(400)
      .json({ statusCode: 400, message: error.details[0].message });
  }
);

router.put(
  "/addImage/:classId",
  uploadPic.single("upload"),
  async (req, res) => {
    const clas = await Class.findOneAndUpdate(
      { _id: req.params.classId },
      { $set: { image: `https://bolivar1.herokuapp.com/${req.file.path}` } },
      { new: true }
    );

    res.status(200).json({ statusCode: 200, result: clas });
  }
);

module.exports = router;
