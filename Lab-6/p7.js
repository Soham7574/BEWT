// 7) Write a program to list all files in a folder called documents/ using fs.readdir() and print the file names one by one. (B)

const fs = require('fs')

fs.readdir('.',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});