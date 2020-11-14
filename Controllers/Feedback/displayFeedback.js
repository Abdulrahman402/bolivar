const { Feedback } = require("../../Models/Feedback");

exports.displayFeedback = async function(req, res, next) {
  const feedback = await Feedback.find().select();

  res.status(200).json({ statusCode: 200, result: feedback });
};
