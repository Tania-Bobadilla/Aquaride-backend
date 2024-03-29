// Se importan express y otras librerias
const express = require("express");

// Rutas instanciadas
const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRoute");
const kidsClothesRouter = require("./routes/kidsClothesRoute");
const womenClothesRouter = require("./routes/womenClothesRoute");
const menClothesRouter = require("./routes/menClothesRoute");
const accesoriesRouter = require("./routes/accesoriesRoute");
const surfboardsRouter = require("./routes/surfboardsRoute");

//permite conectarme a una base de datos externa 
const cors = require("cors")

// Se instancia express (se llama a la funcion express y se guardar en una constante)
const app = express();

// Se importa dotenv y se guarda el puerto en una variable
require("dotenv").config();
const port = process.env.PORT;

// Se trae la conexion de la base de datos al servidor (habia puesto esto antes del dotenv y la conexion a la base de datos no funcionaba, siempre ponerlo despues)
require("./config/database");

// Para que la base de datos pueda ser accedida desde el frontend, se le da acceso aqui
app.use(cors());
// app.use(cors({whitelist: ["http://localhost:5173/"]}));

// Middleware para que el servidor entienda JSON
app.use(express.json());

// Middleware para usar router
app.use(productRouter);
app.use(userRouter);

app.use(surfboardsRouter);
app.use(womenClothesRouter);
app.use(menClothesRouter);
app.use(accesoriesRouter);
app.use(kidsClothesRouter);


// Se levanta el servidor
app.listen(port, () => {
    console.log(`servidor levantado en puerto ${port}`)
})

