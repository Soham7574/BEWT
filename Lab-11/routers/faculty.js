const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()
const verifyToken = require('../Middleware/Verify')

const Faculty = require('../models/faculty')

router.get('/all',verifyToken,async(req,res)=>{
    try{
        const faculty = await Faculty.find()
        res.send({message:"Faculty Fetched",allFaculty:faculty})
    }catch(err){
        res.send({err})
    }
})

router.get('/:id',verifyToken,async(req,res)=>{
    try{
        const faculty = await Faculty.findById(req.params.id)
        res.send({message:"Faculty Fetched",faculty:faculty})
    }catch(err){
        res.send({err})
    }
})

router.post('/add',verifyToken,async(req,res)=>{
    try{
        const {name,email,password,facultyId} = req.body
        const hashpassword = await bcrypt.hash(password,10)
        const faculty = await Faculty.create({
            facultyId,
            name,
            email,
            password:hashpassword
        })
        res.send({message:"Faculty Added",newFaculty:faculty})
    }catch(err){
        res.send({err})
    }
})

router.patch('/update/:id',verifyToken,async(req,res)=>{
    try{
        const faculty = await Faculty.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            {
                new:true
            }
        )  
        if(!faculty){
            return res.status(404).send({message:"Faculty not found"})
        }
        res.send({ message: "Faculty Updated", updatedFaculty: faculty });
    }catch(err){
        res.send({err})
    }
})

router.delete("/remove/:id",verifyToken,async(req,res)=>{
    try{
        const faculty = await Faculty.findByIdAndDelete(req.params.id)
        if(!faculty){
            return res.status(404).send({message:"Faculty Not Found"})
        }
        res.send({message:"Faculty Removed",removedFaculty:faculty})
    }catch(err){
        res.send({err})
    }
})

//JWT


router.post('/login',async(req,res)=>{
    try{
        const {email,password} = req.body

        const faculty = await Faculty.findOne({email})
        if(!faculty){
            return res.status(404).send({message:"Faculty Not Found"})
        }

        const isPasswordValid =await bcrypt.compare(password,faculty.password)
        if(!isPasswordValid){
            res.send({message:"Invalid"})
        }

        const token = jwt.sign(
            { id: faculty.id },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.send({message:"Log in Successfully",token:token})
    }catch(err){
        res.status(500).send({error:err.message})
    }
})

module.exports=router