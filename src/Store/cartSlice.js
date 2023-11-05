import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const url = import.meta.env.VITE_API_URL;

export const deleteProduct = createAsyncThunk('DELETE/product/:id',
async ({product}) => {
  const removedProduct = {...product};
  const response = await fetch(`${url}/products/${product._id}`, {
    method: 'DELETE',
    body: JSON.stringify(removedProduct),
    headers: { 'Content-Type': 'application/json'},
  });
  const json = await response.json();
  return json;
})
// when i want to delete an item from the cart
// use product slice function of update product and add 1 to amount
// use a regular reducer action for cartslice and 
// remove the item from the cart at the index of the item i click on
// array.slice()?splice()?
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
    deleteProduct: (state, action) => {
      state.deleteProduct = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(deleteProduct.fulfilled, (state, action) => {
      const removedProduct = action.payload;
      const index = state.cart.selectedProduct.findIndex(p => p._id === removedProduct._id);
      state.cart.selectedProduct[index] = removedProduct;
    })
  }
})

export default cartSlice;