import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("book/getData", async (gelen) => {
  const res = await axios(
    `https://www.googleapis.com/books/v1/volumes?q=${gelen[0]}&maxResults=12&startIndex=${gelen[1]}`
  );
  return res.data;
});

export const bookSlice = createSlice({
  name: "weather",
  initialState: {
    books: [],
    searchIndex:0,
    searchTerm:"",
    loading: false,
    gotError: false
  },
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    changeSearchIndex: (state, action) => {
      state.searchIndex = action.payload;
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload.items;
    },
    [fetchData.pending]: (state) => {
      state.loading = true;
      state.gotError = false;
    },
    [fetchData.rejected]: (state) => {
      state.loading = false;
      state.gotError = true;
    },
  },
});

export const { changeSearchTerm, changeSearchIndex } = bookSlice.actions;
export default bookSlice.reducer;
