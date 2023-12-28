const Product = require("../models/Product");

// Funcion para obtener los productos de la base de datos (get)
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({success: true, messsage: "Lista de productos", info: products})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
};

//get (un solo producto)
const getProductById = async (req, res) => {
    try {
        const {id} = req.params;

        const product = await Product.findById(id);

        res.json({success: true, msg: "Se ha cargado el producto", product})


    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    } 

}


//crear producto (post)
const createProduct = async (req, res) => {
    // Siempre usar try/catch cuando se pide info a una api/base de datos
    try {
        // El nuevo producto se va a crear con la informacion extraida del cuerpo de la solicitud
        const newProduct = new Product(req.body);

        // Esperar a que se guarde el producto
        await newProduct.save();

        // Obtener respuesta
        res.json({success: true, message: "Producto creado", info: newProduct})
    } catch (error) {
        res.status(500).json({success: false, massage: error.message })
    }
};

//put
const editProduct = async(req, res) => {

    const {id} = req.params;
    const {name, price, stock, image} = req.body
    
    try {
        const productEdit = await Product.findByIdAndUpdate(id, {name, price, stock}, {new: true})    
        res.status(201).json({
            success: true, 
            msg: "Producto editado con exito!!", 
            productEdit
        })
    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
   

}

//delete
const deleteProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const productDelete = await Product.findByIdAndDelete(id)   

        res.json({
            success: true, 
            msg: "El producto ha sido eliminado satisfactoriamente!", 
            productDelete
        })
    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
}

//Put
const reduceStock = async (req, res) => {
    const productPurchased = req.body.cartItems;
    try {
        productPurchased.map(async(product) => {
            await Product.findByIdAndUpdate(product._id, {stock: product.stock - product.quantity})
        })
        res.status(201).json({success: true, msg: "Se ha reducio el stocks de los productos"}) 
    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
}



module.exports = {getProducts, createProduct, getProductById, editProduct, deleteProduct, reduceStock}