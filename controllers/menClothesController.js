const MenClothes = require("../models/MenClothes");

// Funcion para obtener los productos de la base de datos
const getMenClothes = async (req, res) => {
    try {
        const mclothes = await MenClothes.find();
        res.json({success: true, messsage: "Lista de ropa de hombre", info: mclothes})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
};

const createMenClothes = async (req, res) => {
    // Siempre usar try/catch cuando se pide info a una api/base de datos
    try {
        // El nuevo producto se va a crear con la informacion extraida del cuerpo de la solicitud
        const newMenClothes = new MenClothes(req.body);

        // Esperar a que se guarde el producto
        await newMenClothes.save();

        // Obtener respuesta
        res.json({success: true, message: "Producto creado", info: newMenClothes})
    } catch (error) {
        res.status(500).json({success: false, massage: error.message })
    }
};

//get
const getMenById = async (req, res) => {
    try {
        const { id } = req.params;

        const menClothes = await MenClothes.findById(id);

        if (!menClothes) {
            return res.status(404).json({ success: false, msg: "Product not found" });
        }

        res.json({ success: true, msg: "Product loaded successfully", menClothes });
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
            await MenClothes.findByIdAndUpdate(product._id, {stock: product.stock - product.quantity})
        })
        res.status(201).json({success: true, msg: "Se ha reducio el stocks de los productos"}) 
    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
}

module.exports = {getMenClothes, createMenClothes, getMenById, reduceStock}