var express = require('express');
const {connectDB} = require('../config/connection');
const Tools = require('./tool');
const Auth = require('./auth');
var app = express();

const cors = require('cors')
const bodyParser = require ('body-parser')

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())


app.use(cors({
  origin: true
}));


connectDB((err)=>{
    if(err){
        console.log('db connection err',err);
    }else{
      console.log("db connected");
    }
  })

// app.use(express.static('public'));
app.use('/', Tools);
app.use('/auth', Auth);
  

module.exports = app
