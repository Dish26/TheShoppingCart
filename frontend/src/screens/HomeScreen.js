import React from 'react';
import './HomeScreen.css';
import Product from '../components/Product';
import {getProducts as listProducts} from '../redux/actions/productActions';

//will use useEffect to find our products 
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';


const HomeScreen = () => {

  const dispatch = useDispatch();

  const getProducts = useSelector(state => state.getProducts);
  const {products, loading, error} = getProducts;

  useEffect(() => {
        dispatch( listProducts())
  }, [dispatch]);

    return (
        <div className="homsecreen">
          <h2 className="homescreen-title"> Latest products </h2>
         {/* this div will have products inside of it  */}

         <div className="homescreen-products"> 
         {/* will get the products from our store */}
           {loading ? <h2> Loading... </h2>  : error ? <h2> {error} </h2> : products.map(product => (
             <Product 
             key={product._id} 
             productId={ product._id}
             name={product.name}
             price={product.price}
             description={product.description}
             imageUrl={product.imageUrl}
             />
           ))}
          
          </div>
        </div>
    )
}

export default HomeScreen;
