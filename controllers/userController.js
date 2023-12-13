const User = require("../models/User");

//importar crypto para encriptar constraseñas
const crypto = require("crypto");

//registro de usuario
const createUser = async (req, res) => {
    //siempre usar try/catch cuando estamos pidiendo info a una api/base de datos
    try {
        //primero comprobar que el email con el que se va a registrar el usuario esta disponible
        const userEmail = await User.findOne({email: req.body.email})

        if (userEmail) {
            throw new Error("e-mail en uso")
        } 
        
        //el nuevo usuario se va a crear con la informacion que rescata del cuerpo de la solicitud, crear un nuevo doc en la base de datos con la info que le envie el usuario
    
        //esperar a que se guarde el usuario
        const newUser = new User(req.body)

        //antes que se guarde la contr. se encripta
        newUser.encriptarPassword(req.body.password);
        await newUser.save();


        //obtener respuesta
        res.json({success: true, message: "usuario creado", info: newUser._id, token: newUser.generateToken()})
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
        // console.log(pass)
    

        //condicional para ver si usuario existe
        if(!user){
            throw new Error("el usuario no existe")
        } else if (pass != password) {
            throw new Error("la contraseña es incorrecta")
        }
        //luego logica que admita email y pass
        res.json({success: true, message: "has iniciado sesion correctamente", token: user.generateToken()})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

const getUser = async(req, res) => {
    try {
        const users = await User.find();
        // .populate("favoriteProducts");
        res.json({sucess: true, info: users})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

module.exports = {createUser, loginUser,getUser} 

