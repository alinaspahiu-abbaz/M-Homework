const express = require("express")
const db = require("../../sqldb")


const router = express.Router()



router.get("/:userId", async (req, res) => {
    const response = await orm.query(`SELECT asin, title, img, category, price as unitary_price, COUNT(*) As quantity, COUNT(*) * price as total
                                     FROM shoppingcart JOIN "Books" ON shoppingcart.bookid = "Books".asin
                                     WHERE userid = ?
                                     GROUP BY asin
                                     `, {
                                       replacements: [req.params.userId],
                                       type: Sequelize.QueryTypes.SELECT
                                   }
                                         ) 

   res.send(response)              
})



module.exports = router