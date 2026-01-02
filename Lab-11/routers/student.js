const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()
const verifyToken = require('../Middleware/Verify')

const User = require('../models/student')

router.get("/all",verifyToken,async(req,res)=>{
    try{
        const user = await User.find();
        res.send({message:"Students Fetched",allUsers:user})
    }catch(err){
        res.send({err})
    }
})

router.get("/:id",verifyToken,async(req,res)=>{
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

router.post("/register",verifyToken,async(req,res)=>{
    try{
        const {studentId,name,email,password} = req.body
        const hashpassword = await bcrypt.hash(password,10)
        const user = await User.create({
            studentId,
            name,
            email,
            password:hashpassword
        })
        res.send({message:"Student Registered",newUser:user})
    }catch(err){
        res.send({err})
    }
})

router.patch("/update/:id",verifyToken,async(req,res)=>{
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

router.delete("/remove/:id",verifyToken,async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send({message:"Student not found"})
        }
        res.send({message:"Student Removed.",removeuser:user})
        if(!isPasswordValid){
            return res.send({message:"invalid"})
        }
    }catch(err){
        res.send({err})
    }
})

//JWT


router.post('/login',async(req,res)=>{
    try{
        const {email,password} = req.body

        const user = await User.findOne({email})
        if(!user){
            return res.status(404).send({message:"Student Not Found"})
        }

        const isPasswordValid =await bcrypt.compare(password,user.password)
        if(!isPasswordValid){
            res.send({message:"Invalid"})
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.send({message:"Log in Successfully",token:token})
    }catch(err){
        res.status(500).send({error:err.message})
    }
})

module.exports=router