import { configureStore } from '@reduxjs/toolkit';
import filter from 'redux/filter/filterSlice';
import { apiSlice } from 'redux/api';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
