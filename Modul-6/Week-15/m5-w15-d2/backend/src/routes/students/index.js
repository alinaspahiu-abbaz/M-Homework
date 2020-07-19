const express = require("Express")
const db = require("../../db")

const studentRouter = express.Router()

studentRouter.get("/", async(req, res) =>{

    const response = await db.query('SELECT _id, name, surname, email, birthday, img FROM "Students"')
    res.send({
        rows: response.rows, 
        rowCount: response.rowCount
    })
})

module.exports = studentRouter

