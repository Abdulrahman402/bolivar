const _ = require("lodash");
const joi = require("joi");

const { Menu } = require("../../Models/Menu");

const { Class } = require("../../Models/Class");

exports.addMeal = async function(req, res, next) {
  const { error } = addMeal(req.body);
  if (error)
    return res
      .status(400)
      .json({ statusCode: 400, message: error.details[0].message });

  let meal = new Menu(_.pick(req.body, ["name", "description", "price"]));

  await meal.save();

  await Class.findOneAndUpdate(
    { _id: req.params.classId },
    { $push: { meals: meal._id } },
    { new: true }
  );

  await Menu.findOneAndUpdate(
    { _id: meal._id },
    {
      $set: {
        class: req.params.classId
      }
    },
    { new: true }
  );

  res.status(200).json({ statusCode: 200, result: meal });
};

function addMeal(meal) {
  const schema = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    price: joi.array().required()
  });
  return schema.validate(meal);
}
