import { createSlice } from '@reduxjs/toolkit';

export type CategorySlice = {
  data: string[];
  error: boolean;
  searchText: string;
};

const initialState: CategorySlice = {
  error: false,
  data: [],
  searchText: '',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    error: (state, { payload }) => {
      state.error = payload;
    },
    pending: (state) => {
      state.data = [];
      state.searchText = '';
    },
    success: (state, { payload }) => {
      state.data = payload;
    },
    categorySearch: (state, { payload }) => {
      state.searchText = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  error,
  pending: loadCategories,
  success: categoryList,
  categorySearch,
} = categorySlice.actions;

export default categorySlice.reducer;
