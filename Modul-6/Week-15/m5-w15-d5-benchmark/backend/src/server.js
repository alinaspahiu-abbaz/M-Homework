const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const sequelize = require("./db")
const listEndpoints = require("express-list-endpoints")
const productsRouter = require("./routes/products") 
const cartsRouter = require("./routes/cart")

const reviewsRouter = require("./routes/reviews")


// to check out if it is working. Promisse
sequelize.authenticate()
         .then(() => console.log("It is working"))
         .catch((e)=>console.log(e))


const server = express()
server.use(cors())
server.use(express.json())


//routes:

server.use("/products", productsRouter)
server.use("/reviews", reviewsRouter)
server.use("/cart", cartsRouter)


console.log(listEndpoints(server))



server.listen(process.env.PORT || 4002,
    ()=> console.log(process.env.PORT || 4002))