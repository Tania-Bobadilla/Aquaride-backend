const express = require("express"); 
const {getProducts, createProduct} = require("../controllers/productController")
const auth = require("../middlewares/auth")

// Se instacia el router de express 
const productRouter = express.Router();

productRouter.route("/products")
    .get(getProducts) //.get(auth, getProducts) 

productRouter.route("/createProduct")
    .post(auth, createProduct)
    

module.exports = productRouter;