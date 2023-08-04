const user = require('../model/userSchema.js')
const emailValidator = require('email-validator')

const signup = async (req, res)=>{
    try {
        const {name, email, password, confirmPassword} = req.body

        if(!name, !email, !password, !confirmPassword){
            throw new Error(`All the fields are required`)
        }
        if(password !== confirmPassword){
            throw new Error(`Password and confirm Password didn't match`)
        }
        
        const isValidEmail = emailValidator.validate(email)

        if(!isValidEmail){
            throw new Error(`Please enter the correct email Id`)
        }

        const userExists = await user.findOne({email})
        if(userExists){
            throw new Error(`User already registered with this email`)
        }

        const userInfo = user(req.body)
        const result = await userInfo.save()

        res.status(200).json({
            success: true,
            data: result
        })

        

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = signup