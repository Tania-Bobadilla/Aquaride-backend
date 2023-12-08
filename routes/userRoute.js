const express = require("express"); 
const {createUser, loginUser} = require("../controllers/userController")

//se instacia el router de express (instaciamiento del metodo router que esta dentro de express)
const userRouter = express.Router();

//ruta registro de usuario
userRouter.route("/createUser")
    .post(createUser)    

//ruta de login/acceso de usuario    
userRouter.route("/login")    
    .post(loginUser)


module.exports = userRouter;