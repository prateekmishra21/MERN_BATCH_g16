const express = require("express");
const { register, login, reset, commonLogin } = require("./controllers");
const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", commonLogin, login);
authRouter.post("/reset", commonLogin, reset);

module.exports = { authRouter };
