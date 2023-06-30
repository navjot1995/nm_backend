const mongoose = require('mongoose');
const {ObjectId}=  mongoose.Schema.Types;

// Defining Schema
const userSchema = new mongoose.Schema({
    firstname: { 
        type: String, 
        required: true,
        trim: true 
    },
    lastname: { 
        type: String, 
        required: true,
        trim: true 
    },
    password: { 
        type: String, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        trim: true 
    },
    isAdmin:{
        type: Boolean, 
        default:false
    },
    createdAt:{
        type: Date, 
        default:new Date()
    }
})


// Model 
const User = new mongoose.model("User", userSchema)

module.exports = {User} 