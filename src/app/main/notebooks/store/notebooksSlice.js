import { createSlice } from '@reduxjs/toolkit';

const noteBooksSlice = createSlice({
  name: 'notebooks',
  initialState: {
    myNotebooks: [],
    publicNotebooks: [],
    marketPlace: [],
  },
  reducers: {
    getMyNotebooks: (state, action) => {
      
    },
    addNotebook: (state, action) => {
      state.myNotebooks.push(action.payload)
    }
  },
});

export const {
  getMyNotebooks,
  addNotebook
} = noteBooksSlice.actions;

export default noteBooksSlice.reducer;
