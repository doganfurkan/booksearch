import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("weather/getData", async (gelen) => {
  const res = await axios(``);
  return res.data;
});

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "Istanbul",
    lat: 5,
    loading: false,
  },
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload;
    },
    changeParas: (state, action) => {
      state.paras = action.payload;
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.loading = false;
      state.city = `${action.payload.name}, ${action.payload.sys.country}`;
      state.daily.temp = action.payload.main.temp;
      state.daily.min = action.payload.main.temp_min;
      state.daily.max = action.payload.main.temp_max;
      state.daily.feels = action.payload.main.feels_like;
      state.daily.desc = action.payload.weather[0].description;
      state.daily.icon = action.payload.weather[0].icon;
      state.lat = action.payload.coord.lat;
      state.lon = action.payload.coord.lon;
    },
    [fetchData.pending]: (state) => {
      state.loading = true;
    },
  },
});
