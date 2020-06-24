const express = require('express')
const usersRoutes = require("./services/users")

const server = express()

server.use('/users', usersRoutes)

//const port = process.env.PORT || 3333

server.listen(3001, () => {   console.log(`Server on port: 3001`)    })