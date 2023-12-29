const express = require("express"); 
const {getProducts, createProduct, getProductById, editProduct, deleteProduct, reduceStock } = require("../controllers/productController")
const {auth, admin} = require("../middlewares/auth")

// Se instacia el router de express 
const productRouter = express.Router();

productRouter.route("/products")
    .get(getProducts) //.get(auth, getProducts) 

productRouter.route("/createProduct")
    .post(admin, auth, createProduct)

productRouter.route("/product/:id")
    .get(getProductById)
    .put(auth, admin, editProduct)
    .delete(auth, admin, deleteProduct)

productRouter.route("/reduceStock")
    .put(reduceStock)    
    

module.exports = productRouter;

