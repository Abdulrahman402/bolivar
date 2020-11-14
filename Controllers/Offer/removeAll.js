const { Offer } = require("../../Models/Offer");

exports.removeAll = async function(req, res, next) {
  await Offer.deleteMany();

  res.status(200).json({ statusCode: 200, message: "تم مسح جميع العروض" });
};
