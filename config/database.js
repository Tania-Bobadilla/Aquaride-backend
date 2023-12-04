const mongoose = require("mongoose");

// mongoose.set("strictQuery", true);

//conexio a la base de datos
mongoose.connect(process.env.MONGODB).then(() => console.log("base de datos conectada con exito"))