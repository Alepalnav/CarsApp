const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const {getCars, addCars, deleteCars, getCarById, updateCar} = require('../controllers/cars');
const {validateFields} = require("../middlewares/validate-fields");


router.get('/',getCars)

router.get('/:id',getCarById)

router.post('/',[
    check('marca','Marca is required').not().isEmpty(),
    check('modelo','Modelo is required').not().isEmpty(),
    check('year', 'Year must be a number').isNumeric(),
    validateFields
],addCars)

router.put('/:id',[
    check('marca','Marca is required').not().isEmpty(),
    check('modelo','Modelo is required').not().isEmpty(),
    check('year', 'Year must be a number').isNumeric(),
    validateFields
],updateCar)

router.delete('/:id',deleteCars)

module.exports = router;

// const {check} = require("express-validator");
// const {validationError} = require("../middleware/validationHandler");
// const { existsEmail } = require("../helpers/db-validator");

// const employeeValidator = [check("firstName").isAscii().notEmpty().not().isNumeric(),
//                           check("lastName").isAscii().notEmpty(), 
//                           check("email").isEmail().notEmpty(),
//                           check("email").custom(existsEmail),
//                           check("gender").isAlpha().custom((gender, {req}) =>{
//                             if(gender==="H" || gender === "M") return true;
//                          }),
//                           check("dateOfBirth").isDate().custom((date, {req}) =>{
//                             if(Date.parse(date)<Date.now()){
//                               return true;
//                             }
//                           }),
//                           check("idCompany").isNumeric().notEmpty(),
//                           validationError];

// module.exports = {employeeValidator};