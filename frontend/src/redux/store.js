import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {cartReducer} from './reducers/cartReducers';
import { getProductsReducer,  getProductDetailsReducer} from './reducers/productReducers';
// import { json } from 'express';
 
const reducer = combineReducers({
    //passing an obj, and in here we'll have all our diffn reducers
      cart: cartReducer,
      getProducts: getProductsReducer,
      getProductDetails: getProductDetailsReducer

})
//array of all middlewares, but we have only 1 middleware here(thunk)
const middleware = [thunk];

const cartFromLocalstorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const INITIAL_STATE = {
    cart: {
        cartItems: cartFromLocalstorage
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
