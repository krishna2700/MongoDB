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
      required: [true, "Please username is required"],
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9]+$/.test(value);
        },
        message: "Username can only contain alphanumeric character",
      },
    },
    email: {
      type: String,
      required: [true, "Please email is required"],
      validate: {
        validator: function (value) {
          return value.endsWith("@gmail.com");
        },
        message: "Email must be from the domain @gamil.com",
      },
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("userProfile", userProfileSchema);

// Delete all data
const deleteAll = async () => {
  try {
    await user.deleteMany({});
    console.log("All data deleted successfully");
  } catch (error) {
    console.log(error);
  }
};

deleteAll();

// const createDoc = async () => {
//   try {
//     const userCreated = await user.create({
//       username: "KrishnaRuparelia",
//       email: "krishnaruparelia0207@gmail.com",
//     });
//     console.log(userCreated);
//   } catch (error) {
//     console.log(error);
//   }
// };

// createDoc();
