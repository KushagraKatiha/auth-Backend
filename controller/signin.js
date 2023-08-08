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

    // const token = isUserExists.jwtToken()
    // isUserExists.password = undefined;

    // const cookieOptions = {
    //     maxAge: 24*60*60*1000,
    //     httpOnly: true
    // }

    // res.cookie('token', token, cookieOptions)

    const token = isUserExists.jwtToken()
    isUserExists.password = undefined

    const cookieOptions = {
        maxAge: 24*60*60*1000,
        httpOnly: true
    }

    res.cookie('token', token, cookieOptions)


    res.status(200).json({
        success: true,
        message: "User Logged In Successfully"
    })

   } catch (error) {
    res.status(400).json({
        success: false,
        message: error.message
    })
   }
}

module.exports = signin