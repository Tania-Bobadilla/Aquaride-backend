const express = require("express"); 
const {getMenClothes, createMenClothes} = require("../controllers/menClothesController")
// const auth = require("../middlewares/auth")

// Se instacia el router de express 
const menClothesRouter = express.Router();

menClothesRouter.route("/ropa_de_hombre")
    .get(getMenClothes) //.get(auth, getProducts) 

menClothesRouter.route("/crear_ropa_hombre")
    .post(createMenClothes)    
    
module.exports = menClothesRouter;