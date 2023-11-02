import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    selectedProduct: undefined,
    productsInCart: 0,
    showCart: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.productsInCart += 1;
    },
    showCart: (state, action) => {
      state.showCart = action.payload;
    }
  }
})

export default cartSlice;