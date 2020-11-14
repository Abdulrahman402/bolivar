const { User } = require("../../Models/User");

exports.myProfile = async function(req, res, next) {
  const user = await User.findOne({ _id: req.user._id }).select(
    "-password -username"
  );
  res.status(200).json({ statusCode: 200, result: user });
};
