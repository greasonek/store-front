import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import productData from "../productData.json";
const url = import.meta.env.VITE_API_URL;

export const getCategories = createAsyncThunk('GET/categories',
  async () => {
    const response = await fetch(`${url}/categories`);
    const json = await response.json();
    return json.results;
  });

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    // productData: productData,
    selectedCategory: undefined,
    displayName: 'all',
    listOfCategories: []
  },
  reducers: {
    // name of action to dispatch --> state and action that occurs
    showCategory: (state, action) => {
      // when action occurs we do this:
      state.selectedCategory = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.listOfCategories = action.payload;
      })
  }
});

export default categorySlice;