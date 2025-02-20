import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CategoriesStateTypes } from "../../types";
import { getCategoriesRequest } from "../../requests/categories";

export const getCategories = createAsyncThunk(
  "/categories",
  getCategoriesRequest
);

const initialState: CategoriesStateTypes = {
  categories: [],
  loadingCategories: false,
  errorCategories: false,
};

const categoriesSlice = createSlice({
  name: "categoies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.categories = [];
      (state.loadingCategories = true), (state.errorCategories = false);
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.categories = [];
      (state.loadingCategories = false), (state.errorCategories = true);
    });
  },
});

export default categoriesSlice.reducer;
