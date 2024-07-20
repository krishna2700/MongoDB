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

// ? Run the function
connectToDB();

//  ! Courses Schema
const courseSchema = new mongoose.Schema(
  {
    name: String,
    enrolledStudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// ? Compile the courseSchema
const Course = mongoose.model("Course", courseSchema);

// ! Student Schema
const studentSchema = new mongoose.Schema(
  {
    name: String,
    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// ? Compile the studentSchema
const Student = mongoose.model("Student", studentSchema);

const createCourse = async () => {
  try {
    const course1 = await Course.create([
      {
        name: "MongoDB",
      },
      {
        name: "Node.js",
      },
    ]);
    console.log(course1);
  } catch (error) {
    console.log(error);
  }
};

// createCourse();

const createStudent = async () => {
  try {
    const student1 = await Student.create([
      {
        name: "Krishna",
      },
      {
        name: "Ruparelia",
      },
    ]);
    console.log(student1);
  } catch (error) {
    console.log(error);
  }
};

// createStudent();

const createEnrollment = async () => {
  try {
    const student1 = await Student.findById("669b3e799ef6a01bdc3f5da4");
    const course1 = await Course.findById("669b3e799ef6a01bdc3f5da2");
    student1.enrolledCourses.push(course1._id);
    course1.enrolledStudents.push(student1._id);
    await student1.save();
    await course1.save();
    console.log(course1);
    console.log(student1);
  } catch (error) {
    console.log(error);
  }
};

createEnrollment();
