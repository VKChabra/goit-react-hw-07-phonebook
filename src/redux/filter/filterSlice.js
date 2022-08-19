import { createSlice } from '@reduxjs/toolkit';

export const SET_FILTER = 'setFilter';

const initialState = {
  filterValue: '',
};

const contactsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    [SET_FILTER]: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
