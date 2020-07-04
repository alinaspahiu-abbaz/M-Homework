const express = require("express")
const cors = require("cors")
const path = require("path")
const studentsRouter = require("./students")


const server = express()

server.use(express.json())

server.use(cors())

server.use("/students", studentsRouter)

server.listen(3031, ()=>{
    console.log("Find me on port 3031!")
})