const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const secret = process.env.SECRET;

//se crea un esquema donde guardar los documentos dentro de las colecciones, desde aqui voy a consultar o pedirle datos a la API(?) esta es la estructura que deberian tener todos los datos que subimos
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
    password: {
        type: String,
        match: [/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/gm],
        required: true
    },
    // salt: String,

    isAdmin: {
        type: Boolean,
        default: false
    }
    // favoriteProducts: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "product"
    // } 
});

//se genera token para el usuario

//referenciar el esquema que se va a ocupar o donde quiero agregar el modelo
userSchema.methods.generateToken = function(){
    //.this significa que del esquena referenciado se quiere sacar el id
    // se guarda en una constante la carga que queremos que haya dentro del token
    const payload = {
        id: this._id,
        name: this.name,
        isAdmin: this.isAdmin
    }

    //ahora si generamos el token, que tiene un tiempo de expiracion de 15 minutos
    const token = jwt.sign(payload, process.env.SECRET, {expiresIn: 900})
    return token
}

//se crea un modelo que se conecte a la coleccion en mongodb (instanciacion de un esquema)
const User = mongoose.model("users", userSchema);

module.exports = User;

