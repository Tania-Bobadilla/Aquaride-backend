//se importa express
const express = require("express");
const productRouter = require("./routes/productRoute")


//se instancia express (se llama a la funcion express y se guardar en una constante)
const app = express();

//se importa dotenv y se guarda el puerto en una variable
require("dotenv").config();
const port = process.env.PORT;

//middleware para que el servidor entienda JSON
app.use(express.json());

//middleware para usar router
app.use(productRouter);



//se levanta el servidor
app.listen(port, () => {
    console.log(`servidor levantado en puerto ${port}`)
})

