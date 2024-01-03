const Accesories = require("../models/Accesories");

// Funcion para obtener los productos de la base de datos
const getAccesories = async (req, res) => {
    try {
        const accesories = await Accesories.find();
        res.json({success: true, messsage: "Lista de accesorios", info: accesories})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
};

const createAccesory = async (req, res) => {
    // Siempre usar try/catch cuando se pide info a una api/base de datos
    try {
        // El nuevo producto se va a crear con la informacion extraida del cuerpo de la solicitud
        const newAccesory = new Accesories(req.body);

        // Esperar a que se guarde el producto
        await newAccesory.save();

        // Obtener respuesta
        res.json({success: true, message: "Producto creado", info: newAccesory})
    } catch (error) {
        res.status(500).json({success: false, massage: error.message })
    }
};

//get
const getAccesoryById = async (req, res) => {
    try {
        const { id } = req.params;

        const accesories = await Accesories.findById(id);

        if (!accesories) {
            return res.status(404).json({ success: false, msg: "Product not found" });
        }

        res.json({ success: true, msg: "Product loaded successfully", accesories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
};

// Reduce Stock PUT
const reduceStock = async (req, res) => {
    const productPurchased = req.body.cartItems;
    try {
        productPurchased.map(async(product) => {
            await Accesories.findByIdAndUpdate(product._id, {stock: product.stock - product.quantity})
        })
        res.status(201).json({success: true, msg: "Se ha reducio el stocks de los productos"}) 
    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
}

module.exports = {getAccesories, createAccesory, getAccesoryById, reduceStock}