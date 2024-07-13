const express = require("express");
const mongoose = require("mongoose");
// PORT
const PORT = 3690 || process.env.PORT;
// Instance of express
const app = express();
// Connect to mongodb
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
// ! Design schema
const userProfileSchema = new mongoose.Schema({
  username: String, //string
  age: Number, //number
  birthday: Date, //Date
  isActive: Boolean, //Boolean
  hobbies: [String], //Arrays of strings
  objectID: mongoose.Schema.Types.ObjectId, //ObjectID
  address: {
    street: String,
    city: String,
    postalCode: Number,
  }, //Embedded Document
  customData: mongoose.Schema.Types.Mixed,
});
// ! Compile the Schema to form the model
const user = mongoose.model("userProfile", userProfileSchema);

//  ! =========== CRUD Operations ============
// ? Create Doc
// *.save()
const newUser = new user({
  username: "Krishna",
  age: 24,
  birthday: new Date("2000-07-02"),
  isActive: true,
  hobbies: ["Coding", "Cooking", "Reading"],
  address: {
    street: "Main St",
    city: "Boston",
    postalCode: 1234,
  },
  customData: {
    country: "USA",
    state: "MA",
    zip: 1234,
  },
});
// newUser
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// *.create()
// user
//   .create({
//     username: "Krishna Ruparelia",
//     age: 24,
//     birthday: new Date("2000-07-02"),
//     isActive: true,
//     hobbies: ["Coding", "Cooking", "Reading"],
//     address: {
//       street: "Main St",
//       city: "Boston",
//       postalCode: 1234,
//     },
//     customData: {
//       country: "USA",
//       state: "MA",
//       zip: 1234,
//     },
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// *.insertMany()
//

// ! ===============Read Operations=====================
//  !.find()
// user
//   .find()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// ! .findONe()
// user
//   .findOne({ age: 24 })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// ! .findById()
// user.findById("633d0a0c6b7f7a9b8a3b8b8b");

// !========.where()==========
// const findUsers = async () => {
//   try {
//     const users = await user.find().where("age").gte(23);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();
// !========.sort()==========
// const findUsers = async () => {
//   try {
//     const users = await user.find().where("age").gte(23).sort({ username: +1 });
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();
// !========.limit()==========

// const findUsers = async () => {
//   try {
//     const users = await user
//       .find()
//       .where("age")
//       .gte(23)
//       .sort({ username: +1 })
//       .limit(1);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();
//  ! ==========Updating documents================
//  ! .updateOne()

//  ! .findByIdUpdate()
//  ! .findOneAndUpdate()
// Start the server
app.listen(PORT, console.log(`The server is up and running on port ${PORT}`));
