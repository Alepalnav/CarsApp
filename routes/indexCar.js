const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const {getCars, addCars, deleteCars, getCarById} = require('../controllers/cars');
const {validateFields} = require("../middlewares/validate-fields");


router.get('/',getCars)

router.get('/:id',getCarById)

router.post('/',[
    check('marca','Marca is required').not().isEmpty(),
    check('modelo','Modelo is required').not().isEmpty(),
    check('year', 'Year must be a number').isNumeric(),
    validateFields
],addCars)

router.delete('/:id',deleteCars)

module.exports = router;