const { Table } = require("../../Models/Table");

exports.askForCheck = async function(req, res, next) {
  await Table.findOneAndUpdate(
    { _id: req.user._id },
    { $set: { status: "Check" } },
    { new: true }
  );
  res.status(200).json({ statusCode: 200, message: "تم طلب الشيك" });
};
