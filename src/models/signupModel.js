const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// env variables
require("dotenv").config();


const signupSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Provide Email']
  },
  password: {
    type: String,
    required: true
  }

});


const SignUp = mongoose.model('user',signupSchema);

module.exports = { SignUp };