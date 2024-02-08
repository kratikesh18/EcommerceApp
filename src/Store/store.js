import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cart-slice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});


export default store;