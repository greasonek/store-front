import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import productData from "../productData.json";
const url = import.meta.env.VITE_API_URL;

// sets up a function that runs asynchronously and returns something
export const getProducts = createAsyncThunk('GET/products', 
  async () => {
    // this GETS products from the API
    const response = await fetch(`${url}/products`);
    const json = await response.json();
    return json.results;
  });
  // this UPDATES a SINGLE product from API
  export const updateProduct = createAsyncThunk('PUT/product/:id', 
  async ({product, amount}) => {
    const modifiedProduct = {...product, inStock: product.inStock + amount};
    const response = await fetch(`${url}/products/${product._id}`, {
      method: 'PUT', 
      body: JSON.stringify(modifiedProduct),
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await response.json();
    return json;
  });

const productSlice = createSlice({
  name: 'product',
  initialState: {
    // productData: productData,
    selectedProduct: undefined,
    selectedCategory: undefined,
    unavailable: false,
    listOfProducts: []
  },
  reducers: {
    // name of action to dispatch --> state and action that occurs
    showProduct: (state, action) => {
      // when action occurs we do this:
      state.selectedProduct = action.payload;
    },
    showCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    reduceStock: (state, action) => {
      state.selectedProduct = action.payload;
      if(state.selectedProduct === 0){
        state.unavailable = true;
      } else {
        state.selectedProduct = {...state.selectedProduct, inStock: state.selectedProduct.inStock -= 1}
      }
    },
  },
  // acts like a switch case
  // listens for async function to be run
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        state.listOfProducts = action.payload;
      })
      // after this you will write a useEffect that dispatches the function (getProducts)
      .addCase(updateProduct.fulfilled, (state, action) => {
        const modifiedProduct = action.payload;
        const index = state.listOfProducts.findIndex(p => p._id === modifiedProduct._id);
        state.listOfProducts[index] = modifiedProduct;
      })
  },
});

export default productSlice;