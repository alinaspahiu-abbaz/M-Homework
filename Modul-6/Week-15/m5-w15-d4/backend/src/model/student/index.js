const orm = require("../../db")
const sequelize = require("sequelize")
const { Sequelize } = require("sequelize")

// .define is the command to create the new schema
const Student = orm.define("Students",{
  studentId: {
    type: Sequelize.NUMBER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  surname: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  birthday: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  img: {
    type: Sequelize.STRING,
    allowNull: false 
  }
 },{
    timestamps: false  
  })

module.exports = Student