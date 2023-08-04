const user = require('../model/userSchema.js')


const signin = async (req, res)=>{
   try {
    const {email, password} = req.body

    if(!email || !password){
        throw new Error(`All the fields are required`)
    }
    
    const isUserExists = await user.findOne({email}).select('+password')

    if(!isUserExists || password !== isUserExists.password){
        throw new Error('Email or Password didn\'t match')
    }

    res.status(200).json({
        success: true,
        message: "User logged in successfully"
    })

   } catch (error) {
    res.status(400).json({
        success: false,
        message: error.message
    })
   }
}

module.exports = signin