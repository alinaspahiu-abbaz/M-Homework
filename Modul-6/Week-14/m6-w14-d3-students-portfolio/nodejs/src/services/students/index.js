const express = require("express")
const fs = require("fs-extra")
const path = require ("path")
const uniqid = require("uniqid")
const q2m = require("query-to-mongo")
const studentSchema = require("./schema")
const { parse } = require("path")

const studentsRouter = express.Router()


//1. GET all:
studentsRouter.get("/", async(req, res, next) => {
   
   const parsedQuery = q2m(req.query)
   console.log(parsedQuery)

   try{
       const students = await studentSchema.find(parsedQuery.criteria, parsedQuery.options.fields)
                   .sort(parsedQuery.options.sort)
                   .skip(parsedQuery.options.skip)
                   .limit(parsedQuery.options.limit)
       console.log("Done")
       res.send(students)
      }catch(error){
           next(error)
      }
})

// 2. GET one:
studentsRouter.get("/:id", async(req, res, next) => {
  try{
        const id = req.params.id
        const student = await studentSchema.findById(id)
      if(student){
          res.send(student)
         } else {
                 const error = new Error()
                 error.httpStatusCode = 404
                 next(error)
                }
      }catch(error){
           next(error)
          }
    

    res.send(student)
})

// 3. POST
studentsRouter.post("/", async(req, res, next) => {
    try{
        const newUser = new studentSchema(req.body)
        const response = await newUser.save()  
        res.send(response)
       } catch(error){
                       next(error)
                      }
})


// 4. PUT
studentsRouter.put("/:id", async(req, res, next) => {
  try{
       const student = await studentSchema.findByIdAndUpdate(req.params.id, req.body)
       console.log("Edited!", student)
       res.send(student)
     } catch(error){
        next(error)
     }
  })

// 5. DELETE
studentsRouter.delete("/:id", async(req,res, next) => {
  try{
       const student = await studentSchema.findByIdAndDelete(req.params.id)
       console.log("Deleted!")
       res.send("Deleted!")
     } catch(error){
          next(error)
        }
})

module.exports = studentsRouter