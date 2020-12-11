const socketT = require("socket.io-client")(
  "https://lamera-socket.herokuapp.com"
);

const { Table } = require("../../Models/Table");

exports.tableLogin = async function(req, res, next) {
  const table = await Table.findOneAndUpdate(
    { _id: req.params.tableId },
    { $set: { status: "Online" } },
    { new: true }
  );

  socketT.emit("tableOnline", table);

  res.status(200).json({ statusCode: 200, message: "اهلا بكم في لاميرا" });
};
  