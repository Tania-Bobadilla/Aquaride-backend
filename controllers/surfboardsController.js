const Surfboards = require("../models/Surfboards");

// Funcion para obtener los productos de la base de datos
const getSurfboards = async (req, res) => {
    try {
        const surfboards = await Surfboards.find();
        res.json({success: true, messsage: "Lista de tablas de surf", info: surfboards})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
};

const createSurfboard = async (req, res) => {
    // Siempre usar try/catch cuando se pide info a una api/base de datos
    try {
        // El nuevo producto se va a crear con la informacion extraida del cuerpo de la solicitud
        const newSurfboard = new Surfboards(req.body);

        // Esperar a que se guarde el producto
        await newSurfboard.save();

        // Obtener respuesta
        res.json({success: true, message: "Producto creado", info: newSurfboard})
    } catch (error) {
        res.status(500).json({success: false, massage: error.message })
    }
};

const getSurfById = async (req, res) => {
    try {
        const { id } = req.params;

        const surf = await Surfboards.findById(id);

        if (!surf) {
            return res.status(404).json({ success: false, msg: "Product not found" });
        }
        res.json({ success: true, msg: "Product loaded successfully", surf});
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: "Internal Server Error"});
    }
};

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

module.exports = {getSurfboards, createSurfboard, getSurfById, reduceStock}