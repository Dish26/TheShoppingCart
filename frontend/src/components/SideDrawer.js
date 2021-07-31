import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideDrawer = ({show, click}) => {
    const SideDrawerClass = ["sidedrawer"];


    if(show){
        SideDrawerClass.push("show")
    }

    const cart  = useSelector(state => state.cart);
  const {cartItems} = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
  }


    return (
        <div className={SideDrawerClass.join(" ")}   onClick={click}>
            <ul className="sidedrawer-links" >
               <li>
                  <Link to="/cart">
                    <i className="fas fa-shopping-cart"> </i>
                    <span> 
                  Cart  <span className="sidedrawer-cartbadge">{getCartCount()} </span>
                  </span>
                  </Link>
               </li>

               <li> 
                  <Link to="/">
                     Shop
                  </Link>
               </li>

            </ul>
        </div>
    )
}

export default SideDrawer
