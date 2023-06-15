import { createSlice } from '@reduxjs/toolkit';

export type Action<T> = {
  type: string;
  payload: T;
};

export type AppSlice = {
  loading: boolean;
  error: boolean;
  searchText: string;
  currentLocation: string;
};

const initialState: AppSlice = {
  loading: false,
  error: false,
  currentLocation: 'products',
  searchText: '',
};

// matcher functions
const errorActions = ({ type }: Action<string>) => type.includes('error');
const loadingSuccessActions = ({ type }: Action<string>) =>
  type.includes('success');
const loadingActions = ({ type }: Action<string>) => type.includes('pending');
const searchAction = ({ type }: Action<string>) =>
  type.toLowerCase().includes('search');

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loading: (state, { payload }) => {
      state.loading = payload;
      state.error = false;
    },
    error: (state, { payload }) => {
      state.error = payload;
    },
    navigation: (state, { payload }) => {
      state.currentLocation = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(loadingActions, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addMatcher(loadingSuccessActions, (state) => {
        state.loading = false;
      })
      .addMatcher(errorActions, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addMatcher(searchAction, (state, { payload }) => {
        state.searchText = payload;
        state.loading = payload ? true : false;
      });
  },
});

export const {
  loading: setAppLoading,
  error: setAppError,
  navigation: setNavigation,
} = appSlice.actions;
export default appSlice.reducer;
