// 6) Write a program that creates a folder named my-data using fs.mkdir(). If the folder already exists, show an appropriate message. (B) 

const fs = require('fs');

fs.mkdir('my-data',(err)=>{
    if(err){
        if(err.code === 'EEXIST'){
            console.log("Dir already Exist")
            return;
        }
        else{
            console.log(err);
            return;
        }
    }
    console.log("Dir")
});