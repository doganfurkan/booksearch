import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("book/getData", async (gelen) => {
  const res = await axios(
    `https://www.googleapis.com/books/v1/volumes?q=${gelen[0]}&maxResults=12&startIndex=${gelen[1]}`
  );
  return res.data;
});

export const fetchDetail = createAsyncThunk("book/getDetail", async (gelen) => {
  const res = await axios(
    `https://www.googleapis.com/books/v1/volumes/${gelen}`
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
    localStoragePermission:false,
    favoriteBooks:[],
    detailBook:{},
    detailLoading: false
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
    },
    setLocalStoragePermission: (state, action) => {
        state.localStoragePermission = action.payload;
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
    [fetchDetail.fulfilled]: (state, action) => {
      state.detailLoading = false;
      state.detailBook = action.payload;
    },
    [fetchDetail.pending]: (state) => {
      state.detailLoading = true;
    },
    [fetchDetail.rejected]: (state) => {
      state.detailLoading = false;
    },
  },
});

export const { changeSearchTerm, changeSearchIndex, addFavorite, removeFavorite, setLocalStoragePermission } = bookSlice.actions;
export default bookSlice.reducer;
