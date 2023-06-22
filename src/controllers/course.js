const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const connectDB = require("../dbConnect");
dotenv.config();

const { PostCourse } = require("../models/postCourse");

const course = async (req, res) => {
  try {
    const {
      courseId,
      courseName,
      courseDescription,
      courseTutor,
      courseMotive,
      courseMaterials,
    } = req.body; 
    const result = await PostCourse.findOne({ courseId });

    if (result) {
      console.log("Course ID already exists");
      return res.json({
        message: "Course ID already exists",
      });
    } else {
      const courses = new PostCourse({
        courseId,
        courseName,
        courseDescription,
        courseTutor,
        courseMaterials,
        courseMotive,
        timeStamp: Date.now(),
      });

      try {
        await courses.save();
        console.log(`Course ${courseId} saved successfully!`);
        return res.json({
          message: "Course saved successfully",
        });
      } catch (err) {
        console.error(err);
        return res.status(500).json({
          error: err,
          message: "Error in saving courses",
        });
      }
    }
  } catch (error) {
    console.log("Error in course controller", error);
    return res.status(401).json({ msg: error });
  }
};

const getCourse = async (req, res) => {
 try{
     const result = await PostCourse.find({})
     return res.json({ 
      result:result,
      status:"success"
     })
 }
 catch(err){
  console.log("Error in getting course controller", err);
  return res.json({ msg: "Error in getting course controller",error:err });

 }
}

module.exports = { course , getCourse }
