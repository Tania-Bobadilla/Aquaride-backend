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

module.exports = {getAccesories, createAccesory}