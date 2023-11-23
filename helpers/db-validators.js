const Employee = require('../models/employees')

const existsEmail = async(email)=> {
    const emailDb = await Employee.findOne({email});
    if(emailDb){
        throw new Error(`Email ${email} already exists in database`)
    }
}

module.exports = {existsEmail}