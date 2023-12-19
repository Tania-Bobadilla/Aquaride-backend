const mongoose = require("mongoose");

// const colorSchema = new mongoose.Schema({
//     red: {
//         type: String
//     },
//     blue: {
//         type: String
//     }

// })

// Se crea un esquema donde guardar los documentos dentro de las colecciones, desde aqui se consultar o pedirle datos a la API, esta es la estructura que deberian tener todos los datos que se suben para generar un producto
const productSchema = new mongoose.Schema({
    sku: {
        type: String, 
        required: true,
        minLenght: 6,
        maxLenght: 6
    },
    name: { 
        type: String,
        required: true,
        lowercase: true, 
        minLenght: 3,
        maxLenght: 250,
        trim: true
    },
    price: {
        type: Number, 
        required: true, 
        min: 0,
        max: 10000000
    },

    image: String,

    stock: {
        type: Number,
        min: 0,
        max: 100

    }, 

    details: {
        typeProduct: {
            type: String
        },
        material: {
            type: String
        },
        weight: {
            type: Number,
            min: 0.1
        }
    },
    color: [colorSchema]

    // stock
    // sku
    // descripcion
    // colores (los podemos dejar en otro esquema)
});

// Se crea un modelo que se conecte a la coleccion en mongodb
const Product = mongoose.model("products", productSchema);

module.exports = Product;