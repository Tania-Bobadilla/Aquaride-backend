const Product = require("../models/Product");

// funcion para obtener los productos de la base de datos
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({success: true, messsage: "Lista de productos", info: products})
    } catch (error) {
        res.json({success: false, message: "oh no"})
    }
}

module.exports = getProducts;