import * as actionTypes from '../constants/productConstants';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try{
      dispatch({
      type:actionTypes.GET_PRODUCTS_REQUEST
  });
       const {data} = await axios.get("/api/products");

       dispatch({
           type: actionTypes.GET_PRODUCTS_SUCCESS,
           payload: data
       })

}
catch(error) {
    dispatch({
        type: actionTypes.GET_PRODUCTS_FAIL,
        //check if there's an error as a response, then that response has a msg
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
 }

}

export const getProductDetails = (id) => async (dispatch) => {
    try{
      dispatch({
      type:actionTypes.GET_PRODUCT_DETAILS_REQUEST
  });

  //we want to make a req to a specific endpoint , hence the backticks

       const {data} = await axios.get(`/api/products/${id}`);

       dispatch({
           type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
           payload: data
       })

}
catch(error) {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
        //check if there's an error as a response, then that response has a msg
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
 }

}

//if we switch back to the screen we want

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET
    })
   
}