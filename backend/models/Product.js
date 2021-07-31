//here basically we'll tell mongoose how our product will look like
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type:Number,
        required: true,
        
    },
    countInStock:{
        type:Number,
        required: true,
        
    },
    imageUrl:{
        type:String,
        required: true
    },

    id_no: {
     
         id_no1: {
             type: Number,
            
         }
      },
    
})

//now we'll create the model

const Product = mongoose.model('product', productSchema);

module.exports = Product;