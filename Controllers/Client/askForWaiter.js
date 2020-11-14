const { Table } = require("../../Models/Table");

exports.askForWaiter = async function(req, res, next) {
  await Table.findOneAndUpdate(
    { _id: req.user._id },
    { $set: { status: "Waiter" } },
    { new: true }
  );
  res.status(200).json({ statusCode: 200, message: "تم طلب ويتر" });
};
