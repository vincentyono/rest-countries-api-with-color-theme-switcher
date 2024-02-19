import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  }
});

export default countrySlice.reducer;
