const mongoose = require("mongoose")
const UserSchema = require("../services/students/schema")
const ToDoListSchema = require("../services/projects/schema")

// users functions CRUD

getAllUsers = async (req, res) => {
    const users = await UserSchema.find({}).populate("todolist")
    res.status(200).send(users)
}
getUserById = async (req, res) => {
    const user = await UserSchema.findById(req.params.id)
    res.status(200).send(user)
}
addNewUser = async (req, res) => {
    const newUser = new UserSchema(req.body)
    const resp = await newUser.save()
    res.status(202).send(newUser)
}
editUserById = async (req, res) => {
    const newUser = req.body
    await UserSchema.findByIdAndUpdate(req.params.id, newUser)
    const user = await UserSchema.findById(req.params.id)
    res.status(200).send(user)
}
deleteUserById = async (req, res) => {
    const deletedUser = await UserSchema.findByIdAndDelete(req.params.id)
    res.status(200).send(deletedUser._id)
}

// to-do-list functions CRUD

getAllToDoList = async (req, res) => {
    const meetings = await ToDoListSchema.find({}).populate("todolist")
    res.status(200).send(meetings)
}
getToDoListById = async (req, res) => {
    const meeting = await ToDoListSchema.findById(req.params.id)
    res.status(200).send(meeting)
}
addNewToDoList = async (req, res) => {
    const newMeeting = new ToDoListSchema(req.body)
    const resp = await newMeeting.save()
    res.status(202).send(newMeeting)
}
editToDoListById = async (req, res) => {
    const newMeeting = req.body
    await ToDoListSchema.findByIdAndUpdate(req.params.id, newMeeting)
    const meeting = await ToDoListSchema.findById(req.params.id)
    res.status(200).send(meeting)
}
deleteToDoListByID = async (req, res) => {
    const deletedMeeting = await ToDoListSchema.findByIdAndDelete(req.params.id)
    res.status(200).send(deletedMeeting._id)
}

module.exports = {
    getAllUsers,
    getUserById,
    addNewUser,
    editUserById,
    deleteUserById,
    getAllToDoList,
    getToDoListById,
    addNewToDoList,
    editToDoListById,
    deleteToDoListByID
}