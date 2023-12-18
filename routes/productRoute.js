const express = require("express"); 
const {getProducts, createProduct} = require("../controllers/productController")
const auth = require("../middlewares/auth")

// Se instacia el router de express (instaciamiento del metodo router que esta dentro de express)
const productRouter = express.Router();

productRouter.route("/products")
    .get(auth, getProducts)

productRouter.route("/createProduct")
    .post(createProduct)    
    


module.exports = productRouter;