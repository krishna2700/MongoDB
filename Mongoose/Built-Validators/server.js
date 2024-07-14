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

const userProfileSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"],
      unique: true,
      minLength: 3,
      maxLength: 10,
    },
    email: {
      type: String,
      required: [true, "Please enter a valid email"],
      match: /@/,
    },
    age: {
      type: Number,
      required: [true, "Please enter age"],
      minLength: 18,
      maxLength: 65,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("userProfile", userProfileSchema);

const createDoc = async () => {
  try {
    const userCreated = await user.create({
      username: "Krishna",
      email: "krishnaruparelia0207@gmail.com",
      age: 24,
      gender: "Male",
    });
    console.log(userCreated);
  } catch (error) {
    console.log(error);
  }
};

createDoc();
