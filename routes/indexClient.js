const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const { getClients, addClients} = require('../controllers/clients')
const {validateFields} = require("../middlewares/validate-fields");

router 
.route('/')
.get(getClients)
.post([
    check('nombre','Nombre is required').not().isEmpty(),
    check('edad', 'Year must be a number').isNumeric(),
    check('sexo','Sexo is required').not().isEmpty(),
    validateFields
],addClients)

module.exports = router;