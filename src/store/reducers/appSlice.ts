import { createSlice } from '@reduxjs/toolkit';

type Action = {
  type: string;
};

export type AppSlice = {
  loading: boolean;
  error: boolean;
  currentLocation: string;
};

const initialState: AppSlice = {
  loading: false,
  error: false,
  currentLocation: 'products',
};

// matcher functions
const errorAction = (action: Action) => action.type.includes('error');
const loadingEndAction = (action: Action) => action.type.includes('success');
const loadingInProcess = (action: Action) => action.type.includes('pending');

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNavigation: (state, { payload }) => {
      state.currentLocation = payload;
    },
    loading: (state, { payload }) => {
      state.loading = payload;
      state.error = false;
    },
    error: (state, { payload }) => {
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(loadingInProcess, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addMatcher(loadingEndAction, (state) => {
        state.loading = false;
      })
      .addMatcher(errorAction, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {
  setNavigation,
  loading: setAppLoading,
  error: setAppError,
} = appSlice.actions;
export default appSlice.reducer;
