const express = require("express"); 
const {getClothes, createMenClothes} = require("../controllers/menClothesController")
// const auth = require("../middlewares/auth")

// Se instacia el router de express 
const menClothesRouter = express.Router();

menClothesRouter.route("/ropa_de_hombre")
    .get(getClothes) //.get(auth, getProducts) 

menClothesRouter.route("")
    .post(createMenClothes)    
    
module.exports = menClothesRouter;