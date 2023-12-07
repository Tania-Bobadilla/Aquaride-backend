//se importa express
const express = require("express");
const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRoute");

//se instancia express (se llama a la funcion express y se guardar en una constante)
const app = express();

//se importa dotenv y se guarda el puerto en una variable
require("dotenv").config();
const port = process.env.PORT;

// se trae la conexion de la base de datos al servidor (habia puesto esto antes del dotenv y la conexion a la base de datos no funciionaba, siempre ponerlo despues)
require("./config/database");

//middleware para que el servidor entienda JSON
app.use(express.json());

//middleware para usar router
app.use(productRouter);
app.use (userRouter)



//se levanta el servidor
app.listen(port, () => {
    console.log(`servidor levantado en puerto ${port}`)
})

