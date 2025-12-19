// 1) Write a Node.js program using child_process.exec() to run the shell command to check the  current version of node. (A)

const child_process = require('child_process')

child_process.exec('node -v',(error,stdout,stderr) => {
    if(error){
        console.error(`Error : ${error}`)
        return;
    }
     if(stderr){
        console.error(`STD Error : ${error}`)
        return;
    }
    console.log(`Out Put : ${stdout}`)
})

