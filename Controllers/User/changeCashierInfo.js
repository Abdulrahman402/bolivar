const joi = require("joi");

const { User } = require("../../Models/User");

exports.changeCashierInfo = async function(req, res, next) {
  const { error } = changeCashierInfo(req.body);
  if (error)
    return res
      .status(400)
      .json({ statusCode: 400, message: error.details[0].message });

  const cashier = await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        password: req.body.password
      }
    }
  );

  res.status(200).json({ statusCode: 200, result: cashier });
};

function changeCashierInfo(user) {
  const schema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    role: joi.string().required(),
    password: joi.string().required()
  });
  return schema.validate(user);
}
