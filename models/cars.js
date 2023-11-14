const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CarsSchema = new Schema({
    marca: String,
    modelo: String,
    year: Number
})

module.exports = mongoose.model("Car", CarsSchema);