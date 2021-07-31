import React from 'react';
import './CartItem.css';
import {Link} from 'react-router-dom';

const CartItem = ({item, qtyChangeHandler, removeHandler}) => {
    return (
        <div className="cartitem">
           <div className="cartitem-image">
            <img src={item.imageUrl} alt={item.name} />
           </div>

           {/* link which will take us to the individual product  */}
           <Link to={`/product/${item.product}`}  className="cartitem-name">
           {/* this p tag will contain the name */}
            <p> {item.name} </p>
           </Link>

           <p className="cartitem-price"> {item.price} ₹</p>

           <select className="cartitem-select" value={item.qty} 
           onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>  

           { /* we'll render it dynamically */}
           {[...Array(item.countInStock).keys()].map( x=> (
               <option key={x+1} value={x+1} > {x+1} </option>
           ))}
           </select>

          {/* btn to dlt or remove items from the cart */}
          <button className="cartitem-deleteBtn" onClick={() => removeHandler(item.product)}>
            <i className="fas fa-trash"></i>
           </button>

        </div>
    )
}

export default CartItem
