const signin = require('../controller/signin.js')
const signup = require('../controller/signup.js')
const express = require('express')

const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)

module.exports = router