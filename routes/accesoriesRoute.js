const express = require("express"); 
const {getAccesories, createAccesory, getAccesoryById, reduceStock} = require("../controllers/accesoriesController")


// Se instacia el router de express 
const accesoriesRouter = express.Router();

accesoriesRouter.route("/accesorios")
    .get(getAccesories)

accesoriesRouter.route("/crear_accesorio")
    .post(createAccesory)    
    
accesoriesRouter.route("/accesorios/:id")
    .get(getAccesoryById)

accesoriesRouter.route("/reduceStock")
    .put(reduceStock)
    
module.exports = accesoriesRouter;