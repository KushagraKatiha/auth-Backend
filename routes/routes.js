const signin = require('../controller/signin.js')
const express = require('express')
const signup = require('../controller/signup.js')

const router = express.Router()

router.post("/signin", signin)
router.post("/signup", signup)

module.exports = router