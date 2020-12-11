const mongoose = require("mongoose");

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

const Table = mongoose.model("Table", tableSchema);

module.exports = {
  Table
};
