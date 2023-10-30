import { createSlice } from "@reduxjs/toolkit";
import productData from "../productData.json";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productData: productData,
    selectedProduct: undefined
  },
  reducers: {
    // name of action to dispatch --> state and action that occurs
    showProduct: (state, action) => {
      // when action occurs we do this:
      state.selectedProduct = action.payload;
    }
  }
});

export default productSlice;