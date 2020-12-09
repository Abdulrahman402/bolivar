const { Class } = require("../../Models/Class");

exports.showClass = async function(req, res, next) {
  const clas = await Class.findOne({ englishName: req.params.englishName })
    .select()
    .populate("meals");

  res.status(200).json({ statusCode: 200, result: clas });
};
