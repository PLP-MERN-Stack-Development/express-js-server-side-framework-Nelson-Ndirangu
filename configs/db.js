// Connection to the database 
const mongoose = require('mongoose');
require ('dotenv').config();


// Connection function

const connectDB = async ()=>{
 try {
       await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewURLParser: true   
          });
    console.log("Database Connected Successfully...");
   
 } catch (error) {
    console.error({ message: message.error });
    process.exit(1);
 }
};

// Exporting the function
module.exports = connectDB;