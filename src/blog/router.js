const express = require("express");
const { isAuthenticated } = require("../helper/utils");
const { createNewBlog } = require("./controllers");
const blogRouter = express.Router();

blogRouter.post("/blog", isAuthenticated, createNewBlog);

module.exports = blogRouter;
