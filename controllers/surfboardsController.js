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

module.exports = {getSurfboards, createSurfboard}