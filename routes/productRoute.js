const express = require("express"); 
const getProduct = require("../controllers/productController")

//se instacia el router de express (instaciamiento del metodo router que esta dentro de express)
const productRouter = express.Router();

productRouter.route("/products")
    .get(getProduct);
    


module.exports = productRouter;