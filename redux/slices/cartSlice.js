import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "groceryCart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems.push(payload);
    },
    // removeFromReadingList: (state, { payload }) => {
    //   state.readingList = state.readingList.filter(
    //     (book) => book._id !== payload
    //   );
    // },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
