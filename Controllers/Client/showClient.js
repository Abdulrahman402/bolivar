const { Client } = require("../../Models/Client");

exports.showClient = async function(req, res, next) {
  const client = await Client.findOne({ phone: req.query.phone });
  if (!client)
    return res.status(404).json({ statusCode: 404, message: "لا يوجد" });

  res.status(200).json({ statusCode: 200, result: client });
};
