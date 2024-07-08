const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const PORT = 3690;
//Connect to mongodb

const mongodbURL =
  "mongodb+srv://krishnaruparelia0207:DxrcAvKIvk5KgRpU@krishnagettingstarted.eqdddjp.mongodb.net/students-database";

const client = new MongoClient(mongodbURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB Connected successfully");
    const database = client.db("dasnadasSchool");

    // Collections
    const employees = database.collection("employees");
    //  Create some documents
    // const employeesDocs = [
    //   { name: "Alice", age: 25, department: "HR" },
    //   { name: "Bob", age: 30, department: "Finance" },
    //   { name: "Charlie", age: 35, department: "IT" },
    //   { name: "David", age: 40, department: "Operations" },
    //   { name: "Eva", age: 45, department: "IT" },
    // ];
    // const result = await employees.insertMany(employeesDocs);
    // console.log(result);
    // ! =====QUERYING=====
    // ? $gt
    // const employeesCursor = employees.find({
    //   age: { $gt: 30 },
    // });
    // const results = await employeesCursor.toArray();
    // console.log(results);
    // ? gte
    // const employeesCursor = employees.find({
    //   age: { $gte: 30 },
    // });
    // const results = await employeesCursor.toArray();
    // console.log(results);
    // ? ne
    // const employeesCursor = employees.find({
    //   age: { $ne: 40 },
    // });
    // const results = await employeesCursor.toArray();
    // console.log(results);
    // ? $lt
    // const employeesCursor = employees.find({
    //   age: { $lt: 40 },
    // });
    // const results = await employeesCursor.toArray();
    // console.log(results);
    // ? $lte
    // const employeesCursor = employees.find({
    //   age: { $lte: 30 },
    // });
    // const results = await employeesCursor.toArray();
    // console.log(results);
    // ? $nin
    // const employeesCursor = employees.find({
    //   age: { $nin: [15, 45, 30, 40, 35, 25] },
    // });
    // const results = await employeesCursor.toArray();
    // console.log(results);
    // ? multiple conditions
    const employeesCursor = employees.find({
      age: { $gt: 30, $lte: 45 },
    });
    const results = await employeesCursor.toArray();
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};
//Run the function
connectDB();

//!Start the server
app.listen(PORT, console.log(`The server is up and running on port ${PORT}`));
