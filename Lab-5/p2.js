// 2) Write a program that uses child_process.spawn() to run the command to print files and folders of current directory. (B)

const child_process = require('child_process')

const child = child_process.spawn("cmd.exe",["/C","dir","/s","C:\\"])

child.stderr.on("data",(data)=>{
    console.log(`Stderr : ${data}`)
})

child.stdout.on("data",(data)=>{
    console.log(`Stderr : ${data}`)
})

child.on("close",(data)=>{
    console.log(`Error : ${data}`)
})