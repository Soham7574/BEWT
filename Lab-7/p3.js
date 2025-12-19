// Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using http core module (C) 

const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{
    res.setHeader("content-type","text/html");
    if(req.url === "/"){
        res.statusCode=200
        
    }
    else if(req.url === "/contact"){
        res.statusCode=200
        fs.readFile("contact.txt",(err,data)=>{
            if(err){
                res.end(err)
            }
            else{
                res.end(data)
            }
        })
    }
    else if(req.url === "/about"){
        res.statusCode=200
        res.end("<h1>Hello Form About.</h1>")
    }
    else {
        res.statusCode=404
        res.end("Page not found.")
    }
})

server.listen(3000,()=>{
    console.log("Server Started at @ 3000")
})