const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const { models } = require('mongoose')
dotenv.config() 


const verifyToken=(req,res,next)=>{
    const authHeaders = req.headers.authorization
    if (!authHeaders){
        return res.send({message:"Token Missing."})
    }
    const token = authHeaders.split(" ")[1]
    try{
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        req.id = decoded.id
        next()
    }catch(err){
        return res.status(401).send({message:"Invalid Token.."})
    }
}

module.exports=verifyToken