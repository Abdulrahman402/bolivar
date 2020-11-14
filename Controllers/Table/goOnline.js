const { Table } = require("../../Models/Table");

exports.goOnline = async function(req, res, next) {
  const table = await Table.findOneAndUpdate(
    { _id: req.params.tableId },
    { $set: { status: "Online" } },
    { new: true }
  );
  res.status(200).json({ statusCode: 200, result: table });
};
