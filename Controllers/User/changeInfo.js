const joi = require("joi");

const { User } = require("../../Models/User");

exports.changeInfo = async function(req, res, next) {
  const { error } = changeInfo(req.body);
  if (error)
    return res
      .status(400)
      .json({ statusCode: 400, message: error.details[0].message });

  if (!req.body.username.trim() || !req.body.password.trim())
    return res.status(402).json({
      statusCode: 402,
      message: "اسم المستخدم و كلمة المرور حقول اجبارية"
    });

  const user = await User.findOne({ username: req.body.username }).select(
    "username"
  );
  if (user)
    return res
      .status(400)
      .json({ statusCode: 400, message: "اسم المستخدم موجود بالفعل" });

  const cashier = await User.findOneAndUpdate(
    { _id: req.use._id },
    {
      $set: {
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        password: req.body.password
      }
    }
  );

  res.status(200).json({ statusCode: 200, result: cashier });
};

function changeInfo(user) {
  const schema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    role: joi.string().required(),
    password: joi.string().required()
  });
  return schema.validate(user);
}
