const express = require("express");
const mongoose = require("mongoose");
// PORT
const PORT = 3690 || process.env.PORT;
// Instance of express
const app = express();
// Connect to mongodb
const URL =
  "mongodb+srv://krishnaruparelia0207:DxrcAvKIvk5KgRpU@krishnagettingstarted.eqdddjp.mongodb.net/students-database";
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

// Start the server
app.listen(PORT, console.log(`The server is up and running on port ${PORT}`));
