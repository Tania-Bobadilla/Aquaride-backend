// Se importan express y otras librerias
const express = require("express");
const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRoute");

// Se instancia express (se llama a la funcion express y se guardar en una constante)
const app = express();

// Se importa dotenv y se guarda el puerto en una variable
require("dotenv").config();
const port = process.env.PORT;

// Se trae la conexion de la base de datos al servidor (habia puesto esto antes del dotenv y la conexion a la base de datos no funcionaba, siempre ponerlo despues)
require("./config/database");

// Middleware para que el servidor entienda JSON
app.use(express.json());

// Middleware para usar router
app.use(productRouter);
app.use (userRouter);

// Se levanta el servidor
app.listen(port, () => {
    console.log(`servidor levantado en puerto ${port}`)
})

