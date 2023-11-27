import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState ={
    categories : []
}

export const getCategories = createAsyncThunk("category", async()=>{
    const response=await fetch('https://fakestoreapi.com/products/categories')
    const data = response.json();
    return data;

})

const categorySlice =createSlice({
    name:"categories",
    initialState,
    reducers: {},
    //reducersler kodda dönen fonksiyonlar için
    /*eger bir api çalışması yapılarsan extraReducers kullan */
    // createAsyncThunk yazılması gerekir
    extraReducers:(builder)=>{
        builder
        .addCase(getCategories.fulfilled,(state,action)=>{
            state.categories=action.payload;
        })
    }

})

export default categorySlice.reducer