const fs = require('fs');
let data
try{
    data = fs.readFileSync('test.txt','utf-8');
}catch(err){
    console.log("Error: ",err);
}


fs.appendFile('output1.txt',data, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Append")
});