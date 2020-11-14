const { User } = require("../../Models/User");

exports.allCashiers = async function(req, res, next) {
  const cashier = await User.find({ role: "Cashier" }).select(
    "-password -username"
  );

  res.status(200).json({ statusCode: 200, result: cashier });
};
