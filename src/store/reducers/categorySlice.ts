import { createSlice } from '@reduxjs/toolkit';
import { Action } from './appSlice';

export type CategorySlice = {
  data: string[];
};

const initialState: CategorySlice = {
  data: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    pending: (state: CategorySlice) => {
      state.data = [];
    },
    success: (state: CategorySlice, { payload }: Action<string[]>) => {
      state.data = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pending: getCategoryList, success } = categorySlice.actions;

export default categorySlice.reducer;
