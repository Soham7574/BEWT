const express = require('express')
const router = express.Router()

const Faculty = require('../models/faculty')

router.get('/all',async(req,res)=>{
    try{
        const faculty = await Faculty.find()
        res.send({message:"Faculty Fetched",allFaculty:faculty})
    }catch(err){
        res.send({err})
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const faculty = await Faculty.findById(req.params.id)
        res.send({message:"Faculty Fetched",faculty:faculty})
    }catch(err){
        res.send({err})
    }
})

router.post('/add',async(req,res)=>{
    try{
        const {name,email,password,facultyId} = req.body
        const faculty = await Faculty.create({
            facultyId,
            name,
            email,
            password
        })
        res.send({message:"Faculty Added",newFaculty:faculty})
    }catch(err){
        res.send({err})
    }
})

router.patch('/update/:id',async(req,res)=>{
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

router.delete("/remove/:id",async(req,res)=>{
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

module.exports=router