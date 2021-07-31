import React from 'react';
import './Product.css'; 
import {Link} from 'react-router-dom';

const Product = ({imageUrl, name, price, description, productId}) => {
    return (
        <div className="product">
           <img  src={imageUrl} 
           alt={name} />

           <div className="product_info">
            <p className="info-name"> {name}</p>

            <p className="info-description ">  
            {description.substring(0, 100)}...  </p> 

            <p className ="info-price"> ₹{price} </p>

            {/* we'll need a button to take us to this product  */}
            {/* setting product id to 1111 just like that but we'll dynamically render it afterwards*/}
            <Link to={`/product/${productId}`} className="info-button"> View</Link>
           </div>
        </div>
    )
}

export default Product;
