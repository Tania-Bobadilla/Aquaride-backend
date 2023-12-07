const mongoose = require("mongoose");

//se crea un esquema donde guardar los documentos dentro de las colecciones, desde aqui voy a consultar o pedirle datos a la API(?) esta es la estructura que deberian tener todos los datos que subimos
const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: { 
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }, 
    password: {
        type: String,
        required: true
    }   
});

//se crea un modelo que se conecte a la coleccion en mongodb
const User = mongoose.model("users", userSchema);

module.exports = User;

