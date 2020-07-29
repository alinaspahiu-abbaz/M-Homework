const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const sequelize = require("./db")
const studenstRouter = require("./routes/students") 
const projectsRouter = require("./routes/projects")
const reviewsRouter = require("./routes/reviews")


// to check out if it is working. Promisse
sequelize.authenticate()
         .then(() => console.log("It is working"))
         .catch((e)=>console.log(e))


const server = express()
server.use(cors())
server.use(express.json())


//routes:
server.use("/projects", projectsRouter)
server.use("/students", studenstRouter)
server.use("/reviews", reviewsRouter)



server.listen(process.env.PORT || 4002,
    ()=> console.log(process.env.PORT || 4002))