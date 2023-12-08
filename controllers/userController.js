const User = require("../models/User");

//registro de usuario
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

const loginUser = async(req, res) => {
    try {
        //destructuracion de objetos
        const {email, password} = req.body;

        //buscar usuario en la base de datos de mongo atlas 
        const user = await User.findOne({email});

        //buscar password en mongo
        const pass = user.password;
        // console.log(user);
        console.log(pass)
    

        //condicional para ver si usuario existe
        if(!user){
            throw new Error("el usuario no existe")
        } else if (pass != password) {
            throw new Error("la contraseña es incorrecta")
        }
        //luego logica que admita email y pass
        res.json({success: true, message: "has iniciado sesion correctamente", email, password})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

module.exports = {createUser, loginUser} 

