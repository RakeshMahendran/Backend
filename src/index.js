const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDB = require("./dbConnect");

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const signupRoute = require("../src/routers/signup")
const loginRoute = require("../src/routers/login")
const courseRoute = require("../src/routers/course");

app.use('/',signupRoute)
app.use('/',loginRoute)
app.use('/',courseRoute)

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 4030;

    app.get("/get", (req, res) => {
      res.send("Hello World!");
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  });
