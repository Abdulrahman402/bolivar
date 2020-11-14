const { User } = require("../../Models/User");

exports.allAdmins = async function(req, res, next) {
  const admin = await User.find({ role: "Admin" }).select(
    "-password -username"
  );

  res.status(200).json({ statusCode: 200, result: admin });
};
