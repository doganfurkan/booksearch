import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("book/getData", async (gelen) => {
  const res = await axios(
    `https://www.googleapis.com/books/v1/volumes?q=${gelen[0]}&maxResults=12&startIndex=${gelen[1]}`
  );
  return res.data;
});

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    searchIndex:0,
    searchTerm:"",
    loading: false,
    gotError: false,
    favoriteBooks:[]
  },
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    changeSearchIndex: (state, action) => {
      state.searchIndex = action.payload;
    },
    addFavorite: (state, action) => {
        if(!state.favoriteBooks.find(item => item.id === action.payload.id)){state.favoriteBooks.push(action.payload)}
    },
    removeFavorite: (state, action) => {
        let myIndex = state.favoriteBooks.findIndex(item => item.id === action.payload.id);
        state.favoriteBooks.splice(myIndex, 1);
    }
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

export const { changeSearchTerm, changeSearchIndex, addFavorite, removeFavorite } = bookSlice.actions;
export default bookSlice.reducer;
