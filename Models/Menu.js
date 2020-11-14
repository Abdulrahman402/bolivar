const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menuSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    image: String,
    price: [],
    class: {
      type: Schema.Types.ObjectId,
      ref: "Class"
    }
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = {
  Menu
};
