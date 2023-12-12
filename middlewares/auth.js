const {expressjwt} = require("express-jwt");
// const expressJwt = require("express-jwt");
// const eJwt = express.eJwt.expressjwt()
require("dotenv").config()


//obtener token para que lo pueda ver la API
     
const getToken = (req, res) => {
    
    //Bearer authentication
    const { authorization } = req.headers;

    if(authorization){

        //si la autorizacion es true, entonces se va a ser una separacion "split" entre el token y la frase que tiene antes ese token (bearer) (?), quiero que esto se vaya a buscar a las header de la peticion a la propiedad authorization (?)
        const [type, token] = authorization.split(" ");
        //EL encabezado del token tiene que ser Bearer si no el token sea invalido, este nulo, el encabezado Bearer es una medida de seguridad
        return type === "Bearer" ? token: null;
         
    }

    //despues de obteber el token, retornar null, vaciar el token
    return null;
}


//middleware para antes de que pida la solicitud el usuario y antes de que le llegue una respuesta, si el token enviado es correcto y tiene el type "Bearer" el token se decodifica y se retorna una respuesta 
const auth = expressjwt({
    
    //decodificar el token que obtuvimos, 
    secret: process.env.SECRET,
    algorithms: ["HS256"],
    //una vez el usuario se haya autenticado la info del usuario siempre va a e estar disponible en req.user
    userProperty: "user",
    getToken
});

console.log(auth.userProperty)

module.exports = auth;