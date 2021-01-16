const { Table } = require("../../Models/Table");

exports.tableLogin = async function(req, res, next) {
  const table = await Table.findOneAndUpdate(
    { _id: req.params.tableId },
    { $set: { status: "Online" } },
    { new: true }
  );

  socket.emit("tableOnline", table);

  const token = await table.generateAuthToken();

  res
    .status(200)
    .json({ statusCode: 200, token: token, message: "اهلا بكم في لاميرا" });
};
