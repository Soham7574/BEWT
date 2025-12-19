// 8) Write a program that copies a file named source.txt to a new file named backup.txt using fs.copyFile(). (C)

const fs = require('fs')

fs.copyFile('test.txt','output.txt',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Copy");
});