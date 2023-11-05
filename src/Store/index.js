import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import categorySlice from "./categoriesSlice";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    category: categorySlice.reducer,
    cart: cartSlice.reducer
  },
  
});