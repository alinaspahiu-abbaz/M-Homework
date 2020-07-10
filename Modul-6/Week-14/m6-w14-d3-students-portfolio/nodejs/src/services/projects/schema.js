const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Projects = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        userId: [{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }]
    }
)

const ProjectsModel = mongoose.model("Projects", Projects)

module.exports = ProjectsModel