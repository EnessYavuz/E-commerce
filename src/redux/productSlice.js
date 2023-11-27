import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getproducts", async () => {
  const reponse = await fetch("https://fakestoreapi.com/products");
  const data = await reponse.json();
  return data;
});

export const getDeatailProduct = createAsyncThunk("getDeatailProduct", async (id) => {
  const reponse = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await reponse.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /*Verilerin gelme durumu pending*/
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      //pending den çıkıp fulfilled yani tamamlandı durumununa gelirse ne olsun
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      //hata durumu
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      })

      /* Detaylar sayfası için---------------------------------------*/

      /*Verilerin gelme durumu pending*/
      .addCase(getDeatailProduct.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      //pending den çıkıp fulfilled yani tamamlandı durumununa gelirse ne olsun
      .addCase(getDeatailProduct.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      //hata durumu
      .addCase(getDeatailProduct.rejected, (state, action) => {
        state.productDetailStatus = STATUS.FAIL;
      });
  },
});
export default productSlice.reducer;
