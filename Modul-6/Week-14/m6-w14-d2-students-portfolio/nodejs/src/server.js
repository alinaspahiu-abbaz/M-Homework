const express = require("express")
const cors = require("cors")
const path = require("path")
const studentsRouter = require("./students")
const mongoose = require("mongoose")


const server = express()

server.use(express.json())

server.use(cors())

server.use("/students", studentsRouter)

mongoose.connect("mongodb://localhost:27017/m6-w14-d2-hm-student-portofolio",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then (

server.listen(3031, ()=>{
    console.log("Find me on port 3031!")
})
).catch((err) => console.log(err))
