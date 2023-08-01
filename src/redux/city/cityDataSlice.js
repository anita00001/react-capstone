// ./src/redux/city/cityDataSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// http://api.airvisual.com/v2/city?city=Kathmandu&state=Central Region&country=Nepal&key=cd90fbc7-1975-4405-b6b0-e7ca8f54d81f

const baseURL = 'http://api.airvisual.com/v2/';
const city = 'Kathmandu';
const country = 'Nepal';
const state = 'Central-Region';
const key = 'cd90fbc7-1975-4405-b6b0-e7ca8f54d81f';
const URL = `${baseURL}city?city=${city}&state=${state}&country=${country}&key=${key}`;

const initialState = {
  cityData: [],
  status: 'idle',
  error: null,
};

export const fetchCityData = createAsyncThunk('fetchCityData', async (thunkAPI) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong!');
  }
});

const cityDataSlice = createSlice({
  name: 'CityDataName',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityData.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(fetchCityData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cityData = {};
        state.cityData.city = action.payload.city;
        state.cityData.state = action.payload.state;
        state.cityData.country = action.payload.country;
        state.cityData.time = action.payload.current.pollution.ts;
        state.cityData.AQI = action.payload.current.pollution.aqius;
        state.cityData.temperature = action.payload.current.weather.tp;
        state.cityData.pressure = action.payload.current.weather.pr;
        state.cityData.humidity = action.payload.current.weather.hu;
        state.cityData.windSpeed = action.payload.current.weather.ws;
        state.cityData.windDirection = action.payload.current.weather.wd;
        state.cityData.iceCrystals = action.payload.current.weather.ic;
      })

      .addCase(fetchCityData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default cityDataSlice.reducer;
