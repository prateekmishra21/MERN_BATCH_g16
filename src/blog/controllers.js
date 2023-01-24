const { Blog } = require("./models");

const createNewBlog = async (req, res) => {
  var newBlog = await Blog.create(req.body);

  var allBlogs = await Blog.find().populate("user_id");
  return res.json({ status: "Created", allBlogs });
};

module.exports = { createNewBlog };
