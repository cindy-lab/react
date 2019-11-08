const mongoose = require('mongoose')
const Schema = mongoose.Schema

var registerSchema = new Schema({
    fname:{
        type: String,
        required: true
    },
    mname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: int,
        required : true
    },
    
});

module.exports= mongoose.model('Test', registerSchema)