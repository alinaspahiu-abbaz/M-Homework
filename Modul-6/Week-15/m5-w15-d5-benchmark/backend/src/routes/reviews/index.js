const express = require("express")
const Review = require("../../model/review")

const router = express.Router()

router.get("/:p_id", async(req, res)=>{
    //http://localhost:4000/reviews/6
    try{
        res.send(await Review.findAll({
            where: {
                productId: req.params.p_id
            }
        }))

    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})

router.post("/:productId", async(req, res) =>{
    //http://localhost:4000/reviews/6
    try{
        res.send(await Review.create({
            ... req.body,
            productId: req.params.productId
        }))
        

    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
    
})

router.put("/:r_id", async(req, res) => {
    //http://localhost:4000/reviews/5
    try{
        delete req.body.r_id
        delete req.body.product_id

        const result = await Review.update({
            ... req.body
        
        },{
            where: { r_id : req.params.r_id}
        })

        if(result[0] === 1) 
             res.send("OK")
        
        else 
        res.status(404).send("Not Found")
        

    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }

})

router.delete("/:r_id", async (req, res)=>{
   // http://localhost:4000/reviews/3
    try{
        const result = await Review.destroy({
            where: { r_id: req.params.r_id } })
        res.send("DELETED!")
    }
    catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})
module.exports = router