// 10) Write a program using fs.watch() to monitor changes in watchme.txt. Whenever file content changes, print: “File Changed” (C) 

const fs = require('fs')

fs.watch('.',(eventType, filename)=>{
    if(filename == 'output.txt'){
        console.log(`eventType : ${eventType}   FileName : ${filename}`)
    }
})