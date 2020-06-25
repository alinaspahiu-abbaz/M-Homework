const express = require("express")
const fs = require("fs")
const path = require("path")
const uniqid = require("uniqid")

const router = express.Router()

//making a function
const readFile = (fileName) => {
    const buffer = fs.readFileSync(path.join(__dirname, fileName))
    return JSON.parse(buffer.toString())

}

router.get("/", (req, res) => {
    const usersDB = readFile('users.json')
   
    if(req.query && req.query.name) {
        const filteredUsers = usersDB.filter((user) => user.hasOwnProperty('name') && user.name === req.query.name)

        res.send(filteredUsers)
    } else {    res.send(usersDB)   }

router.get("/:id", (req, res) => {
    req.params.id = readFile('users.json')
    const retrivedUser = usersDB.filter(user =>user.id === req.params.id)
    res.send(retrivedUser)

})

    

})

router.post("/", (req, res) => {
    const usersDB = readFile("users.json")
    const newUser = {...req.body}

    usersDB.push(newUser)
    fs.writeFileSync(path.join(__dirname, 'users.json'), usersDB)
    res.status(201).send(newUser)
})


module.exports = router