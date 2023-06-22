const express = require('express');
const router = express.Router()

const auth = require('../controllers/signupController')

router.post('/signup', auth.signUp)

module.exports = router