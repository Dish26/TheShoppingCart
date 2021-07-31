//in here is where we do all the fetchings

const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try{
   //to get data from the database
     const products = await Product.find({})

     //our frontend will make  req to this endpoints and we'll receive all these products
     res.json(products);

  }catch(error){
    console.error(error);
    res.status(500).json({message: "server error!"})
;  }
}

const getProductById = async (req, res) => {
    try{
     //to get data from the database
       const product = await Product.findById(req.params.id)  //route GET api/products/:id
  
       //our frontend will make  req to this endpoints and we'll return that individual product 
       res.json(product);
  
    }catch(error){
      console.error(error);
      res.status(500).json({message: "server error!"});
      }
  }

  module.exports = {
      getAllProducts, getProductById
  };