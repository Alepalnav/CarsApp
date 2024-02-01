const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UsersSchema = new Schema({
    name: {
        type:String, 
        required: true
    },
    username: {
        type:String, 
        unique: true,
        required: true
    },
    password: {
        type:String, 
        required: true
    },
    role: {
        type:String, 
        required: true
    },
    email: {
        type:String, 
        unique: true,
        required: true
    },
    active: {
        type: Boolean,
        required:true
    }
})

module.exports = mongoose.model("User", UsersSchema);