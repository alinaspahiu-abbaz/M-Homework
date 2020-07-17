const express = require("express")
const Product = require("../../model/product")
const Review = require("../../model/review")
const multer = require("multer")
const {join} = require("path")
const fs = require("fs-extra")

const router = express.Router()

// -- CRUD for Product - GET, POST, PUT, DELETE --

// 1. Getin all Students:
router.get("/", async(req, res) => {
  //http://localhost:4000/products
 
  try{
      const limit = req.query.limit || 10
      const offset = req.query.offset || 0
      const order = req.query.order || "asc"

      delete req.query.limit
      delete req.query.offset
      delete req.query.order



       const products = await Product.findAll({
         where: { ... req.query },
         offset: offset,
         limit: limit,
         order: [
          ["name", order],
          ["category", order]
         ]
        
       })

       res.send(products)
  }catch(e){
    console.log(e)
    res.status(500).send(e)
  }
})

//2. Getting just one Project:
router.get("/:productId", async(req, res) => {
  //http://localhost:4000/products/7
  try{
       const product = await Product.findOne({
         where: {
                p_id: req.params.productId
               },
               include: Review
      })
       if(product)
            res.send(product)
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
       const product = await Product.create(req.body)
       res.send(product)
     
  } catch(e){
         console.log(e)
        res.status(500).send(e)
  }

})

// 4. PUT
router.put("/:productId", async(req, res) => {
  try{
    const product = await Product.update({
      ...req.body
    },{
      where: {p_id: req.params.productId}
    })

    if(product[0] === 1)
        res.send("Updated!")
    else 
        res.status(404).send("Not Found!")

  } catch(e){
    console.log(e)
   res.status(500).send(e)
}
})

// 5. DELETE:
router.delete("/:productId", async(req, res) =>{
  try{
        const result = await Product.destroy({
          where: {
            p_id: req.params.productId
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


// --- UPLOAD IMAGE ---

// 6. Upload Single Image:
const upload = multer({})

const studentsFolderPath = join(__dirname, "../../../public/img")
router.post("/upload", upload.single("avatar"), async(req, res) =>{

  try{
      await fs.writeFile( join(studentsFolderPath, req.file.originalname), req.file.buffer)
  } catch(error) {}
  res.send("OK")
} )


// 7. Upload More than One Image:
router.post("/uploadMultiple", upload.array("avatars"), async(req, res, next) => {
  //req.files <-- here is where we're gonna find the files.
 // console.log(req.files)
  try{
  const arrayOfPromises = req.files.map( (file) => 
  fs.writeFile(join(studentsFolderPath, file.originalname), file.buffer))

  await Promise.all(arrayOfPromises)
  res.send("Done")
  }catch(error){
      console.log(error)
  }
})


module.exports = router