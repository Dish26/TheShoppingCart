import * as actionTypes from '../constants/cartConstants';

//export our reducers   (2 args- initial state and action)
export const cartReducer = (state= {cartItems: [] }, action) =>{
     switch(action.type){
         case actionTypes.ADD_TO_CART :
             //in action.payload we'll get the item we'd like to add
           const item = action.payload;

           //then we'll check if this item already exits in the cart
           const existItems = state.cartItems.find((x) => x.product === item.product)

           if(existItems){
               return{
                   ...state,
                   cartItems: state.cartItems.map((x) => x.product=== existItems.product ? item : x )
               };
           }else{
               //if item nt found, it's the first time it's added to the cart
               return{
                   ...state,
                   cartItems: [...state.cartItems, item]
               };
           }

           case actionTypes.REMOVE_FROM_CART :
               return{
               ...state,
               cartItems: state.cartItems.filter((x) => x.product  !== action.payload)

               };
        
        default:
            return state;
     }

}