const User = require("../models/User");

const createUser = async (req, res) => {
    //siempre usar try/catch cuando estamos pidiendo info a una api/base de datos
    try {
        //el nuevo producto se va a crear con la informacion que rescata del cuerpo de la solicitud, crear un nuevo doc en la base de datos con la info que le envie el usuario
        const newUser = new User(req.body);
        //esperar a que se guarde el producto
        await newUser.save();
        //obtener respuesta
        res.json({success: true, message: "usuario creado", info: newUser})
    } catch (error) {
        res.status(500).json({success: false, massage: error.message })
    }
};

module.exports = createUser

