const express = require('express')

const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send(req.query)
})

app.post("/register",(req,res)=>{
    const {name,email,pass} = req.body
    res.send(`Name : ${name}   Email : ${email}   Pass : ${pass}`)
})

app.get("users/:name",(req,res)=>{
    res.send(req.params.name)
})

app.listen(3000,()=>{
    console.log("Server Started at @ 3000")
})