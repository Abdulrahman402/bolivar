const joi = require("joi");

const { Menu } = require("../../Models/Menu");

exports.updateMeal = async function(req, res, next) {
  const { error } = updateMeal(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const meal = await Menu.findOneAndUpdate(
    { _id: req.params.mealId },
    {
      $set: {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
      }
    },
    { new: true }
  );
  res.status(200).json({ statusCode: 200, result: meal });
};

function updateMeal(meal) {
  const schema = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    price: joi.array().required()
  });
  return schema.validate(meal);
}
