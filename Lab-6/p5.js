// 5) Write a program to delete a file named temp.txt using fs.unlink() and display success or error. (B)

const fs = require('fs');

fs.unlink('temp.txt',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Delete");
})