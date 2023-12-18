const Product = require("../models/Product");

// Funcion para obtener los productos de la base de datos
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({success: true, messsage: "Lista de productos", info: products})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
};

const createProduct = async (req, res) => {
    // Siempre usar try/catch cuando estamos pidiendo info a una api/base de datos
    try {
        // El nuevo producto se va a crear con la informacion extraida del cuerpo de la solicitud/formulario, se crea un nuevo doc. en la base de datos con la info que envie el usuario
        const newProduct = new Product(req.body);

        // Esperar a que se guarde el producto
        await newProduct.save();

        // Obtener respuesta
        res.json({success: true, message: "Producto creado", info: newProduct})
    } catch (error) {
        res.status(500).json({success: false, massage: error.message })
    }
};

module.exports = {getProducts, createProduct}