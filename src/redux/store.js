import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice.js";
import userReducer from "./userSlice.js";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
  },
});

