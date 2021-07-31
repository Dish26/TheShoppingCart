import React from 'react';
import './ProductScreen.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProductDetails} from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';


//this is the individual product screen, when we click the view btn of a product

const ProductScreen = ({match, history}) => {

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.getProductDetails);
  const {loading, error, product} = productDetails;

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push('/cart'); 
  }

  useEffect (() => {
    //match.params gives us the id of the individual product
      if(product &&  match.params.id!== product._id ){
            dispatch(getProductDetails(match.params.id))
      }
  }, [dispatch, product, match])

    return (

        <div className="productscreen">
          {loading ? <h2>Loading... </h2> : error ? <h2> {error} </h2> : (
            <React.Fragment>
            <div className = "productscreen-left" > 

            <div className = "left-image">
            {/* these all imageUrl and all r coming from our state now  */}
             <img src= {product.imageUrl}
              alt={product.name}/> 
            </div>

            <div className="left-info"> 
              <p className="left-name"> {product.name}</p>
              <p > price:  ₹ {product.price}  </p>
              <p > Description : {product.description}</p>
            </div>

         </div>

         <div className = "productscreen-right" > 
           <div className="right-info">
            <p> 
            price: <span> ₹ {product.price}  </span>
             </p>
             <p>
             Status: <span>{product.countInStock > 0 ? "In Stock"  : "Out of stock"} </span>
             </p>
             <p>
               quantity:
                <select value={qty} onChange={e => setQty(e.target.value)} >
               {[...Array(product.countInStock).keys()].map((x) => (
                 <option key={x+1} value={x+1} >{x+1}</option>
               ))}
                </select>
             </p>
             <p>
              <button type="button" onClick={addToCartHandler}> Add to  cart </button>
             </p>
           </div>
         </div>
            </React.Fragment>
          )}
            

        </div>
    )
}

export default ProductScreen
