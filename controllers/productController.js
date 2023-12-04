// funcion para obtener los productos de la base de datos
const getProducts = async (req, res) => {
    try {
        const products = "poleron mujer"
        res.json({success: true, message: "lista de productos", info: products})    
    } catch (error) {
        
    }
}

module.exports = getProducts