// ./src/redux/state/stateSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// http://api.airvisual.com/v2/states?country=Nepal&key=cd90fbc7-1975-4405-b6b0-e7ca8f54d81f;

const baseURL = 'http://api.airvisual.com/v2/';
// const country = 'Nepal';
const key = 'cd90fbc7-1975-4405-b6b0-e7ca8f54d81f';
// const URL = `${baseURL}states?country=${country}&key=${key}`;

const initialState = {
  stateList: [],
  status: 'idle',
  error: null,
};

export const fetchStates = createAsyncThunk(
  'fetchStates',
  async (country, thunkAPI) => {
    try {
      const URL = `${baseURL}states?country=${country}&key=${key}`;
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

const stateSlice = createSlice({
  name: 'StatesName',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStates.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(fetchStates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.stateList = action.payload;
      })

      .addCase(fetchStates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default stateSlice.reducer;
