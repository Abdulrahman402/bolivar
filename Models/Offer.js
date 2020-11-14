const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const offerSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    image: String,
    oldPrice: [],
    newPrice: []
  },
  { timestamps: true }
);

const Offer = mongoose.model("Offer", offerSchema);

module.exports = {
  Offer
};
