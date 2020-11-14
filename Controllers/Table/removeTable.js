const { Table } = require("../../Models/Table");

exports.removeTable = async function(req, res, next) {
  const table = await Table.findByIdAndRemove({ _id: req.params.tableId });

  res
    .status(200)
    .json({ statusCode: 200, message: `تم مسح الطرابيزة ${table.number}` });
};
