// ./src/redux/city/citySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// http://api.airvisual.com/v2/cities?state=Central-Region&country=Nepal&key=cd90fbc7-1975-4405-b6b0-e7ca8f54d81f

const baseURL = 'http://api.airvisual.com/v2/';
const country = 'Nepal';
const state = 'Central-Region';
const key = 'cd90fbc7-1975-4405-b6b0-e7ca8f54d81f';
const URL = `${baseURL}cities?state=${state}&country=${country}&key=${key}`;

const initialState = {
  cityList: [],
  status: 'idle',
  error: null,
};

export const fetchCities = createAsyncThunk(
  'fetchCities',
  async (thunkAPI) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      // console.log(data);
      return data.data;
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  },
);

const citySlice = createSlice({
  name: 'CitiesName',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cityList = action.payload;
      })

      .addCase(fetchCities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default citySlice.reducer;
