const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const { getCars, addCars} = require('../controllers/cars')
const {validateFields} = require("../middlewares/validate-fields");

router 
.route('/')
.get(getCars)
.post([
    check('nombre','Nombre is required').not().isEmpty(),
    check('modelo','Modelo is required').not().isEmpty(),
    check('year', 'Year must be a number').isNumeric(),
    validateFields
],addCars)

module.exports = router;