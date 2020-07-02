const express = require("express")
const fs = require("fs")
const path = require("path")
const uniqid = require("uniqid")

const router = express.Router()

//making a function
const readFile = (fileName) => {
    const buffer = fs.readFileSync(path.join(__dirname, fileName))
    const bufferToString = buffer.toString()
    return JSON.parse(bufferToString)
}

const usersDB = readFile("users.json")
const pathJoin = path.join(__dirname, "users.json")

// GET all:

router.get("/", (req, res) => {
    res.status(200).send(usersDB)
    console.log("OK")
})


//GET only one:
router.get("/:uid", (req, res) => {
   const user = usersDB.find(user=>user.id===req.params.uid)

   res.status(200).send(user)
   console.log(user)
})

//POST:
router.post("/",(req, res) => {
    const newUser = {...req.body, id: uniqid()}
    usersDB.push(newUser)

    fs.writeFileSync(pathJoin, JSON.stringify(usersDB))
    res.status(201).send(newUser)
    console.log(newUser)
})

//PUT:
router.put("/:uid",(req, res) =>{
    const newDB = usersDB.filter(user=>user.id !== req.params.uid)
    const modified = {...req.body, id: req.params.uid}
    newDB.push(modified)

    fs.writeFileSync(pathJoin, JSON.stringify(newDB))
    res.send(modified)
    console.log(modified)
})


//DELETE:
router.delete("/:uid",(req, res) =>{
    const filteredUsersArray = usersDB.filter(user=>user.id !== req.params.uid)
    fs.writeFileSync(pathJoin, JSON.stringify(filteredUsersArray))

    res.status(202).send(filteredUsersArray)
    console.log(filteredUsersArray)
})
    
   
    




module.exports = router