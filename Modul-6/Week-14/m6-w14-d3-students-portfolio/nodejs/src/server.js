const express = require("express")
const cors = require("cors")
const path = require("path")
const listEndpoints = require("express-list-endpoints")
const mongoose = require("mongoose")
const studentsRouter = require("./services/students")
const projectsRouter = require("./services/projects")


const server = express()

server.use(express.json())

server.use(cors())



server.use("/students", studentsRouter)
server.use("/projects", projectsRouter)

mongoose.connect("mongodb://localhost:27017/m6-w14-d2-hm-student-portofolio",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then (

server.listen(3033, ()=>{
    console.log("Find me on port 3033!")
})
).catch((err) => console.log(err))