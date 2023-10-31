import { createSlice } from "@reduxjs/toolkit";
import productData from "../productData.json";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productData: productData,
    selectedProduct: undefined,
    selectedCategory: undefined
  },
  reducers: {
    // name of action to dispatch --> state and action that occurs
    showProduct: (state, action) => {
      // when action occurs we do this:
      state.selectedProduct = action.payload;
    },
    showCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
});

export default productSlice;