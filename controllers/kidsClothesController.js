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

module.exports = {getKidsClothes, createKidsClothes}