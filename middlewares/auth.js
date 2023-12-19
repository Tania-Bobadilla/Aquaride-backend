const {expressjwt} = require("express-jwt");
require("dotenv").config()

// Obtener token para que lo pueda ver la API     
const getToken = (req, res) => {
    
    // Bearer authentication
    const { authorization } = req.headers;

    if(authorization){

        // Si la autorizacion es verdadera, entonces se va a crear una separacion (split) entre el token y la palabra que tiene antes (en este caso "Bearer") 
        const [type, token] = authorization.split(" ");

        // El encabezado del token tiene que ser "Bearer", si no el token sera invalidodo, nulo (el encabezado Bearer es una medida de seguridad)
        return type === "Bearer" ? token: null;
         
    }

    // Despues de obteber el token, se retorna null, se vacia el token
    return null;
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

module.exports = auth;