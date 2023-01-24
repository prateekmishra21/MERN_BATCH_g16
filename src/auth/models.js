const mongoose = require("mongoose");
const uuid = require("uuid");
const CryptoJs = require("crypto-js");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    name: String,
    ency_password: String,
    salt: String,
    email: String,
  },
  { timestamps: true }
);
userSchema.methods = {
  securePassword: function (planPassword) {
    return CryptoJs.SHA256(planPassword, this.salt).toString();
  },
  isAuthenticated: function (password) {
    return this.securePassword(password) === this.ency_password;
  },
};
userSchema.virtual("password").set(function (planPassword) {
  this.salt = uuid.v4();
  this.ency_password = this.securePassword(planPassword);
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
