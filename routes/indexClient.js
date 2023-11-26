const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const { getClients, addClients, deleteClients,getClientById} = require('../controllers/clients')
const {validateFields} = require("../middlewares/validate-fields");


router.get('/',getClients)

router.get('/:id',getClientById)

router.post('/',[
    check('nombre','Nombre is required').not().isEmpty(),
    check('edad', 'Year must be a number').isNumeric(),
    check('sexo','Sexo is required').not().isEmpty(),
    validateFields
],addClients)

router.delete('/:id',deleteClients)

module.exports = router;