const orm = require("../../db")
const sequelize = require("sequelize")
const { Sequelize } = require("sequelize")

// .define is the command to create the new schema
const Project = orm.define("Projects",{
  projectId: {
    type: Sequelize.NUMBER,
    primaryKey: true
  },
  repoUrl: {
    type: Sequelize.STRING,
    allowNull: true 
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  liveUrl: {
    type: Sequelize.STRING,
    allowNull: true 
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  creationDate: {
    type: Sequelize.STRING,
    allowNull: false 
  }
 },{
    timestamps: false  
  })

module.exports = Project