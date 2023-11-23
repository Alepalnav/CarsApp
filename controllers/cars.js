const Car = require("../models/cars");
const {validationResult} = require('express-validator');

const getCars = async (req, res) =>{
    try{
        const cars = await Car.find();
        res.status(200).json(cars);
    }catch{
        res.status(500).json({message:error});
    }
}

//realiza getCars por id
const getCarById = async (req, res) =>{
    try{
        const car = await Car.findOne();
        if(!car){
            return res.status(404).json({message: "Car not found"
            });
            }
            res.status(200).json(car);
            }catch{
                res.status(500).json({message:error});
                }
                }



const addCars = async (req,res)=>{

    const car = req.body;
    const newCar = new Car(car);
    try{
        await newCar.save();
        res.status(201).json(newCar);
    }catch(err){
        console.log(err)
        res.status(409).send("This Car already exists");
    }
}

const deleteCars = async (req,res)=>{

    try{
        const id = req.params.id;
        const car = await Car.findOneAndDelete({_id:id});
        res.status(201).json(car);
    }catch(err){
        res.status(500).json({msg:err})
    }
}


module.exports = {getCars, getCarById, addCars, deleteCars}