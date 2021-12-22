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
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((cart) => cart._id !== payload);
    },
  },
});

export const { addToCart, removeFromCart, cartItemsLists } = cartSlice.actions;

export default cartSlice.reducer;
