const { User } = require("../../Models/User");

exports.deleteUser = async function(req, res, next) {
  await User.findOneAndRemove({ _id: req.params.userId });

  res.status(200).json({ statusCode: 200, result: "User Deleted" });
};
