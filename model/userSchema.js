const mongoose = require('mongoose')
const JWT = require('jsonwebtoken')

const user = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required field"],
        trim: true,
        minLength: [5, "Name must be more than 5 chars"],
        maxLength: [50, "Name must be more than 50 chars"]
    },
    email:{
        type: String,
        requird: [true, "Email is required field"],
        lowercase: true,
        unique: [true, "Already registered email"]
    },
    password:{
        type: String,
        select: false
    },
    
}, {
    timestamps: true
})

user.methods = {
    jwtToken(){
        return  JWT.sign(
            {id: this._id, email: this.email },
            process.env.SECRET,
            {expiresIn: '24h'}
        )
    }
}

module.exports = mongoose.model("userModel", user)