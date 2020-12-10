const { Offer } = require("../../Models/Offer");

exports.showOffer = async function(req, res, next) {
  const offer = await Offer.find().select();

  res.status(200).json({ statusCode: 200, result: offer });
};
