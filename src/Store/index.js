import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products";
import categorySlice from "./categories";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    category: categorySlice.reducer
  },
  
});