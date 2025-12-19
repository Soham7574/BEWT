const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader("content-type","text/html");
    res.statusCode=200;
    res.end("<h1>Hello From Node Server.</h1>")
})

server.listen(3000,()=>{
    console.log("Server Started at @ 3000")
})