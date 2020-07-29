const express = require("express")
const Student = require("../../model/student")

const router = express.Router()

// 1. Getin all Students:
router.get("/", async(req, res) => {
 
  try{
      const limit = req.query.limit || 10
      const offset = req.query.offset || 0
      const order = req.query.order || "asc"

      delete req.query.limit
      delete req.query.offset
      delete req.query.order



       const students = await Student.findAll({
         where: { ... req.query },
         offset: offset,
         limit: limit,
         order: [
          ["name", order]
         ]
        
       })

       res.send(students)
  }catch(e){
    console.log(e)
    res.status(500).send(e)
  }
})

//2. Getting just one Project:
router.get("/:studentId", async(req, res) => {
  try{
       const student = await Student.findOne({
         where: {
                studentId: req.params.studentId
               }
      })
       if(student)
            res.send(student)
       else 
            res.status(404).send("Not Found!")

     }catch(e){
         console.log(e)
        res.status(500).send(e)
  }
})

// 3. POST
router.post("/", async(req, res)=>{
  try{
       const student = await Student.create(req.body)
       res.send(student)
     
  } catch(e){
         console.log(e)
        res.status(500).send(e)
  }

})

// 4. PUT
router.put("/:studentId", async(req, res) => {
  try{
    const student = await Student.update({
      ...req.body
    },{
      where: {studentId: req.params.studentId}
    })

    if(student[0] === 1)
        res.send("Updated!")
    else 
        res.status(404).send("Not Found!")

  } catch(e){
    console.log(e)
   res.status(500).send(e)
}
})

// 5. DELETE:
router.delete("/:studentId", async(req, res) =>{
  try{
        const result = await Student.destroy({
          where: {
            studentId: req.params.studentId
          }
        })

    if(result === 1)
        res.send("Deleted!")
    else 
        res.status(404).send("Not Found!")
      }catch(e){
           console.log(e)
           res.status(500).send(e)
}
})

module.exports = router