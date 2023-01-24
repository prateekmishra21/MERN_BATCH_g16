const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { authRouter } = require("./src/auth/router");
const blogRouter = require("./src/blog/router");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//DB Connection
mongoose.connect(
  "mongodb+srv://merng16:puguwLLulvRFuVYL@cluster0.yprwra3.mongodb.net/data?retryWrites=true&w=majority"
);
mongoose.connection.on("connected", () => {
  console.log("DB CONNECTED DONE");
});

app.use("/auth", authRouter);
app.use("/blog", blogRouter);

app.listen(4000, () => {
  console.log("Server Started on 4000 ");
});
