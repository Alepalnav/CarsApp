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
    const newCar2 = await Car.findOne({car})
    if(newCar2){
        return res.status(400).send("This Car already exists");
    }
    try{
        await newCar.save();
        res.status(201).json(newCar);
    }catch(err){
        console.log(err)
        res.status(409).send("Not possible");
    }
}

const deleteCars = async (req,res)=>{

    try{
        const id = req.params.id;
        const car = await Car.findOneAndDelete({"_id":id});
        
        res.status(201).json(car);
    }catch(err){
        res.status(500).json({msg:err})
    }
}

const updateCar = async(req,res)=>{
    const id= req.params.id;

    const car = await Car.find({_id:id});

    const newCar = req.body;
    try{

        if(!car.length){
            return res.status(404).json({msg:'No existe el coche'});
        }

        await Car.updateOne({_id:id},newCar);
        res.json(newCar);
    }catch(err){
        res.status(500).json({msg:err})
    }
}


module.exports = {getCars, getCarById, addCars, deleteCars, updateCar}