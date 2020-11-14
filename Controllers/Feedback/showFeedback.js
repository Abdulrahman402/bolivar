const { Feedback } = require("../../Models/Feedback");

exports.showFeedback = async function(req, res, next) {
  const feedback = await Feedback.findOne({
    _id: req.params.feedbackId
  }).select();

  res.status(200).json({ statusCode: 200, result: feedback });
};
