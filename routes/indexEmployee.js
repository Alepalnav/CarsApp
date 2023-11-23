const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const { getEmployees, addEmployees} = require('../controllers/employees')
const {validateFields} = require("../middlewares/validate-fields");
const { exists } = require("../models/cars");
const { existsEmail } = require("../helpers/db-validators");

router 
.route('/')
.get(getEmployees)
.post([
    check('nombre','Nombre is required').not().isEmpty(),
    check('edad', 'Year must be a number').isNumeric(),
    check('sexo','Sexo is required').not().isEmpty(),
    check('email').custom(existsEmail),
    validateFields
],addEmployees)

module.exports = router;