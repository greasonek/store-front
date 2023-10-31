import { createSlice } from "@reduxjs/toolkit";
// import productData from "../productData.json";

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    // productData: productData,
    selectedCategory: undefined,
    displayName: 'all'
  },
  reducers: {
    // name of action to dispatch --> state and action that occurs
    showCategory: (state, action) => {
      // when action occurs we do this:
      state.selectedCategory = action.payload;
    }
  }
});

export default categorySlice;