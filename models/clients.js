const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ClientsSchema = new Schema({
    nombre: String,
    edad: Number,
    sexo:String
})

module.exports = mongoose.model("Client", ClientsSchema);