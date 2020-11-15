const { Table } = require("../../Models/Table");

exports.removeTable = async function(req, res, next) {
  await Table.findByIdAndRemove({ _id: req.params.tableId });

  res.status(200).json({ statusCode: 200, message: `تم مسح الطرابيزة` });
};
