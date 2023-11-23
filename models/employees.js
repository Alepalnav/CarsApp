const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EmployeesSchema = new Schema({
    nombre: String,
    edad: Number,
    sexo: String,
    email:String
})

module.exports = mongoose.model("Employee", EmployeesSchema);