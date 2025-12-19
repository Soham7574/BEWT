const child_process = require('child_process')

child_process.exec('python p1.py',(error,stdout,stderr) => {
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