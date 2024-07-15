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

// Run the function
connectToDB();

// ! Author Schema
const authorSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

// * Compile the authorSchema
const Author = mongoose.model("Author", authorSchema);

// ! Book Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});

// * Compile the bookSchema
const Book = mongoose.model("Book", bookSchema);

const createAuthor = async () => {
  try {
    const author1 = await Author.create({
      name: "Ruparelia",
    });
    console.log(author1);

    createBook(author1._id);
  } catch (error) {
    console.log(error);
  }
};

const createBook = async (authorId) => {
  try {
    const book1 = await Book.create({
      title: "MERN",
      author: authorId,
    });
    console.log(book1);
  } catch (error) {
    console.log(error);
  }
};

createAuthor();
