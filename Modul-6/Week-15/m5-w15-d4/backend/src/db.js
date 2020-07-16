const Sequelize = require("sequelize")

const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORDS, {
    host: process.env.PGHOST,
    dialect: "postgres",
    pool: {// optional
        min: 0,
        max:10
    }
})

module.exports = sequelize