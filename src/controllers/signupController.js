const  express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const { SignUp } = require('../models/signupModel')
const connectDB = require('../dbConnect')
const bcrypt = require('bcrypt');
dotenv.config()

const signUp = async (req, res) => {
  try {
    await connectDB();
    console.log("signUpReq", req.body);
    const user = await SignUp.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        error: true,
        message: "User with given email already exists",
      });
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new SignUp({ ...req.body, password: hashPassword }).save();
    res
      .status(201)
      .json({ error: false, message: "Account created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};


module.exports = { signUp };
