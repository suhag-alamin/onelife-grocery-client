import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGroceries = createAsyncThunk(
  "grocery/fetchGroceries",
  async (userId, thunkAPI) => {
    const response = await fetch(
      "https://onelife-grocery.herokuapp.com/groceries"
    ).then((res) => res.json());
    console.log(response);
    return response;
  }
);
fetchGroceries();

const grocerySlice = createSlice({
  name: "grocery",
  initialState: {
    groceries: [],
    cartItems: [],
  },
  reducers: {
    // addToCart: (state, { payload }) => {
    //   state.readingList.push(payload);
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

export const { addToReadingList, removeFromReadingList } = grocerySlice.actions;

export default grocerySlice.reducer;
