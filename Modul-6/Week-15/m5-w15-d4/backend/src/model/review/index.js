const Sequelize = require("sequelize")
const {NUMBER, STRING} = require("sequelize")
const orm = require("../../db")

const Review = orm.define("reviews",{
    revId:{
        type: NUMBER,
        primaryKey: true
    },
    studentId:{
        type: NUMBER,
        allowNull: false
    },
    projectId:{
        type: NUMBER,
        allowNull: false
    },
    comment:{
        type: STRING,
        allowNull: false
    },
    rate:{
        type: NUMBER,
        allowNull: false
    }


},{
    timestamps: false
})

module.exports = Review