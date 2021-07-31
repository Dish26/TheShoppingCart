//in here we'll handle all of the state that we receive from our backend
import * as actionTypes from '../constants/productConstants';

//this reducer gets us all the products hwen we go the homepage, it'd fetch all the products abd list them
export const getProductsReducer = (state = {products : [] }, action) => {
   switch(action.type){

      case actionTypes.GET_PRODUCTS_REQUEST:
          return{
              loading: true, //this will allow our application to wait until this value is false, before we certain things otherwise it'd crash
              // so we set loading to true and set products equal to nothing  
              products: []
          };
      case actionTypes.GET_PRODUCTS_SUCCESS:
          //now we got the products    
          return{
              loading: false,
              //from our backend, we'll receive an array and then we just populate this products with the array that we got from the backend
              products: action.payload,
          };
       case actionTypes.GET_PRODUCTS_FAIL:
           return{
              //will send the error msg in this payload
              loading: false,
              error: action.payload,
           };    

        default:   
        return state;
   }
}

export const getProductDetailsReducer  = (state = {product: {}}, action) => {
   switch(action.type){
       case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
         return{
            loading: true
         };

       case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
           return{
               loading: false,
               //whatever we get from backend in r action.payload(individual product) we're adding that to r product object
               product: action.payload
           };
       case actionTypes.GET_PRODUCT_DETAILS_FAIL:
           return{
               loading: false,
               error: action.payload
           };
       case actionTypes.GET_PRODUCT_DETAILS_RESET:
           return{
               //prod equal to an empty doc
                product: {}
           }     

       default:
           return state;
   }
}