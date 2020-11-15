const { Client } = require("../../Models/Client");

exports.removeClient = async function(req, res, next) {
  await Client.findOneAndRemove({ _id: req.params.clientId });

  res.status(200).json({
    statusCode: 200,
    message: `تم مسح العميل`
  });
};
