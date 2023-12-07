const express = require("express"); 
const createUser = require("../controllers/userController")

//se instacia el router de express (instaciamiento del metodo router que esta dentro de express)
const userRouter = express.Router();

userRouter.route("/createUser")
    .post(createUser)    
    


module.exports = userRouter;