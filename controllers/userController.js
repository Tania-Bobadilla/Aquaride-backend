const User = require("../models/User");

//importar crypto para encriptar constraseñas
// const crypto = require("crypto");

// Registro de usuario
const createUser = async (req, res) => {
    
    try {
        // Primero se comprueba que el e-mail con el que se va a registrar el usuario este disponible
        const userEmail = await User.findOne({email: req.body.email})

        if (userEmail) {
            throw new Error("E-mail en uso")
        } 
        
        // El nuevo usuario se va a crear con la informacion extraida del cuerpo de la solicitud
        const newUser = new User(req.body);

        // Antes que se guarde la contr. se encripta
        newUser.encriptarPassword(req.body.password);
        await newUser.save();


        // Obtener respuesta
        res.json({success: true, message: "usuario creado", info: newUser._id, token: newUser.generateToken()})
    } catch (error) {
        res.json({success: false, massage: error.message})
    }
};

const loginUser = async(req, res) => {
    try {
        // Destructuracion de objetos
        const {email, password} = req.body;

        //buscar usuario en la base de datos de mongo atlas
        const user = await User.findOne({email});

        // Condicional para ver si usuario existe para poder entrar
        if(!user){
            throw new Error("El usuario no existe")
        }

        // Validar contraseña 
        const validarPassword = user.verificarEncriptacion(password, user.salt, user.password)

        if(!validarPassword){
            throw new Error("Contraseña o e-mail incorrectos")
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
};

// Funciones actualizar y delete

const editUser = async(req, res) => {

    try {
        // throw new Error('error forzado')
        const {id} = req.params;
        const contain = req.body;

        const updateUser = await User.findByIdAndUpdate(id, contain, {new: true});

        res.json({success: true, msg: "usuario actualizado", updateUser})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

const deleteUser =  async(req, res) => {
    try {
        // throw new Error('error forzado')
        const {id} = req.params;

        const destroyUser = await User.findByIdAndDelete(id);

        res.json({success: true, msg: "usuario eliminado", destroyUser})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}


module.exports = {createUser, loginUser,getUser, deleteUser,editUser} 

