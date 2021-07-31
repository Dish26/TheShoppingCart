//here we'll create the model that we've created

require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const productModel = require('./models/Product');


connectDB();

const importData = async () => {
//this will dlt everything on our database n then insert items
    
     try{
       await productModel.deleteMany({});
       await productModel.insertMany(productsData);

       console.log("data import success!");
       process.exit();
     }catch(error){
         console.error("error with data import", error);

         //exit with status code of 1
         process.exit(1);
     }
}

importData();