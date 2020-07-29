const express = require("express")
const Review = require("../../model/review")

const router = express.Router()

router.get("/:projectId", async(req, res)=>{
    try{
        res.send(await Review.findAll({
            where: {
                projectId: req.params.projectId
            }
        }))

    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})

router.post("/:projectId", async(req, res) =>{
    
})

module.exports = router