const signin = require('../controller/signin.js')
const signup = require('../controller/signup.js')
const getUser = require('../controller/getUser.js')
const express = require('express')
const jwtAuth = require('../middleware/jwtAuth.js')

const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.get("/user", jwtAuth,getUser)

module.exports = router