const jwt = require("jsonwebtoken");
const { Key } = require("../auth/controllers");
const { User } = require("../auth/models");

const isAuthenticated = async (req, res, next) => {
  token = req.headers.authorization;
  if (!token) {
    return res.json({ status: "Error", message: "Token required" });
  }
  try {
    var verify = jwt.verify(token, Key);
    if (verify && verify._id) {
      var user = await User.findById(verify._id);
      if (!user) {
        return res.json({ status: "Error", message: "Unauthorized user" });
      }
      req.body.user_id = user._id;
      next();
    } else
      return res.json({ status: "Error", message: "Valid Token Required" });
  } catch {
    return res.json({ status: "Error", message: "In-Valid Token" });
  }
};

module.exports = { isAuthenticated };
// headers, query, params, body
