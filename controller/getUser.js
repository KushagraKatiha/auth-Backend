const user = require('../model/userSchema.js')

const getUser = async (req, res)=>{
    try {
        const userId = req.user.id
        const userFound = await user.findById(userId)

        res.status(200).json({
            success: true,
            data: userFound
        })


    } catch (error) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}


module.exports = getUser