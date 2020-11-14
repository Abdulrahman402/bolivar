const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const classSchema = new Schema(
  {
    arabicName: {
      type: String,
      required: true
    },
    englishName: {
      type: String,
      required: true
    },
    image: String,
    meals: [
      {
        type: Schema.Types.ObjectId,
        ref: "Menu"
      }
    ]
  },
  { timestamps: true }
);

const Class = mongoose.model("Class", classSchema);

module.exports = {
  Class
};
