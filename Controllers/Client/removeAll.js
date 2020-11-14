const { Client } = require("../../Models/Client");

exports.removeAll = async function(req, res, next) {
  await Client.deleteMany();

  res.status(200).json({ statusCode: 200, message: "تم مسح جميع العملاء" });
};
