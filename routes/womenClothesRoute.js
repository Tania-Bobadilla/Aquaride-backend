const express = require("express"); 
const {getWomenClothes, createWomenClothes, getWomenById, reduceStock} = require("../controllers/womenClothesController")

// Se instacia el router de express 
const womenClothesRouter = express.Router();

womenClothesRouter.route("/ropa_de_mujer")
    .get(getWomenClothes)

womenClothesRouter.route("crear_ropa_mujer")
    .post(createWomenClothes)    

womenClothesRouter.route("/ropa_de_mujer/:id")
    .get(getWomenById)
    
womenClothesRouter.route("/reduceStock")
    .put(reduceStock)
    
module.exports = womenClothesRouter;