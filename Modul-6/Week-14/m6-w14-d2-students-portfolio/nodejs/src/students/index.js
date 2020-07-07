const express = require("express")
const fs = require("fs-extra")
const path = require ("path")
const uniqid = require("uniqid")
const studentSchema = require("./schema")

const studentsRouter = express.Router()


const readFile = (fileName) => {
    const buffer = fs.readFileSync(path.join(__dirname, fileName))
    const fileContent = buffer.toString()
    return JSON.parse(fileContent)
  }

const studentsDB = readFile("students.json")
const pathJoin = path.join(__dirname, "students.json")

//1. GET
studentsRouter.get("/", async(req, res) => {
   const students = await studentSchema.find(req.query)
   res.send(students)
})

// 2. GET
studentsRouter.get("/:id", async(req, res) => {
    const id = req.params.id
    const student = await studentSchema.findById(id)

    res.send(student)
})

// 3. POST
studentsRouter.post("/", async(req, res) => {
     const newUser = new studentSchema(req.body)
     const response = await newUser.save()  
     res.send(response)
  

})

// 4. PUT
studentsRouter.put("/:id", async(req, res) => {
  const student = await studentSchema.findByIdAndUpdate(req.params.id, req.body)
  res.send(student)
 })

// 5. DELETE
studentsRouter.delete("/:id", async(req,res) => {
  const student = await studentSchema.findByIdAndDelete(req.params.id)
  res.send("Deleted!" )
  
})

module.exports = studentsRouter