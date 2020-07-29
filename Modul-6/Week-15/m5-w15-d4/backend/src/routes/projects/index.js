const express = require("express")
const Project = require("../../model/project")

const router = express.Router()

// 1. Getin all Projects:
router.get("/", async(req, res) => {
  try{
      const limit = req.query.limit || 10
      const offset = req.query.offset || 0
     // const order = req.query.order || "asc"

      delete req.query.limit
      delete req.query.offset
    //  delete req.query.order



       const projects = await Project.findAll({
         where: { ... req.query },
         offset: offset,
         limit: limit
        //  order: [
        //   ["name", order]
        //  ]
        
       })

       res.send(projects)
  }catch(e){
    console.log(e)
    res.status(500).send(e)
  }
})

//2. Getting just one Project:
router.get("/:projectId", async(req, res) => {
  try{
       const project = await Project.findOne({
         where: {
                projectId: req.params.projectId
               }
      })
       if(project)
            res.send(project)
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
       const project = await Project.create(req.body)
       res.send(project)
     
  } catch(e){
         console.log(e)
        res.status(500).send(e)
  }

})

// 4. PUT
router.put("/:projectId", async(req, res) => {
  try{
    const project = await Project.update({
      ...req.body
    },{
      where: {projectId: req.params.projectId}
    })

    if(project[0] === 1)
        res.send("Updated!")
    else 
        res.status(404).send("Not Found!")

  } catch(e){
    console.log(e)
   res.status(500).send(e)
}
})

// 5. DELETE:
router.delete("/:projectId", async(req, res) =>{
  try{
        const result = await Project.destroy({
          where: {
            projectId: req.params.projectId
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