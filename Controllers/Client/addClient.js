const _ = require("lodash");
const joi = require("joi");

const { Client } = require("../../Models/Client");

exports.addClient = async function(req, res, next) {
  const { error } = validateClient(req.body);
  if (error)
    return res
      .status(400)
      .json({ statusCode: 400, message: error.details[0].message });

  let client = await Client.findOne({ phone: req.body.phone });
  if (client) return res.status(400).send("انت مسجل عندنا");

  client = new Client(_.pick(req.body, ["name", "phone"]));

  await client.save();

  res.status(200).json({ statusCode: 200, result: client });
};

function validateClient(client) {
  const schema = joi.object({
    name: joi.string(),
    phone: joi.string()
  });
  return schema.validate(client);
}
