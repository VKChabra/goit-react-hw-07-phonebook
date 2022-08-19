import { createSlice } from '@reduxjs/toolkit';

export const CONTACTS_SLICE_NAME = 'contacts';

const initialState = {
  error: '',
  isLoading: false,
  items: [],
};

const contactsSlice = createSlice({
  name: CONTACTS_SLICE_NAME,
  initialState,
  reducers: {
    fetchItemsRequest: state => {
      state.error = '';
      state.isLoading = true;
    },
    fetchItemsSuccess: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    fetchItemsFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { fetchItemsRequest, fetchItemsSuccess, fetchItemsFailure } =
  contactsSlice.actions;
export default contactsSlice.reducer;
