import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchGroceries = createAsyncThunk(
//   "grocery/fetchGroceries",
//   async (userId, thunkAPI) => {
//     const response = await fetch(
//       "https://onelife-gocery-suhag.onrender.com/groceries"
//     ).then((res) => res.json());
//     return response;
//   }
// );
export const fetchGroceries = createAsyncThunk(
  "grocery/fetchGroceries",
  async (userId, thunkAPI) => {
    const response = await axios.get(
      "https://onelife-gocery-suhag.onrender.com/groceries"
    );
    return response.data;
  }
);

const grocerySlice = createSlice({
  name: "grocery",
  initialState: {
    groceries: [],
  },
  reducers: {
    // addToCart: (state, { payload }) => {
    //   state.cartItems.push(payload);
    // },
    // removeFromReadingList: (state, { payload }) => {
    //   state.readingList = state.readingList.filter(
    //     (book) => book._id !== payload
    //   );
    // },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchGroceries.fulfilled, (state, action) => {
      state.groceries = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchGroceries.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

// export const { addToCart } = grocerySlice.actions;

export default grocerySlice.reducer;
