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

const userProfileSchema = new mongoose.Schema(
  {
    age: {
      type: Number,
      required: [true, "Please age is required"],
      validate: {
        validator: (value) => {
          return validator.isInt(value.toString(), { min: 0, max: 120 });
        },
        message: "Age must be an integer between 0 and 120",
      },
    },
    email: {
      type: String,
      required: [true, "Please email is required"],
      validate: {
        validator: (value) => {
          return validator.isEmail(value);
        },
        message: "Please enter a valid email",
      },
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
      age: 24,
      email: "krishnaruparelia0207@gmail.com",
    });
    console.log(userCreated);
  } catch (error) {
    console.log(error);
  }
};
createDoc();

// const deleteAll = async () => {
//   try {
//     await user.deleteMany({});
//     console.log("All data deleted successfully");
//   } catch (error) {
//     console.log(error);
//   }
// };
// deleteAll();
