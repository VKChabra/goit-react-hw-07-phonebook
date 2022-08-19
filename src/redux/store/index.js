import { configureStore } from '@reduxjs/toolkit';
import contacts from 'redux/contacts';
import filter from 'redux/filter';

export const store = configureStore({
  reducer: {
    contacts,
    filter,
  },
});

export default store;
