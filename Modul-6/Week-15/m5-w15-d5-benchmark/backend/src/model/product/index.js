const orm = require("../../db")
const Sequelize = require("sequelize")
const Review = require("../review")


// .define is the command to create the new schema
const Product = orm.define("Products",{
  p_id: {
    type: Sequelize.NUMBER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  price: {
    type: Sequelize.NUMBER,
    allowNull: false 
  },createdAt: {
    type: Sequelize.STRING,
    allowNull: false 
  },updatedAt: {
    type: Sequelize.STRING,
    allowNull: false 
  }
 },{
    timestamps: false  
  })

  Product.hasMany(Review, {
    foreignKey: "productId"
  })

module.exports = Product