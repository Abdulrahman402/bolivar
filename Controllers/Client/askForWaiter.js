var socket = require("socket.io-client")(
  "https://lamera-socket.herokuapp.com/"
);

const { Table } = require("../../Models/Table");

exports.askForWaiter = async function(req, res, next) {
  const table = await Table.findOneAndUpdate(
    { _id: req.user._id },
    { $set: { status: "Waiter" } },
    { new: true }
  );

  socket.emit("Waiter", table);

  res.status(200).json({ statusCode: 200, message: "تم طلب ويتر" });
};
