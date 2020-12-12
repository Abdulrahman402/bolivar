var socket = require("socket.io-client")(
  "https://lamera-socket.herokuapp.com/"
);

const { Table } = require("../../Models/Table");

exports.deactivateTable = async function(req, res, next) {
  const table = await Table.findOneAndUpdate(
    { _id: req.params.tableId },
    { $set: { status: "Offline" } },
    { new: true }
  );

  socket.emit("goOfline", table);
  res.status(200).json({ statusCode: 200, result: table });
};
