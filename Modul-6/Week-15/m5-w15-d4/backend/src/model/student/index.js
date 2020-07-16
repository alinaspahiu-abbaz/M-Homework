const orm = require("../../db");
const Sequelize = require("sequelize");

const Project = orm.define(
  "projects",
  {
    projectid: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    repourl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    liveurl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    studentid: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Project;