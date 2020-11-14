const { Feedback } = require("../../Models/Feedback");

exports.removeFeedback = async function(req, res, next) {
  await Feedback.findOneAndRemove({
    _id: req.params.feedbackId
  });

  res.status(200).json({ statusCode: 200, message: "تم مسح التقييم" });
};
