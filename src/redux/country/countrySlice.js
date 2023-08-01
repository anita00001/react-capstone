// .src/redux/country/countrySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// http://api.airvisual.com/v2/countries?key=cd90fbc7-1975-4405-b6b0-e7ca8f54d81f

const baseURL = 'http://api.airvisual.com/v2/';
const key = 'cd90fbc7-1975-4405-b6b0-e7ca8f54d81f';
const URL = `${baseURL}countries?key=${key}`;

const initialState = {
  countryList: [],
  status: 'idle',
  error: null,
};

export const fetchCountries = createAsyncThunk(
  'fetchCountries',
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

const countrySlice = createSlice({
  name: 'CountriesName',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.countryList = action.payload;
      })

      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default countrySlice.reducer;
