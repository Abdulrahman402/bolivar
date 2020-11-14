const { Feedback } = require("../../Models/Feedback");

exports.removeAll = async function(req, res, next) {
  await Feedback.deleteMany();

  res.status(200).json({ statusCode: 200, message: "تم مسح جميع التقييمات" });
};
