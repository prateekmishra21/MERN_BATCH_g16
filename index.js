const express = require("express");
const parser = require("body-parser");
const {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  login,
} = require("./src/controllers");
const cors = require("cors");
const mongoose = require("mongoose");

//? DB Connect Start

mongoose.connect("mongodb://0.0.0.0:27017/mern_g16");

mongoose.connection.on("connected", () => {
  console.log("DB CONNECTED");
});

// mongoose.connection.on("error", () => {
//   console.log("DB CONNECTION ERROR");
// });

//! DB Connect END

const server = express();

server.use(cors());
server.use(parser.json());

// http methods -> 2 min args, max -- N
server.get("/students", getAllStudents);
server.post("/login", login);
server.post("/create-new-students", createStudent);
server.put("/update-student", updateStudent);
server.delete("/delete-student", deleteStudent);

server.listen(4000, () => {
  console.log("Server Stared on 4000 PORT");
});

/**
 * HTTP Methods
 * GET, POST
 *

 */
