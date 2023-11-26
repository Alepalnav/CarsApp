const Client = require("../models/clients");
const {validationResult} = require('express-validator');

const getClients = async (req, res) =>{
    try{
        const clients = await Client.find();
        res.status(200).json(clients);
    }catch{
        res.status(500).json({message:error});
    }
}

const addClients = async (req,res)=>{

    const client = req.body;
    const newClient = new Client(client);
    try{
        await newClient.save();
        res.status(201).json(newClient);
    }catch(err){
        console.log(err)
        res.status(409).send("This Client already exists");
    }
}

const deleteClients = async (req,res)=>{
    try{
        const id = req.params.id;
        const client = await Client.findOneAndDelete({"_id":id});
        res.status(201).json(client);
    }catch(err){
        res.status(500).json({msg:err})
    }
}

const getClientById = async (req, res) =>{
    try{
        const client = await Client.findOne();
        if(!client){
            return res.status(404).json({message: "Client not found"
            });
            }
            res.status(200).json(client);
            }catch{
                res.status(500).json({message:error});
                }
                }

module.exports={getClients,addClients,deleteClients,getClientById}