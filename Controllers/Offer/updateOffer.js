const joi = require("joi");

const { Offer } = require("../../Models/Offer");

exports.updateOffer = async function(req, res, next) {
  const { error } = updateOffer(req.body);
  if (error)
    return res
      .status(400)
      .json({ statusCode: 400, message: error.details[0].message });

  const offer = await Offer.findOneAndUpdate(
    { _id: req.params.offerId },
    {
      $set: {
        name: req.body.name,
        description: req.body.description,
        oldPrice: req.body.oldPrice,
        newPrice: req.body.newPrice
      }
    },
    { new: true }
  );

  res.status(200).json({ statusCode: 200, result: offer });
};

function updateOffer(offer) {
  const schema = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    oldPrice: joi.array(),
    newPrice: joi.array().required()
  });
  return schema.validate(offer);
}
