const mongoose = require("mongoose");

// const colorSchema = new mongoose.Schema({
//     red: {
//         type: String
//     },
//     blue: {
//         type: String
//     }

// })

const womenClothesSchema = new mongoose.Schema({
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
    // color: [colorSchema]

    // stock
    // sku
    // descripcion
    // colores (los podemos dejar en otro esquema)
});

// Se crea un modelo que se conecte a la coleccion en mongodb
const WomenClothes = mongoose.model("women-products", womenClothesSchema);

module.exports = WomenClothes;