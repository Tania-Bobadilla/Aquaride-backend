const express = require("express"); 
const {getAccesories, createAccesory} = require("../controllers/accesoriesController")
// const auth = require("../middlewares/auth")

// Se instacia el router de express 
const accesoriesRouter = express.Router();

accesoriesRouter.route("/accesorios")
    .get(getAccesories) //.get(auth, getProducts) 

accesoriesRouter.route("/crear_accesorio")
    .post(createAccesory)    
    
module.exports = accesoriesRouter;