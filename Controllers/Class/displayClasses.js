const { Class } = require("../../Models/Class");

exports.displayClasses = async function(req, res, next) {
  let classes = await Class.find().select();

  res.status(200).json({ statusCode: 200, result: classes });
};
