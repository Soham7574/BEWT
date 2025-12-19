// 3) Create a program that writes the text into a file named output.txt. (A)

const fs = require('fs');

fs.writeFile('output.txt','Soham Joshi',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Write")
});