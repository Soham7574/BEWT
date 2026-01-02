const mongoose = require('mongoose')

const facultySchema = mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:String,
    facultyId:Number
},{timestamps:true})

module.exports = mongoose.model("Faculty",facultySchema,'faculty')
