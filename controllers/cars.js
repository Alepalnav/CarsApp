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