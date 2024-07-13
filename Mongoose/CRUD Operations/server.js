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
// const updateDocument = async () => {
//   try {
//     const result = await user.updateOne(
//       { username: "Krishna" },
//       { $set: { username: "Krish" } }
//     );
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDocument();
// const updateDoc = async () => {
//   try {
//     const updatedDocument = await user.updateOne(
//       { username: "Krish" },
//       {
//         age: 25,
//         isActive: false,
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updatedDocument);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();
//  ! .findByIdUpdate()
// const updateDoc = async () => {
//   try {
//     const updatedDocument = await user.findByIdAndUpdate(
//       "668e05387062106dbcb09922",
//       {
//         age: 24,
//         isActive: false,
//         hobbies: ["Coding", "Cricket"],
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updatedDocument);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();
//  ! .findOneAndUpdate()
// const updateDoc = async () => {
//   try {
//     const updatedDocument = await user.findOneAndUpdate(
//       { username: "Krish" },
//       {
//         age: 24,
//         isActive: true,
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updatedDocument);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();
// ! ============ .Update Operators ==========
//  ! $set() $unset()
// const updateDoc = async () => {
//   try {
//     const updatedDocument = await user.updateMany(
//       { username: "Krishna" },
//       {
//         // $set: { username: "Krishna" },
//         $unset: { address: 1 },
//       }
//     );
//     console.log(updatedDocument);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();
//  ! $addToSet() $push()
// const updateDoc = async () => {
//   try {
//     const updatedDocument = await user.updateMany(
//       { username: "Krishna" },
//       {
//         // $push: {
//         //   address: { city: "Mumbai", postalCode: 400101, street: "ABC" },
//         // },
//         $addToSet: { hobbies: ["Swimming"] },
//       }
//     );
//     console.log(updatedDocument);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();
// ! $inc() $mull()
// const updateDoc = async () => {
//   try {
//     const updatedDocument = await user.updateMany(
//       { username: "Krishna" },
//       {
//         // $inc: { age: 1 },
//         $mul: { age: 2 },
//       }
//     );
//     console.log(updatedDocument);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();
//  ! $pop() $pull()
// const updateDoc = async () => {
//   try {
//     const updatedDocument = await user.updateMany(
//       { username: "Krishna" },
//       {
//         // $pop: { address: -1 },
//         $pull: { hobbies: "Cooking" },
//       }
//     );
//     console.log(updatedDocument);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();

// !  ======= Delete Documents ========
const deleteDoc = async () => {
  try {
    const deletedDocument = await user.deleteMany({ username: "Krishna" });
    console.log(deletedDocument);
  } catch (error) {
    console.log(error);
  }
};
deleteDoc();
// Start the server
app.listen(PORT, console.log(`The server is up and running on port ${PORT}`));
