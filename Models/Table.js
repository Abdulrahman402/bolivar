const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const keys = require("../Config/keys");

const Schema = mongoose.Schema;

const tableSchema = new Schema(
  {
    number: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ["Online", "Offline", "Waiter", "Check"],
      default: "Offline"
    }
  },
  { timestamps: true }
);

tableSchema.methods.generateAuthToken = async function() {
  const token = jwt.sign(
    { _id: this._id, number: this.number },
    keys.tokenSecretKey
  );

  return token;
};

const Table = mongoose.model("Table", tableSchema);

module.exports = {
  Table
};
