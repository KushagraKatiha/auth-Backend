
const signup = async (req, res)=>{
    res.status(200).json({
        status: "success",
        message: "signup successfull "
    })
}

module.exports = signup