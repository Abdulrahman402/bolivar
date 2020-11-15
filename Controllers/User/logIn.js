const _ = require("lodash");
const bcrypt = require("bcryptjs");
const joi = require("joi");

const { User } = require("../../Models/User");

exports.logIn = async function(req, res, next) {
  if (!req.body.username.trim() || !req.body.password.trim()) {
    res.statusCode(402).json({
      statusCode: 402,
      message: "اسم المستخدم وكلمة المرور حقول إجبارية"
    });
  }

  const { error } = validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ statusCode: 400, message: error.details[0].message });

  let user = await User.findOne({ username: req.body.username });
  if (!user)
    return res
      .status(400)
      .json({ statusCode: 400, message: "المستخدم غير موجود" });

  const validPW = await bcrypt.compare(req.body.password, user.password);
  if (!validPW)
    return res
      .status(400)
      .json({ statusCode: 400, message: "كلمة المرور غير صحيحة" });

  const token = await user.generateAuthToken();

  res.status(200).json({ statusCode: 200, token: token, result: user });
};

function validate(req) {
  const schema = joi.object({
    username: joi.string().required(),
    password: joi.string().required()
  });
  return schema.validate(req);
}
