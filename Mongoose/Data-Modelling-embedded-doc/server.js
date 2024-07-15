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

//  ! Address schema

const addressSchema = new mongoose.Schema(
  {
    street: String,
    city: String,
    state: String,
    postalCode: Number,
  },
  {
    timestamps: true,
  }
);

//  ! user Schema

const userSchema = new mongoose.Schema(
  {
    username: String,
    age: Number,
    email: String,
    state: String,
    address: addressSchema,
  },
  {
    timestamps: true,
  }
);

//  * Compile the userSchema
const user = mongoose.model("userProfile", userSchema);

const createuser = async () => {
  try {
    const user1 = new user({
      username: "Krishna",
      age: 24,
      email: "krishna@krishna",
      address: {
        street: "Kormangala",
        city: "Bangalore",
        state: "Karnataka",
        postalCode: 560001,
      },
    });
    const result = await user1.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

createuser();
