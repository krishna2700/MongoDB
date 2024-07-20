const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3690;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const URL =
  "mongodb+srv://krishnaruparelia0207:DxrcAvKIvk5KgRpU@krishnagettingstarted.eqdddjp.mongodb.net/Krishna-DB";

const connectToDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB Connected successfully");
  } catch (error) {
    console.log(`Error Connecting to MongoDB ${error}`);
  }
};

// ? Run the function
connectToDB();

// ! comment Schema
const commentSchema = new mongoose.Schema(
  {
    text: String,
  },
  {
    timestamps: true,
  }
);

// ? Compile the commentSchema
const Comment = mongoose.model("Comment", commentSchema);

// ! Blog Schema
const blogSchema = new mongoose.Schema(
  {
    title: String,
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// ? Compile the blogSchema
const Blog = mongoose.model("Blog", blogSchema);

// ! Create a new Blog
// const createBlog = async () => {
//   try {
//     const blog1 = await Blog.create({
//       title: "Krishna",
//       // comments: ["Comment1", "Comment2", "Comment3"],
//     });
//     console.log(blog1);
//   } catch (error) {
//     console.log(error);
//   }
// };

// createBlog();

// ! Create a new Comment
const createComment = async () => {
  try {
    // * Find the Post u want to comment
    const post = await Blog.findById("669b2fcdc33d56031afd0efc");
    //  * Create the comment
    const comment = await Comment.create({
      text: "Comment1",
    });
    console.log(comment);
    //  * push the comment in the found post
    post.comments.push(comment._id);
    //  * save the post
    await post.save();
    console.log(post);
  } catch (error) {
    console.log(error);
  }
};

createComment();
