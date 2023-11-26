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

const deleteEmployees = async (req,res)=>{
    try{
        const id = req.params.id;
        const employee = await Employee.findOneAndDelete({"_id":id});
        res.status(201).json(employee);
    }catch(err){
        res.status(500).json({msg:err})
    }
}

const getEmployeeById = async (req, res) =>{
    try{
        const employee = await Employee.findOne();
        if(!employee){
            return res.status(404).json({message: "Employee not found"
            });
            }
            res.status(200).json(employee);
            }catch{
                res.status(500).json({message:error});
                }
                }

module.exports={getEmployees,addEmployees,deleteEmployees,getEmployeeById}