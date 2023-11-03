import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    selectedProduct: undefined,
    productsInCart: 0,
    showCart: false,
    totalCost: 0
  },
  reducers: {
    addToCart: (state, action) => {
      console.log('action', action);
      const {price} = action.payload;
      state.cart = [...state.cart, action.payload];
      state.productsInCart += 1;
      state.totalCost += price;
    },
    showCart: (state, action) => {
      state.showCart = action.payload;
      // state.productsInCart += 1
    },
    deleteItem: (state, action) => {
      state.deleteItem = action.payload;
    }
  }
})

export default cartSlice;