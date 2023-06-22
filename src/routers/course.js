const express = require("express");
const router = express.Router();

const { course } = require("../controllers/course");
const { getCourse } = require("../controllers/course")

router.post("/courses", course);
router.get("/courses",getCourse)

module.exports = router;

