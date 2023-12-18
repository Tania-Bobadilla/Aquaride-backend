const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const secret = process.env.SECRET;
//importar crypyto para encriptar constraseñas
const crypto = require("crypto");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Nombre no especificado",
        trim: true,
        lowercase: true,
        minLength: 2
    },

   

    email: {
        type: String,
        trim: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g],
        required: true
    },

    age: {
        type: Number,
        min: 16,
        max: 120
    },
    salt: String,

    password: {
        type: String,
        match: [/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/gm],
        required: true
    },

    isAdmin: {
        type: Boolean,
        default: false
    }
    // favoriteProducts: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "product"
    // } 
}); 


// Funcion para escriptar pass, recibe un parametro que es la contraseña del usuario  
userSchema.methods.encriptarPassword = function(password) {
    this.salt = crypto.randomBytes(10).toString("hex");
    this.password = crypto.pbkdf2Sync(password, this.salt, 10000, 10, "sha-512").toString("hex")
}

// Se verificar/constrasta la encriptacion con la pass que ingresa el usuario, el salt y la pass que estan almacenadas en la base de datos

userSchema.methods.verificarEncriptacion = function (password, salt, passwordDB) {

    const encriptar = crypto.pbkdf2Sync(password, salt, 10000, 10, "sha-512").toString("hex")
    return encriptar === passwordDB
};


// Se genera token para el usuario, se referencia el esquema que se va a ocupar 
userSchema.methods.generateToken = function(){
    // ".this" significa que del esquema referenciado se quiere sacar una propiedad en especifico
    // Se guarda en una constante la carga que queremos que haya dentro del token
    const payload = {
        id: this._id,
        name: this.name,
        isAdmin: this.isAdmin
    }

    // El token generado tiene un tiempo de expiracion de 15 minutos
    const token = jwt.sign(payload, process.env.SECRET, {expiresIn: 900})
    return token
}


// Se crea un modelo que se conecte a la coleccion en mongodb (instanciacion de un esquema)
const User = mongoose.model("users", userSchema);

module.exports = User;

