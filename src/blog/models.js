const { Schema, default: mongoose } = require("mongoose");

const blogSchema = new Schema(
  {
    title: String,
    description: String,
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };
