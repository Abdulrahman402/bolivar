const { Class } = require("../../Models/Class");

exports.classSearch = async function(req, res, next) {
  const search = req.query.class;

  const clas = await Class.find({
    arabicName: { $regex: ".*" + search + ".*", $options: "i" }
  });

  res.status(200).json({ statusCode: 200, result: clas });
};
