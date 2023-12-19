const mongoose = require("mongoose");

// Conexion a la base de datos
mongoose.connect(process.env.MONGODB).then(() => console.log("base de datos conectada con exito"))