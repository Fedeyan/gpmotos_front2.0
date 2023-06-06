import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { checkSession } from "../functions/axios";
export const getUserdata = createAsyncThunk("fetchUserdata", async function () {
  const axiosFetch = await axios.get(`${process.env.REACT_APP_API_URL}/user`, {
    withCredentials: true,
  });
  const data = await axiosFetch.data;
  return data;
});

export const checkSessionAction = createAsyncThunk(
  "checkSesison",
  checkSession
);

const initialState = {
  sessionBool: true,
  userdata: [],
};

const userReducer = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    clearState: function (state) {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserdata.fulfilled, (state, action) => {
      state.userdata = action.payload;
    });
    builder.addCase(checkSessionAction.fulfilled, (state, action) => {
      state.sessionBool = action.payload;
    });
  },
});

export default userReducer.reducer;
