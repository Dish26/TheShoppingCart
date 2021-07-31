import React from 'react';
import './CartScreen.css';


import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

//Components
import  CartItem from '../components/CartItem';

//Actions
import {addToCart, removeFromCart} from '../redux/actions/cartActions';

const Cartscreen = () => {
  const dispatch = useDispatch();

  //we want to get our cart from our state
  const cart = useSelector(state => state.cart);
  const {cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
       dispatch(addToCart(id, qty))
    }
    
    const removeHandler = (id) => {
      dispatch(removeFromCart(id))
    }

    const getCartCount = () => {
      return cartItems.reduce((qty, item) => 
        Number(item.qty) + qty, 0);
    }

    const getCartSubtotal = () => {
      return cartItems.reduce((price, item) => (item.price) * item.qty + price, 0)
    }

    return (
        <div className="cartscreen">
        <div className="cartscreen-left">
          <h2> shopping cart</h2>
          {cartItems.length === 0 ? (
           
            <div>
               your cart is empty <Link to="/"> Go bBack </Link> 
            
               </div>
            
          ) : cartItems.map(item => (
            <CartItem key={item.product} item={item}
             qtyChangeHandler={qtyChangeHandler} 
             removeHandler = {removeHandler}
             />)
            )}
         </div>
           
          <div className ="cartscreen-right">
           <div className="cartscreen-info">
             <p>Subtotal ({getCartCount()}) items</p>
             <p> ₹ {getCartSubtotal()}</p>
           </div>
           <div> <button> Proceed To Checkout</button> </div>
          </div>

        </div>
    )
}

export default Cartscreen
