const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const {getUsers, getUserById, addUsers, updateUser, deleteUsers} = require('../controllers/users');
const {validateFields} = require("../middlewares/validate-fields");


router.get('/',getUsers)

router.get('/:id',getUserById)

router.post('/',[
    check('name','name is required').not().isEmpty(),
    check('username','username is required').not().isEmpty(),
    check('password','password is required').not().isEmpty(),
    check('role','role is required').not().isEmpty(),
    check('email','email is required').not().isEmpty(),
    validateFields
],addUsers)

router.put('/:id',[
    check('name','name is required').not().isEmpty(),
    check('username','username is required').not().isEmpty(),
    check('password','password is required').not().isEmpty(),
    check('role','role is required').not().isEmpty(),
    check('email','email is required').not().isEmpty(),
    validateFields
],updateUser)

router.delete('/:id',deleteUsers)

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