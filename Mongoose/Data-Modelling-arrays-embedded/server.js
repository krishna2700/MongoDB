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

//  ! Students schema

const studentsSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    marks: [Number],
  },
  {
    timestamps: true,
  }
);

// ! Classroom Schema

const classroomSchema = new mongoose.Schema(
  {
    className: String,
    students: [studentsSchema],
  },
  {
    timestamps: true,
  }
);

//  * Compile the classroomSchema

const classroom = mongoose.model("classroom", classroomSchema);

const createClassroom = async () => {
  try {
    const classroom1 = new classroom({
      className: "10th",
      students: [
        {
          name: "Krishna",
          age: 24,
          marks: [25, 35, 45],
        },
        {
          name: "Ruparelia",
          age: 25,
          marks: [10, 20, 30],
        },
      ],
    });
    const result = await classroom1.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

createClassroom();
