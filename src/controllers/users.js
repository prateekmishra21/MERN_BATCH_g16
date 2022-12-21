const { Users } = require("../models/users");

const register = async (request, response) => {
  const { username } = request.body;

  const isUserExist = await Users.findOne({ username: username });
  if (isUserExist) {
    return response.json({ error: "This username already exist." });
  }
  //   console.log(request.body);
  var user = new Users(request.body); // Create New Student in database.
  user = await user.save();

  user.encry_password = undefined;
  user.key = undefined;

  return response.json({ status: "User Created", user: user });
};

const signIn = async (request, response) => {
  const { username, password } = request.body;

  const isUserExist = await Users.findOne({ username: username });
  if (!isUserExist) {
    return response.json({ error: "This username does not exist." });
  }

  if (!isUserExist.authenticate(password)) {
    return response.json({ error: "This password does not exist." });
  }

  return response.json({ status: "LoggedIN", isUserExist });
};

module.exports = { register, signIn };
