// 4) Create a program that appends the text into a file named output.txt. (A)

const fs = require('fs');

fs.appendFile('output.txt',' rajkot darshan', (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Append")
});