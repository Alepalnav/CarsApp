const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const { getEmployees, addEmployees, deleteEmployees,getEmployeeById} = require('../controllers/employees')
const {validateFields} = require("../middlewares/validate-fields");
const { exists } = require("../models/cars");
const { existsEmail } = require("../helpers/db-validators");


router.get('/',getEmployees)

router.get('/:id',getEmployeeById)

router.post('/',[
    check('nombre','Nombre is required').not().isEmpty(),
    check('edad', 'Year must be a number').isNumeric(),
    check('sexo','Sexo is required').not().isEmpty(),
    check('email').custom(existsEmail),
    validateFields
],addEmployees)

router.delete('/:id',deleteEmployees)

module.exports = router;