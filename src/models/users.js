const mongoose = require("mongoose");
var CryptoJS = require("crypto-js");
var uuid = require("uuid");

const userSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    encry_password: String,
    key: String,
  },
  { timestamps: true }
);

userSchema.virtual("password").set(function (password) {
  this.key = uuid.v4();
  this.encry_password = this.securePassword(password);
});

userSchema.methods = {
  authenticate: function (password) {
    return this.encry_password === this.securePassword(password);
  },

  securePassword: function (password) {
    var encry_password = CryptoJS.SHA256(password, this.key).toString();
    console.log(encry_password, this.key, password);
    return encry_password;
  },
};

const Users = mongoose.model("Users", userSchema);
module.exports = { Users };
