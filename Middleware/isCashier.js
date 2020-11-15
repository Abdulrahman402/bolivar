module.exports = (req, res, next) => {
  if (req.user.role != "Cashier")
    return res.status(401).send("غير مصرح بالدخول");
  next();
};
