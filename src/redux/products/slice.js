import { createSlice } from '@reduxjs/toolkit';

import {
  getProductsAllows,
  keepConsumeProducts,
  getConsumes,
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
      console.log('esto es validation');
      console.log(validation);
      if (validation.length === 0) {
        console.log('entra al if slice');
        state.consumeDate.date = null;
        state.consumeDate.products = [];
        state.consumeDate.owner = null;
        console.log('esto es consumeDate');
        console.log(state.consumeDate);
      } else {
        state.consumeDate = action.payload.data[0];
      }
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

export const { addProducts, removeItem, getList, postInfo } =
  productListSlice.actions;
export const productListReducer = productListSlice.reducer;
