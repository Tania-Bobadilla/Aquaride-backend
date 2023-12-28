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

module.exports = {getMenClothes, createMenClothes}