const mongoose = require("mongoose");

//se crea un esquema donde guardar los documentos dentro de las colecciones(?)
const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String
});

//se crea un modelo que se conecte a la coleccion en mongodb
const Product = mongoose.model("products", productSchema);

module.export = Product;