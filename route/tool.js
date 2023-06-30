var express = require('express');
var tool = express.Router();

const {getPost,getAllPost, addPost,updatePost, deletePost} = require('../controllers/toolController.js');
const {authMiddleware} = require('../middleware/authMiddleware.js');

tool.get("/",authMiddleware,getAllPost) 
tool.get("/:id",authMiddleware,getPost) 
tool.post("/addPost",authMiddleware, addPost)
tool.put("/updatePost",authMiddleware, updatePost)
tool.delete("/deletePost/:id",authMiddleware, deletePost)

module.exports = tool;