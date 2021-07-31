//we'll connect mongoose to the db
require('dotenv').config();
  //Dotenv is a zero-dependency module that loads environment variables from a . env file 
                             //into process. 

const mongoose = require("mongoose");

const connectDB = async () => {
    try{
          await mongoose.connect(process.env.MONGO_URI, {
             useNewUrlParser: true,
             useUnifiedTopology: true
          });

          console.log("mongoDB successful")
    }
    catch(error){
      console.error("fail", error);
      process.exit(1);
     }
}

module.exports = connectDB;