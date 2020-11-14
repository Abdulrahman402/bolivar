const { Menu } = require("../../Models/Menu");

const { Class } = require("../../Models/Class");

exports.removeMeal = async function(req, res, next) {
  await Menu.findOneAndRemove({ _id: req.params.mealId });

  await Class.findOneAndUpdate(
    { _id: req.params.classId },
    { $pull: { meals: req.params.mealId } },
    { new: true }
  );

  res.status(200).json({ statusCode: 200, message: "تم مسح الوجبة" });
};
