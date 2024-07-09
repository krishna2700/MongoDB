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
// Start the server
app.listen(PORT, console.log(`The server is up and running on port ${PORT}`));
