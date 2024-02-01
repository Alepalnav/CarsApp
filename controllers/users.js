const User = require("../models/users");
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');

const getUsers = async (req, res) =>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch{
        res.status(500).json({message:error});
    }
}

//realiza getCars por id
const getUserById = async (req, res) =>{
    try{
        const id = req.params.id;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message: "user not found"
            });
            }
            res.status(200).json(user);
            }catch{
                res.status(500).json({message:error});
                }
                }


const addUsers = async (req,res)=>{
    const {name,username,password, role, email} = req.body;
    const active = true;
    const newUser = new User({name,username,password, role, email, active:active});

    const salt = bcryptjs.genSaltSync();
    newUser.password = bcryptjs.hashSync(password, salt);
    
    try{
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error){
        console.log(error)
        res.status(409).send("Not possible");
    }
}

const deleteUsers = async (req,res)=>{

    try{
        const id = req.params.id;
        // const body = {active}=false;
        // User.findByIdAndUpdate(id, body);
        const user = await User.findOneAndDelete({"_id":id});
        res.status(201).json(user);
    }catch(err){
        res.status(500).json({msg:err})
    }
}

const updateUser = async(req,res)=>{
    const id= req.params.id;

    const user = await User.find({_id:id});

    const newUser = req.body;
    try{

        if(!user.length){
            return res.status(404).json({msg:'No existe el user'});
        }

        await User.updateOne({_id:id},newUser);
        res.json(newUser);
    }catch(err){
        res.status(500).json({msg:err})
    }
}


module.exports = {getUsers, getUserById, addUsers, deleteUsers, updateUser}