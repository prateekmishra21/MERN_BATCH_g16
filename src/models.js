const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    username: String,
    password: String,
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

studentSchema
  .virtual("name")
  .set(function (value) {
    var name = value.split(" ");
    this.first_name = name[0];
    this.last_name = name[1];
  })
  .get(function () {
    return this.first_name + " " + this.last_name;
  });

studentSchema.methods = {
  getDomainName: function () {
    return this.email.split("@")[1];
  },
  getFullName: function () {
    return this.first_name + " " + this.last_name;
  },
};

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };
