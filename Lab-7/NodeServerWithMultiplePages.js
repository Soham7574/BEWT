const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader("content-type","text/html");
    if(req.url === "/"){
        res.statusCode=200
        res.end("<h1>Hello Form Home.</h1>")
    }
    else if(req.url === "/contact"){
        res.statusCode=200
        res.end("<h1>Hello Form Contact.</h1>")
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