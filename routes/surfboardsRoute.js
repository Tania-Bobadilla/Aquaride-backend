const express = require("express"); 
const {getSurfboards, createSurfboard, getSurfById, reduceStock} = require("../controllers/surfboardsController")
// const auth = require("../middlewares/auth")

// Se instacia el router de express 
const surfboardsRouter = express.Router();

surfboardsRouter.route("/tablas_de_surf")
    .get(getSurfboards) //.get(auth, getProducts) 

surfboardsRouter.route("/crear_tablas_de_surf")
    .post(createSurfboard)    

surfboardsRouter.route("/tablas_de_surf/:id")
    .get(getSurfById)

surfboardsRouter.route("/reduceStock")
    .put(reduceStock)

module.exports = surfboardsRouter;