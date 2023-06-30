const mongoose = require('mongoose')

const state = {
    db:null

}

const connectDB = async () => {
    try {
    const DATABASE_URL =process.env.DB_PATH
     const DB_OPTIONS = {
      dbName: process.env.DB_NAME,
     }
     await mongoose.connect(DATABASE_URL, DB_OPTIONS);
     console.log('Connected Successfully..');
    } catch (err) {
     console.log(err);
    }
   }
   
module.exports = {connectDB}
