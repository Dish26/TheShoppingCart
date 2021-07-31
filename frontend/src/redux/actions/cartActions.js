//here we'll make http req to our backend to get product details and add it to the cart 
import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

//id ~ product id 
//will return the asynchronous fntn which has the access to dispatch fntn (this is why we use redux-thunk)

export const addToCart = (productId, qty) => async(dispatch, getState) => {
     const {data } = await axios.get(`/api/products/${productId}`);

     dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
          product: data._id,
          name: data.name,
          //imageUrl comes from the database now
          imageUrl: data.imageUrl,
          price: data.price,
          countInStock : data.countInStock,
          //getting this qty from the fntn call
          qty
      }
     });

     //now we want to save this cart to local storage...in json.stringify, we want to get the data that we dispatched above
     localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
  
}

// export const addToCart = createAsyncThunk(
//     'cart/addItem', // base action name
//     async ({productId, qty}) => {
//       const { data } = await axios.get(`api/products/${productId}`);
//       // return the success payload
//       return {
//           name: data.name,
//           image: data.image,
//           price: data.price,
//           countInStock: data.countInStock,
//           product: data._id,
//           qty
//         }
//       }
//   );


export const removeFromCart = (id) => (dispatch, getState )=>{
     dispatch({
         type: actionTypes.REMOVE_FROM_CART,
         payload: id,

     });
     localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}