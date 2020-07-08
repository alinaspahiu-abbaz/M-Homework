const {Schema, model} = require("mongoose")
const v = require("validator")

const studentSchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 15,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        lowercase:true,
        validate:{
            validator: async(value) => {
                if(!v.isEmail(value)){
                    throw new Error("Email is not valid!")
                } else {
                    const checkEmail = await studentModel.findOne({email: value})
                    if(checkEmail){
                        throw new Error("This email is already used! Try another one!")
                    }
                }
            }
        }
    },
    year:{
        type: Number,
        required: true,
        min: 1970,
        max: 2020
    },
    
    country:String,
    img: String
})
const studentModel = model("student", studentSchema)
module.exports = studentModel
