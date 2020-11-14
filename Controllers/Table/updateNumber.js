const joi = require("joi");

const { Table } = require("../../Models/Table");

exports.updateNumber = async function(req, res, next) {
  const { error } = updateNumber(req.body);
  if (error)
    return res
      .status(400)
      .json({ statusCode: 400, message: error.details[0].message });

  let table = await Table.findOneAndUpdate(
    { _id: req.params.tableId },
    { $set: { number: req.body.number } },
    { new: true }
  );
  res.status(200).json({ statusCode: 200, result: table });
};

function updateNumber(table) {
  const schema = joi.object({
    number: joi.number().required()
  });
  return schema.validate(table);
}
