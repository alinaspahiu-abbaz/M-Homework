const express = require("express")
const todoCtrl = require("../utilitis")

const router = express.Router()


router.get("/", todoCtrl.getAllToDoList)
router.get("/:id", todoCtrl.getToDoListById)
router.post("/", todoCtrl.addNewToDoList)
router.put("/:id", todoCtrl.editToDoListById)
router.delete("/:id", todoCtrl.deleteToDoListByID)


module.exports = router