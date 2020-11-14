const { Client } = require("../../Models/Client");

exports.allClients = async function(req, res, next) {
  const client = await Client.find().select();

  res.status(200).json({ statusCode: 200, result: client });
};
