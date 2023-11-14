const express = require('express') 
const app = express() ;
const cors = require('cors');
const CarRoutes = require('./routes/indexCar')

require('dotenv').config(); 

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function main(){
    await mongoose.connect(process.env.MONGO_CNN);
    console.log('Database connected');
}
main().catch((err)=>console.log(err));

app.use(cors());
app.use(express.json());

app.use('/marcas',CarRoutes);


// Iniciar el servidor en el puerto 3000
app.listen(process.env.PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${process.env.PORT}`);
});