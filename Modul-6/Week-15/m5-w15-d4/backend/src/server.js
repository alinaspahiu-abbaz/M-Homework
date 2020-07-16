const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const sequelize = require("./db")
const projectRouter = require("./routes/projects")

// to check out if it is working. Promisse
sequelize.authenticate()
         .then(() => console.log("It is working"))
         .catch((e)=>console.log(e))

const server = express()
server.use(cors())
server.use(express.json())

//routes:
server.use("/projects", projectRouter)



server.listen(process.env.PORT || 4002,
    ()=> console.log(process.env.PORT || 4002))