const Product = require("../models/Product");

// funcion para obtener los productos de la base de datos
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({success: true, msg: "Lista de productos", info: products})
    } catch (error) {
        res.json({success: false, msg: error.message})
    }
}

module.exports = getProducts;