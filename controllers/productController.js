const Product = require("../models/Product");

// funcion para obtener los productos de la base de datos
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({success: true, messsage: "Lista de productos", info: products})
    } catch (error) {
        res.json({success: false, message: "oh no"})
    }
};

const createProduct = async (req, res) => {
    //siempre usar try/catch cuando estamos pidiendo info a una api/base de datos
    try {
        //el nuevo producto se va a crear con la informacion que rescata del cuerpo de la solicitud, crear un nuevo doc en la base de datos con la info que le envie el usuario
        const newProduct = new Product(req.body);
        //esperar a que se guarde el producto
        await newProduct.save();
        //obtener respuesta
        res.json({success: true, message: "producto creado", info: newProduct})
    } catch (error) {
        res.status(500).json({success: false, massage: error.message })
    }
};

module.exports = {getProducts, createProduct}