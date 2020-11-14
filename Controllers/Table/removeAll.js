const { Table } = require("../../Models/Table");

exports.removeAll = async function(req, res, next) {
  await Table.deleteMany();

  res.status(200).json({ statusCode: 200, message: "تم مسح جميع الطرابيزات" });
};
