module.exports = (req, res, next) => {
  if (req.user.role != "Admin")
    return res.status(401).send("Authorization failed");
  next();
};
