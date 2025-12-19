const express = require('express')
const fs = require('fs')

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World")
})

// app.get('/about',(req,res)=>{
//     res.send("About Page")
// })

app.get('/about',(req,res)=>{
    (fs.readFile('../Lab-7/about.txt',(err,data)=>{
        if(err){
            res.send(err)
        }
        res.send(data)
    }))
})

// app.get('/contact',(req,res)=>{
//     res.send("Contact Page")
// })

app.get('/contact',(req,res)=>{
    (fs.readFile('../Lab-7/contact.txt',(err,data)=>{
        if(err){
            res.send(err)
        }
        res.send(data)
    }))
})

app.get('/page3',(req,res)=>{
    res.send("Page3 ")
})

app.get('/page4',(req,res)=>{
    res.send("Page4")
})

app.get('/page5',(req,res)=>{
    res.send("Page5")
})

app.use((req,res)=>{
    res.status(404)
    res.send("Page not found")
})

app.listen(3000,()=>{
    console.log("Server Started at @ 3000");
})