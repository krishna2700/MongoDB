const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator");

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

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      set: (value) => value.trim(),
    },
    author: {
      type: String,
      require: true,
      set: (value) => value.trim(),
    },
    price: {
      type: Number,
      require: true,
      set: (value) => Math.round(value * 100) / 100,
    },
    tags: {
      type: [String],
      require: true,
      set: (value) => value.map((tag) => tag.toLowerCase()),
    },
    url: {
      type: String,
      require: true,
      set: (value) => `https://krishna.com/books/${value}`,
    },
  },
  {
    timestamps: true,
  }
);

const book = mongoose.model("book", bookSchema);

const createDoc = async () => {
  try {
    const books = await book.create([
      {
        title: "Vachnamrut",
        author: "Hariprasad Swamiji",
        price: 200,
        tags: ["Raja thi raj", "Bhagwan Swaminarayan"],
        url: "book1",
      },
      {
        title: "SwaminiVato",
        author: "PrabodhSwamiji",
        price: 300,
        tags: ["Das na Das", "Gunatinand Swamiji"],
        url: "book2",
      },
    ]);
    console.log(books);
  } catch (error) {
    console.log(error);
  }
};

createDoc();
