import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "groceryCart",
  initialState: {
    cartItems: [],
    totalPrice: "",
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems.push(payload);
      state.totalPrice = state.cartItems.reduce(
        (pre, current) => pre + current.price,
        0
      );
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((cart) => cart._id !== payload);
    },
  },
});

export const { addToCart, removeFromCart, cartItemsLists } = cartSlice.actions;

export default cartSlice.reducer;
