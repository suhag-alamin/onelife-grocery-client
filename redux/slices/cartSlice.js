import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "groceryCart",
  initialState: {
    cartItems: [],
    totalPrice: "",
    orderedItems: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems.push(payload);
      state.totalPrice = state.cartItems.reduce(
        (pre, current) => pre + current.price,
        0
      );
    },
    discountedPrice: (state, { payload }) => {
      state.totalPrice = state.totalPrice - payload;
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((cart) => cart._id !== payload);
    },
    addToOrderList: (state, { payload }) => {
      state.orderedItems = payload.map((item) => item);
    },
  },
});

export const { addToCart, discountedPrice, removeFromCart, addToOrderList } =
  cartSlice.actions;

export default cartSlice.reducer;
