import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk("fetchAllItems", async function () {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
  const data = await response.data;
  return data;
});

const initialState = {
  all_items: [],
  current_item: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.all_items = action.payload;
    });
  },
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
