const express = require("express");
const app = express();
const port = 3690;
const { MongoClient, ServerApiVersion } = require("mongodb");

// ! userName: krishnaruparelia0207
// ! password: DxrcAvKIvk5KgRpU
// ! mongodb+srv://krishnaruparelia0207:DxrcAvKIvk5KgRpU@krishnagettingstarted.eqdddjp.mongodb.net/students-database
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

const connectDb = async () => {
  try {
    await client.connect();
    console.log("MongoDb connected");
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
