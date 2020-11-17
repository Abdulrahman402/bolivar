const { Offer } = require("../../Models/Offer");

exports.DisplayOffer = async function(req, res, next) {
  const offer = await Offer.find({ _id: req.params.offerId }).select();

  res.status(200).json({ statusCode: 200, result: offer });
};
