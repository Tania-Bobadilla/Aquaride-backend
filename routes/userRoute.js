const express = require("express"); 
const {createUser, loginUser, getUser, editUser, deleteUser} = require("../controllers/userController")
const auth = require("../middlewares/auth")


const userRouter = express.Router();

//ruta registro de usuario
userRouter.route("/createUser")
    .post(createUser) //auth, creatUser  
    .get(auth, getUser)   

//ruta de login/acceso de usuario    
userRouter.route("/login")    
    .post(loginUser)

userRouter.route('/user/:id')
    .put(auth, editUser)
    .delete(auth, deleteUser)    


module.exports = userRouter;