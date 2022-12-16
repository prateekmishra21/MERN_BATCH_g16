const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    age: Number,
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };
