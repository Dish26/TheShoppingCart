import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


//destructing click from App 
const Navbar = ({click}) => {

  const cart  = useSelector(state => state.cart);
  const {cartItems} = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
  }

    return (
        <nav className="navbar">
        {/* logo */}
        <div className="navbar-logo">
        <h2>MERN Shopping Cart</h2>
        </div>

         <ul className="navbar-links">
         {/*each one of li will contain link that'd help us with the routing */}

           <li>
                 <Link to="/cart" className= "cart-link">
                  {/* shoppinf-cart icon */}
                  <i className="fas fa-shopping-cart"> </i>
                  <span> 
                  Cart
                  <span className="cartlogo-badge">{getCartCount()} </span>
                  </span>
                 </Link>
           </li>
            {/* back to the homepage */}
            <li>
                 <Link to="/" className="shopp">
                  Shop
                 </Link>
           </li>

         </ul>

          <div className="hamburger-menu" onClick={click}>  
             <div> </div>
             <div> </div>
             <div> </div>
          </div>
        </nav>
    )
}

export default Navbar
