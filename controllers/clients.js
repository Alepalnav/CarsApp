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

module.exports={getClients,addClients}