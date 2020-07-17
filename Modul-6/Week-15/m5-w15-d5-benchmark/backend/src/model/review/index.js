const Sequelize = require("sequelize")
const {NUMBER, STRING} = require("sequelize")
const orm = require("../../db")

const Review = orm.define("Reviews",{
    r_id:{
        type: NUMBER,
        primaryKey: true,
        autoIncrement: true
        
    },
    productId:{
        type: NUMBER,
        allowNull: false
    },
    createdAt:{
        type: STRING,
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