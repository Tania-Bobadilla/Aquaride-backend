const {expressjwt} = require("express-jwt");
// const expressJwt = require("express-jwt");
// const eJwt = express.eJwt.expressJwt()


//obtener token para que lo pueda ver la API

const getToken = (req, res) => {
    
    const { authorization } = req.headers;

    if(authorization){
        const [type, token] = authorization.split(" ");
        return type === "Bearer" ? token: null;
         
    }

    return null;
}

const auth = expressjwt({
    
})