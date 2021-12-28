import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrderedItems = createAsyncThunk(
  "orderedGrocery/fetchOrderedItems",
  async (email) => {
    const response = await axios.get(
      `https://onelife-grocery.herokuapp.com/orders?email=${email}`
    );
    return response.data;
  }
);

const orderSlice = createSlice({
  name: "orderedGrocery",
  initialState: {
    orderedItems: [],
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchOrderedItems.fulfilled, (state, action) => {
      state.orderedItems = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchOrderedItems.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

// export const { addToCart } = grocerySlice.actions;

export default orderSlice.reducer;
