const { Menu } = require("../../Models/Menu");

exports.mealsSearch = async function(req, res, next) {
  const search = req.query.meals;

  const meal = await Menu.find({
    name: { $regex: ".*" + search + ".*", $options: "i" }
  });

  res.status(200).json({ statusCode: 400, result: meal });
};
