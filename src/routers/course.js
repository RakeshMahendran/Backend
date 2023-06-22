const express = require("express");
const router = express.Router();

const { course } = require("../controllers/course"); 

router.post("/courses", course);

module.exports = router;
