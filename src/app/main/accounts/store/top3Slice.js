import { createSlice } from '@reduxjs/toolkit';

const top3Slice = createSlice({
  name: 'top3',
  initialState: {
    items: [
      {
        id: "1",
        image: "https://cdn.discordapp.com/attachments/924956482200567859/1142092655401111562/image.png",
        url: "https://www.ig.com/",
        rating: 4,
        name: "IG.com"
      },
      {
        id: "2",
        image: "https://cdn.discordapp.com/attachments/924956482200567859/1142092526560493718/image.png",
        url: "https://www.darwinex.com/",
        rating: 4,
        name: "Darwinex"
      },
      {
        id: "3",
        image: "https://cdn.discordapp.com/attachments/924956482200567859/1142092287564853299/image.png",
        url: "https://app.deriv.com/",
        rating: 4,
        name: "Deriv"
      },
    ]
  },
  reducers: {
    getAllItems: (state, action) => {
      state.items = state.items
    },
    reorderItems: (state, action) => {
      const { startIndex, endIndex } = action.payload
      const result = Array.from(state.items);
      const [removed] = result.splice(startIndex, 1);
      console.log(startIndex, endIndex);
      result.splice(endIndex, 0, removed);

      state.items = result;
    }
  },
});

export const {
  getAllItems,
  reorderItems
} = top3Slice.actions;

export default top3Slice.reducer;
