//this will be the entrance to our project, this is what we added on hthe main on package.json

//here we can start building our express server
require('dotenv').config()
const express = require("express");
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');


connectDB();

const app = express();

//we'll be needing json data from and to react client
app.use(express.json());

//so now any req going to http localhost 5000, api/products will have access to these routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 2000;

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`)); 