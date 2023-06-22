const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// env variables
require("dotenv").config();

const postCourseSchema = new Schema({
  courseId: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
    required: true,
  },
  courseTutor: {
    required: true,
    type: String,
  },
  courseMotive: [],
  courseMaterials: [
    {
      id: {
        type: String,
      },
      materialTitle: {
        type: String,
      },
      materialContent: [],
    },
  ],
  timestamp: {
    type: Number,
    default: Date.now(),
  },
});

const PostCourse = mongoose.model("course", postCourseSchema);

module.exports = { PostCourse };
