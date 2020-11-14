const joi = require("joi");

const { Offer } = require("../../Models/Offer");

exports.addOffer = async function(req, res, next) {
  const { error } = addOffer(req.body);
  if (error)
    return res
      .status(400)
      .json({ statusCode: 400, message: error.details[0].message });

  let meal = new Offer({
    name: req.body.name,
    description: req.body.description,
    oldPrice: req.body.oldPrice,
    newPrice: req.body.newPrice
  });

  await meal.save();

  res.status(200).json({ statusCode: 200, result: meal });
};

function addOffer(offer) {
  const schema = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    oldPrice: joi.array(),
    newPrice: joi.array().required()
  });
  return schema.validate(offer);
}
