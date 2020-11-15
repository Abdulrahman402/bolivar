const jwt = require("jsonwebtoken");
const keys = require("../Config/keys");

module.exports = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("هوية غير معروفة");
  try {
    const decoded = jwt.verify(token, keys.tokenSecretKey);
    req.user = decoded;

    next();
  } catch (e) {
    res.status(401).send("فشل في تحديد الهوية");
  }
};
