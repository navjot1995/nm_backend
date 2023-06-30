const mongoose = require('mongoose');
const {ObjectId}=  mongoose.Schema.Types;

// Defining Schema
const postSchema = new mongoose.Schema({
    post: { 
        type: String, 
        required: true,
        trim: true 
    },
    description: { 
        type: String, 
        required: true, 
        trim: true 
    },
    createdAt:{
        type: Date, 
        default:new Date()
    }
})


// Model 
const Post = new mongoose.model("Post", postSchema)

module.exports = {Post} 