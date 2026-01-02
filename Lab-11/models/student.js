const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:String,
    studentId:Number
},{timestamps:true})

module.exports = mongoose.model("users",userSchema)
