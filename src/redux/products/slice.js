import { createSlice } from '@reduxjs/toolkit';

import {
  getProductsAllows,
} from './operations';

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    productsAllows: [],
    consumeDate: { date: null, productos: [], owner: null },
  },
  reducers: {
    addProducts: (state, action) => {
      state.consumeDate = action.payload.consume;
    },
  },
  extraReducers: builder => {
    builder.addCase(getProductsAllows.fulfilled, (state, action) => {
      state.productsAllows = action.payload;
    });
    builder.addCase(getProductsAllows.rejected, (state, action) => {
      // state.productsDiary = [];
    });
  //   builder.addCase(fetchsideBarInfo.fulfilled, (state, action) => {
  //     state.sideBarInfo = action.payload;
  //   });
  //   builder.addCase(fetchsideBarInfo.rejected, (state, action) => {
  //     // state.sideBarInfo = action.payload;
  //   });
  //   builder.addCase(postSideBarInfo.fulfilled, (state, action) => {
  //     state.sideBarInfo = action.payload;
  //   });
  //   builder.addCase(postSideBarInfo.rejected, (state, action) => {
  //     // state.sideBarInfo = action.payload;
  //   });
  //   builder.addCase(removeDiaryListItem.fulfilled, (state, action) => {
  //     const idx = state.productsDiary.findIndex(product => {
  //       return product._id === action.payload.id;
  //     });

  //     state.productsDiary.splice(idx, 1);
  //   });
  //   builder.addCase(removeDiaryListItem.rejected, (state, action) => {
  //     return state;
  //   });
  //   builder.addCase(addDiaryListItem.fulfilled, (state, action) => {
  //     state.productsDiary.unshift(action.payload);
  //   });
  },
});

export const { addProducts, removeItem, getList, postInfo } = productListSlice.actions;
export const productListReducer = productListSlice.reducer;
