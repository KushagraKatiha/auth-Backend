require('dotenv').config()
const express = require('express')
const dbConnection = require('./config/dbConnection.js')
const router = require('./routes/routes.js')
const cookieParser = require('cookie-parser');


const app = express()
app.use(express.json())
dbConnection()
app.use(cookieParser())
app.use("/", router)

module.exports = app