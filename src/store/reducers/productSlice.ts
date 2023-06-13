import { createSlice } from '@reduxjs/toolkit';
import { ProductList } from '../../shared/ProductGrid';

export type ProductSlice = {
  data: ProductList;
  error: boolean;
  searchText: string;
};

const initialProductList = {} as ProductList;

const initialState: ProductSlice = {
  data: initialProductList,
  error: false,
  searchText: '',
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    error: (state, { payload }) => {
      state.error = payload;
    },
    success: (state, { payload }) => {
      state.data = payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    pending: (state, _payload) => {
      state.data = initialProductList;
    },
    pendingSearch: (state, { payload }) => {
      state.searchText = payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    pendingProduct: (state, { payload }) => {},
    pendingListByCategory: (state, { payload }) => {
      state.data = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  error: loadingError,
  pending: loadingProducts,
  success: productList,
  pendingSearch: productSearch,
  pendingListByCategory: productListByCategory,
  pendingProduct: getProductById,
} = productSlice.actions;

export default productSlice.reducer;
