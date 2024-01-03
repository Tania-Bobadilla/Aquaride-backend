const express = require("express"); 
const {getKidsClothes, createKidsClothes, getKidById, reduceStock} = require("../controllers/kidsClothesController")

// Se instacia el router de express 
const kidsClothesRouter = express.Router();

kidsClothesRouter.route("/ropa_de_ninos")
    .get(getKidsClothes)

kidsClothesRouter.route("/ropa_de_ninos/:id")
    .get(getKidById)

kidsClothesRouter.route("/crear_ropa_ninos")
    .post(createKidsClothes)    
    
kidsClothesRouter.route("/reduceStock")
    .put(reduceStock)
    
module.exports = kidsClothesRouter;