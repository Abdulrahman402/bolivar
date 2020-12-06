const { User } = require("../../Models/User");

exports.allUsers = async function(req, res, next) {
  const admin = await User.find().select();

  res.status(200).json({ statusCode: 200, result: admin });
};
