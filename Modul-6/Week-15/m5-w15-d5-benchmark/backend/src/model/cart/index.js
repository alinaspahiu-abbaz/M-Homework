const orm = require("../../db")
const  Sequelize  = require("sequelize")
const Book = require("../book")

const Cart = orm.define("shoppingcart", {
    cart_id: {
        type: Sequelize.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    p_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_id: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: "shoppingcart",
    freezeTableName: true
})

module.exports = Cart