const express = require('express')
const usersRoutes = require("./services/users")
const cors=require("cors")

const server = express()


server.use(cors())

server.use(express.json())
server.use('/users', usersRoutes)

//const port = process.env.PORT || 3333

server.listen(3030, () => {   console.log(`Server on port: 3001`)    })