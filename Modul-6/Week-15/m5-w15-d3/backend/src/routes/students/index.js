const express = require("Express")
const db = require("../../db")
const { query } = require("../../db")
const { Query } = require("pg")
const { check, validationResult, sanitizeBody } = require("express-validator")

const studentRouter = express.Router()


// 1. GET all Students:
studentRouter.get("/", async(req, res) =>{

    const response = await db.query('SELECT _id, name, surname, email, birthday, img FROM "Students"')
    res.send({
        rowCount: response.rowCount,
        rows: response.rows
       
    })
})

// 2. GET Students by ID:
studentRouter.get("/:_id", async(req, res)=>{
    const response = await db.query(' Select _id, name, surname, email, birthday, img FROM "Students" WHERE _id = $1', [req.params._id] )

    if(response.rowCount === 0)
       { 
        return res.status(404).send("Not Found!")
      } else { 
          res.send(response.rows[0])
      }
})

// 3. POST Students:
studentRouter.post("/", async(req, res) => {
    const response = await db.query(`INSERT INTO "Students" (_id, name, surname, email, birthday, img) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`, [req.body._id, req.body.name, req.body.surname, req.body.email, req.body.birthday, req.body.img])

    console.log(response.rows[0])
    res.send(response.rows[0])
})

// 4. PUT Students:
studentRouter.put("/:_id", async(req, res) => {
    try{
         let params = []
         let query = 'UPDATE "Students" SET '
         for(bodyParamName in req.body){

            query += 
            (params.length > 0 ? ", ": '') +
            bodyParamName + " = $" + (params.length + 1)
          //
          params.push(req.body[bodyParamName])
       }
       params.push(req.params._id)
       query +=" WHERE _id = $" +(params.length) + " RETURNING *"
       console.log(query)

       const result = await db.query(query, params)
       
       
       

        if(result.rowCount === 0)
        return res.status(404).send("Not Found!")
        
            console.log(result.rows[0]) 
            res.send(result.rows[0])
    } catch(ex){
        console.log(ex)
        res.status(500).send(ex)
    }
})

// 5. DELETE
studentRouter.delete("/:_id", async (req, res) => {
    const response = await db.query(`DELETE FROM "Students" WHERE _id = $1`, [ req.params._id ])

    if (response.rowCount === 0)
        return res.status(404).send("Not Found")
    
    res.send("OK")
})

module.exports = studentRouter

