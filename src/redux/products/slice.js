import { createSlice } from '@reduxjs/toolkit';

import {
  getProductsAllows,
  keepConsumeProducts,
  getConsumes,
  deleteConsume,
} from './operations';

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    productsAllows: [],
    consumeDate: { date: null, products: [], owner: null },
  },
  reducers: {
    addProducts: (state, action) => {
      state.consumeDate = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getProductsAllows.fulfilled, (state, action) => {
      state.productsAllows = action.payload.data;
    });
    builder.addCase(keepConsumeProducts.fulfilled, (state, action) => {
      state.consumeDate = action.payload.data;
    });
    builder.addCase(getConsumes.fulfilled, (state, action) => {
      const validation = action.payload.data;

      if (validation.length === 0) {
        state.consumeDate.date = null;
        state.consumeDate.products = [];
        state.consumeDate.owner = null;
      } else {
        state.consumeDate = action.payload.data[0];
      }
    });
    builder.addCase(deleteConsume.fulfilled, (state, action) => {
      state.consumeDate = action.payload.data;
    });
  },
});

export const { addProducts, removeItem, getList, postInfo } =
  productListSlice.actions;
export const productListReducer = productListSlice.reducer;
