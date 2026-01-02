const express = require('express')
const router = express.Router()

const User = require('../models/student')

router.get("/all",async(req,res)=>{
    try{
        const user = await User.find();
        res.send({message:"Students Fetched",allUsers:user})
    }catch(err){
        res.send({err})
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        if(!user){
            return res.status(404).send({message:"Student not found"})
        }
        res.send({message:"Student Fatched",user:user})
    }catch(err){
        res.send({err})
    }
})

router.post("/register",async(req,res)=>{
    try{
        const {studentId,name,email,password} = req.body
        const user = await User.create({
            studentId,
            name,
            email,
            password
        })
        res.send({message:"Student Registered",newUser:user})
    }catch(err){
        res.send({err})
    }
})

router.patch("/update/:id",async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            {
                new:true
            }
        );
        if(!user){
            return res.status(404).send({message:"Student not found"})
        }
        res.send({message:"Student Updated.",upuser:user})
    }catch(err){
        res.send({err})
    }
})

router.delete("/remove/:id",async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send({message:"Student not found"})
        }
        res.send({message:"Student Removed.",removeuser:user})
    }catch(err){
        res.send({err})
    }
})

module.exports=router