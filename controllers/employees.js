const Employee = require("../models/employees");
const {validationResult} = require('express-validator');

const getEmployees = async (req, res) =>{
    try{
        const employees = await Employee.find();
        res.status(200).json(employees);
    }catch{
        res.status(500).json({message:error});
    }
}

const addEmployees = async (req,res)=>{

    const employee = req.body;
    const newEmployee = new Employee(employee);
    try{
        await newEmployee.save();
        res.status(201).json(newEmployee);
    }catch(err){
        console.log(err)
        res.status(409).send("This Employee already exists");
    }
}

module.exports={getEmployees,addEmployees}