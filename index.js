const express = require('express')
const mongoose = require('mongoose')
const app = express()

const dotenv = require('dotenv')
dotenv.config();

app.use(express.json())

mongoose.connect(process.env.server).then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log({err})
})

const studentRout = require('./routers/student')
const facultyRout = require('./routers/faculty')
const productRout = require('./routers/product')

app.use("/student",studentRout)
app.use("/faculty",facultyRout)
app.use("/product",productRout)

app.listen(3000,()=>{
    console.log("Server Started at @ 3000")
});