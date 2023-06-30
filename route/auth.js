var express = require('express');
var auth = express.Router();

const {login,signup,updateProfile, logout} = require('../controllers/authController.js');

auth.post("/login", login) 
auth.post("/signup", signup)
auth.put("/adminupdate", updateProfile)

module.exports = auth;