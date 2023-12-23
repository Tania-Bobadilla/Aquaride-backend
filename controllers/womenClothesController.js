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

module.exports = {getWomenClothes, createWomenClothes}