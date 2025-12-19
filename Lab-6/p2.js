// 2) Use fs.readFileSync() to read info.txt and print the content, Compare execution with the asynchronous version. (A)

const fs = require('fs');

try{
    const data = fs.readFileSync('test.txt','utf-8');
    console.log(data)
}catch(err){    
    console.log("Error: ",err);
}