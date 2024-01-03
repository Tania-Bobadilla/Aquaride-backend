const WomenClothes = require("../models/WomenClothes");

// Funcion para obtener los productos de la base de datos
const getWomenClothes = async (req, res) => {
    try {
        const wclothes = await WomenClothes.find();
        res.json({success: true, messsage: "Lista de ropa de mujer", info: wclothes})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
};

const createWomenClothes = async (req, res) => {
    // Siempre usar try/catch cuando se pide info a una api/base de datos
    try {
        // El nuevo producto se va a crear con la informacion extraida del cuerpo de la solicitud
        const newWomenClothes = new WomenClothes(req.body);

        // Esperar a que se guarde el producto
        await newWomenClothes.save();

        // Obtener respuesta
        res.json({success: true, message: "Producto creado", info: newWomenClothes})
    } catch (error) {
        res.status(500).json({success: false, massage: error.message })
    }
};

//get
const getWomenById = async (req, res) => {
    try {
        const { id } = req.params;

        const womenClothes = await WomenClothes.findById(id);

        if (!womenClothes) {
            return res.status(404).json({ success: false, msg: "Product not found" });
        }

        res.json({ success: true, msg: "Product loaded successfully", womenClothes });
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
            await WomenClothes.findByIdAndUpdate(product._id, {stock: product.stock - product.quantity})
        })
        res.status(201).json({success: true, msg: "Se ha reducio el stocks de los productos"}) 
    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
}

module.exports = {getWomenClothes, createWomenClothes, getWomenById, reduceStock}