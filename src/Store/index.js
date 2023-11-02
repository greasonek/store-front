import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products";
import categorySlice from "./categories";
import cartSlice from "./cart";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    category: categorySlice.reducer,
    cart: cartSlice.reducer
  },
  
});