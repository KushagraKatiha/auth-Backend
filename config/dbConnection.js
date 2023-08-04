const mongoose = require('mongoose')

const dbConnection = ()=>{
     mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log(`Connected to DB: ${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log(err.message);
    })
}

module.exports = dbConnection