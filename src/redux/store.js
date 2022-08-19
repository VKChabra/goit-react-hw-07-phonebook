import { configureStore } from '@reduxjs/toolkit';
import contacts from 'redux/contacts/contactsSlice';
import filter from 'redux/filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts,
    filter,
  },
});

export default store;
