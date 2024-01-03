const KidsClothes = require("../models/KidsClothes");

// Funcion para obtener los productos de la base de datos
const getKidsClothes = async (req, res) => {
    try {
        const kclothes = await KidsClothes.find();
        res.json({success: true, messsage: "Lista de ropa de niños", info: kclothes})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
};

const createKidsClothes = async (req, res) => {
    // Siempre usar try/catch cuando se pide info a una api/base de datos
    try {
        // El nuevo producto se va a crear con la informacion extraida del cuerpo de la solicitud
        const newKidsClothes = new KidsClothes(req.body);

        // Esperar a que se guarde el producto
        await newKidsClothes.save();

        // Obtener respuesta
        res.json({success: true, message: "Producto creado", info: newKidsClothes})
    } catch (error) {
        res.status(500).json({success: false, massage: error.message })
    }
};

//get
const getKidById = async (req, res) => {
    try {
        const { id } = req.params;

        const kidClothes = await KidsClothes.findById(id);

        if (!kidClothes) {
            return res.status(404).json({ success: false, msg: "Product not found" });
        }

        res.json({ success: true, msg: "Product loaded successfully", kidClothes });
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
            await KidsClothes.findByIdAndUpdate(product._id, {stock: product.stock - product.quantity})
        })
        res.status(201).json({success: true, msg: "Se ha reducio el stocks de los productos"}) 
    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
}

module.exports = {getKidsClothes, createKidsClothes, getKidById, reduceStock}