const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const uri = process.env.MONGO_URI;

const connectDB = async function () {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify: false,
    });
    console.log(`Mongodb connected`);
  } catch (error) {
    console.log(`Inside dbConnecter - Error : ${error.message}`);
  }
};

module.exports = connectDB;
