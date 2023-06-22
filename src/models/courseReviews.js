const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// env variables
require("dotenv").config();

const reviewSchema = new Schema({
  reviewer: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
    minlength: 10, 
    maxlength: 200, 
  },
  stars: {
    type: Number,
    min: 1,
    max: 5,
  },
  timestamp: {
    type: Number,
    default: Date.now(),
  },
});


const review = mongoose.model("courseReview", reviewSchema);

module.exports = { review };
