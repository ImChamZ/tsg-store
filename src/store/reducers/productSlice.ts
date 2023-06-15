/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from '@reduxjs/toolkit';
import { ProductList } from '../../shared/ProductGrid';
import { Action } from './appSlice';

export type ProductSlice = {
  data: ProductList;
};

const initialProductList = {} as ProductList;

const initialState: ProductSlice = {
  data: initialProductList,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    success: (state: ProductSlice, { payload }: Action<ProductList>) => {
      state.data = payload;
    },
    pending: (state: ProductSlice) => {
      state.data = initialProductList;
    },
    pendingProduct: () => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    pendingByCategory: (state: ProductSlice, { payload }: Action<string>) => {
      state.data = initialProductList;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  success,
  pending: getProductList,
  pendingByCategory: getProductListByCategory,
  pendingProduct: getProductById,
} = productSlice.actions;

export default productSlice.reducer;
