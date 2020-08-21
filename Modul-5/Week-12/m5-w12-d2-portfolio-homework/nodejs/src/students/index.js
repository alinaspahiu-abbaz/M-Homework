const express = require("express")
const fs = require("fs-extra")
const path = require ("path")
const uniqid = require("uniqid")

const studentsRouter = express.Router()


const readFile = (fileName) => {
    const buffer = fs.readFileSync(path.join(__dirname, fileName))
    const fileContent = buffer.toString()
    return JSON.parse(fileContent)
  }

const studentsDB = readFile("students.json")
const pathJoin = path.join(__dirname, "students.json")

//1. GET all students
studentsRouter.get("/", (req, res) => {
    res.status(200).send(studentsDB)
    console.log(studentsDB)
})

// 2. GET only one student
studentsRouter.get("/:sid", (req, res) => {
    const requiredStudent = studentsDB.filter(s => s.id === req.params.sid)

    res.send(requiredStudent)
})

// 3. POST
studentsRouter.post("/", (req, res) => {
    const newStudent = {...req.body, id:uniqid()}
    studentsDB.push(newStudent)

    fs.writeFileSync(pathJoin, JSON.stringify(studentsDB))
    res.status(201).send(newStudent)
})

// 4. PUT
studentsRouter.put("/:sid",(req, res) => {
  const newDB = studentsDB.filter((s) => s.id !== req.params.sid)
  const modified = {...req.body, id: req.params.sid}

  newDB.push(modified)
  fs.writeFileSync(pathJoin, JSON.stringify(newDB))
  res.status(200).send(modified)
})

// 5. DELETE
studentsRouter.delete("/:sid", (req,res) => {
  const filteredStudentsArray = studentsDB.filter( s => s.id !== req.params.sid)
  fs.writeFileSync(pathJoin, JSON.stringify(filteredStudentsArray))
  res.send("Deleted!")
})

module.exports = studentsRouter
