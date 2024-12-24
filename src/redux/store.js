import { configureStore } from '@reduxjs/toolkit';

// Import your reducers
import productReducer from './slices/productSlice'; // Example reducer for products
import cartReducer from './slices/cartSlice'; // Example reducer for cart

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
