const {expressjwt} = require("express-jwt");
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require("dotenv").config()

// Obtener token para que lo pueda ver la API     
const getToken = async (req, res, next) => {
    
    // Bearer authentication
    const { authorization } = req.headers;

    if(authorization){

        // Si la autorizacion es verdadera, entonces se va a crear una separacion (split) entre el token y la palabra que tiene antes (en este caso "Bearer") 
        const [type, token] = authorization.split(" ");

        const decoded = jwt.verify(token, process.env.SECRET) 
        req.user = await User.findById(decoded.id).select('-name')

        // El encabezado del token tiene que ser "Bearer", si no el token sera invalidodo, nulo (el encabezado Bearer es una medida de seguridad)
        return type === "Bearer" ? token: null;
         
    } else {

    // Despues de obteber el token, se retorna null, se vacia el token
        return null
    }    

}


// Middleware que se activa antes de que pida la solicitud el usuario y antes de que le llegue una respuesta, si el token enviado es correcto y tiene el type "Bearer" el token se decodifica y se retorna una respuesta 
const auth = expressjwt({
    
    // Decodificar el token que obtenido 
    secret: process.env.SECRET,
    algorithms: ["HS256"],
    // Una vez el usuario se haya autenticado, la info del usuario siempre va a e estar disponible en req.user
    userProperty: "user",
    getToken
});

const admin = (req, res, next) => {
    try {
        if(req.user && req.user.isAdmin){
            next()
       }
       else{
           throw new Error('Not Authorized as an admin') 
       }
    } catch (error) {
        res.status(401).json({success: false, errorMSG: error.message})
    }
    
}


module.exports = {admin, auth};