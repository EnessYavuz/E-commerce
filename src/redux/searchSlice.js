import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {

};

export const getSearchProducts = createAsyncThunk("getSearchProducts", async (keyword) => {
  const reponse = await fetch(`https://fakestoreapi.com/products`);
  const data = await reponse.json();
  return data;
});



const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /*Verilerin gelme durumu pending*/
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })

  
    },
});
export default searchSlice.reducer;
