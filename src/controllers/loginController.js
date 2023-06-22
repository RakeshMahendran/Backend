const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const connectDB = require("../dbConnect");
const bcrypt = require("bcrypt");
dotenv.config();

const { SignUp } = require('../models/signupModel')

const login = async (req, res) => {
  //Authenticate user
  try {
    const user = await SignUp.findOne({ email: req.body.email });
    console.log("user", user); // log user object to console
    if (!user)
      return res
        .status(401)
        .json({ error: true, message: "Invalid email or password" });
    console.log(
      "loginPassword",
      req.body.password,
      "userPassword",
      user.password
    );
    const verifiedPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log("verifiedPassword", verifiedPassword); // log result of bcrypt.compare to console
    if (!verifiedPassword)
      return res.status(401).json({ error: true, message: "Invalid password" });

    res.status(200).json({
      error: false,
      user: user.firstName,
      userId: user._id,
      message: "Logged in sucessfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};


module.exports = { login };

