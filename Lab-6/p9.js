// 9) Write a program that checks if the file config.json exists in the current directory using fs.existsSync() and prints the result. (B)

const fs = require('fs')

if(fs.existsSync('output.txt')){
    console.log("True");
}else{
    console.log("False");
}