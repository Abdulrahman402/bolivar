const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const keys = require("../Config/keys");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    username: {
      type: String,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      enum: ["Admin", "Cashier"]
    }
  },
  { timestamps: true }
);

userSchema.methods.generateAuthToken = async function() {
  const token = jwt.sign(
    { _id: this._id, role: this.role },
    keys.tokenSecretKey
  );

  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = {
  User
};
