const { User } = require("./models");
const jwt = require("jsonwebtoken");
const Key = "j43jrbj34jk34btbh34kjk3j45kjb53bkj54kj3b";
const register = async (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  const isExist = await User.findOne({ username: username });
  console.log(isExist);
  if (isExist) {
    return res.json({
      status: "Error",
      message: "This username already exist",
    });
  }

  if (password.length < 6) {
    return res.json({
      status: "Error",
      message: "Password length",
    });
  }

  var newUser = await User.create(req.body);
  // newUser.ency_password = undefined;
  // newUser.salt = undefined;

  return res.json({ status: "User created successfully", newUser });
};

const commonLogin = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  if (!user) {
    return res.json({
      status: "Error",
      message: "This username does not exist",
    });
  }
  if (!user.isAuthenticated(password)) {
    return res.json({
      status: "Error",
      message: "You entered wrong password",
    });
  }
  var token = jwt.sign({ _id: user._id }, Key);
  req.body.token = token;
  req.body.user = user;
  next();
};

const login = async (req, res) => {
  return res.json({ status: "Done", data: req.body });
};

const reset = async (req, res) => {
  var user = await User.findOne({ username: req.body.username });
  user.password = req.body.newPassword;
  await user.save();
  return res.json({ status: "Done" });
};

module.exports = { register, login, commonLogin, reset, Key };
