const { Offer } = require("../../Models/Offer");

exports.removeOffer = async function(req, res, next) {
  await Offer.findOneAndRemove({ _id: req.params.offerId });

  res.status(200).json({ statusCode: 200, message: "تم مسح العرض" });
};
