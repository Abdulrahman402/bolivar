const _ = require("lodash");
const joi = require("joi");

const { Class } = require("../../Models/Class");

exports.addClass = async function(req, res, next) {
  const { error } = addClass(req.body);
  if (error)
    return res
      .status(400)
      .json({ statusCode: 400, message: error.details[0].message });

  let clas = await Class.findOne({
    arabicName: req.body.arabicName,
    englishName: req.body.englishName
  });

  if (clas)
    return res
      .status(400)
      .json({ statusCode: 400, message: "التصنيف موجود بالفعل" });

  clas = new Class(_.pick(req.body, ["arabicName", "englishName"]));

  await clas.save();

  res.status(200).json({ statusCode: 200, result: clas });
};

function addClass(clas) {
  const schema = joi.object({
    arabicName: joi.string().required(),
    englishName: joi.string().required()
  });
  return schema.validate(clas);
}
