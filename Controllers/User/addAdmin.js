const _ = require("lodash");
const bcrypt = require("bcryptjs");
const joi = require("joi");

const { User } = require("../../Models/User");

exports.addAdmin = async function(req, res, next) {
  if (!req.body.username.trim() || !req.body.password.trim())
    return res.status(402).json({
      statusCode: 402,
      message: "اسم المستخدم و كلمة المرور حقول اجبارية"
    });

  const { error } = validateAdmin(req.body);
  if (error)
    return res
      .status(400)
      .json({ statusCode: 400, message: error.details[0].message });

  let user = await User.findOne({ username: req.body.username });
  if (user)
    return res.status(400).json({ statusCode: 400, message: "المستخدم موجود" });

  user = new User(
    _.pick(req.body, ["username", "firstName", "lastName", "password", "role"])
  );

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  await user.save();

  const token = await user.generateAuthToken();

  res.status(200).json({ statusCode: 200, result: user, token: token });
};

function validateAdmin(admin) {
  const schema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    username: joi
      .string()
      .lowercase()
      .required(),
    password: joi.string().required(),
    role: joi.string().required()
  });
  return schema.validate(admin);
}
