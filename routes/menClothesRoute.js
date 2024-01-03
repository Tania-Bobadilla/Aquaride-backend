const express = require("express"); 
const {getMenClothes, createMenClothes, getMenById, reduceStock} = require("../controllers/menClothesController")

// Se instacia el router de express 
const menClothesRouter = express.Router();

menClothesRouter.route("/ropa_de_hombre")
    .get(getMenClothes)

menClothesRouter.route("/ropa_de_hombre/:id")
    .get(getMenById)

menClothesRouter.route("/crear_ropa_hombre")
    .post(createMenClothes)        

menClothesRouter.route("/reduceStock")
    .put(reduceStock)

module.exports = menClothesRouter;