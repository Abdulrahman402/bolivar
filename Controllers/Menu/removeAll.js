const { Menu } = require("../../Models/Menu");

exports.removeAll = async function(req, res, next) {
  await Menu.deleteMany();

  res.status(200).json({ statusCode: 200, message: "تم مسح جميع الوجبات" });
};
