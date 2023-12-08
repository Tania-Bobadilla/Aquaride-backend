const mongoose = require("mongoose");

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
    }
    // salt: String,
    // isAdmin: {
    //     type: Boolean,
    //     default: false
    // },
    // favoriteProducts: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "product"
    // } 
});

//se crea un modelo que se conecte a la coleccion en mongodb (instanciacion de un esquema)
const User = mongoose.model("users", userSchema);

module.exports = User;

