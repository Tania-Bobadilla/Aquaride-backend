const express = require("express"); 
const {createUser, loginUser, getUser} = require("../controllers/userController")
const auth = require("../middlewares/auth")

//se instacia el router de express (instaciamiento del metodo router que esta dentro de express)
const userRouter = express.Router();

//ruta registro de usuario
userRouter.route("/createUser")
    .post(createUser) //auth, creatUser  
    .get(auth, getUser)   

//ruta de login/acceso de usuario    
userRouter.route("/login")    
    .post(loginUser)


module.exports = userRouter;