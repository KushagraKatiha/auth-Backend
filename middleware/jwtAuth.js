const JWT = require('jsonwebtoken')

const jwtAuth = (req, res, next)=>{

    try {
        const token = (req.cookies && req.cookies.token) || null;

        if (!token){
            throw new Error('Not authorize')
        }

        const payload = JWT.verify(token, process.env.SECRET)
        req.user = {id: payload.id, email: payload.email}
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

    next()
}



module.exports = jwtAuth