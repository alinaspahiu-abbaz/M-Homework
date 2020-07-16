const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const db = require("./db")
const studentRouter = require("./routes/students")

const server = express()
server.use(express.json())
server.use(cors())


server.get("/", (req, res) => {
res.send("The server is running")
})

server.use("/students", studentRouter)


server.listen(3028 || 3456, ()=>
console.log("Runing on: 3028 " ))