const express = require("express");
const app = express();
const port = 3690;
const { MongoClient, ServerApiVersion } = require("mongodb");

// * Connet to MongoDB
// ? 1 Create the client

const client = new MongoClient(
  `mongodb+srv://krishnaruparelia0207:DxrcAvKIvk5KgRpU@krishnagettingstarted.eqdddjp.mongodb.net/students-database`,
  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  }
);

// * Function to connect
// * Dummy test

const connectDb = async () => {
  try {
    await client.connect();
    console.log("MongoDb connected");
    // *1 Database name (school)
    const database = client.db("dasnadasSchool");
    // * 2 Collection name (students)
    const students = database.collection("students");
    // *3 Actual documnets () using insert one
    // const result = await students.insertOne({
    //   name: "Krishna",
    //   age: 24,
    //   subject: ["Maths", "Chemistry", "Physics"],
    // });

    // *3 Actual documnets () using insert many
    const result = await students.insertMany([
      {
        name: "John",
        age: 26,
        grade: "A",
        pass: true,
        subjects: ["Maths", "Chemistry", "Physics"],
      },
      {
        name: "Jane",
        age: 27,
        grade: "F",
        pass: false,
        subjects: ["Maths", "Chemistry", "Physics"],
      },
    ]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// * call the fuction

connectDb();

//  Start the server

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
