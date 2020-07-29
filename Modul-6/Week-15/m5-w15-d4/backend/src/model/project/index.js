const orm = require("../../db");
const Sequelize = require("sequelize");

const Project = orm.define(
  "Projects",
  {
    projectId: {
      type: Sequelize.NUMBER,
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
    repoUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    liveUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    creationDate: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    studentId: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Project;