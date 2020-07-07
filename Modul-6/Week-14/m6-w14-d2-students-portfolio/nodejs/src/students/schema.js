const {Schema, model} = require("mongoose")

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        lowercase:true
    },
    dateOfBirth: String,
    country:String
})

module.exports = model("Student", studentSchema)
