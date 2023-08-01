import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'http://api.airvisual.com/v2/countries';
const key = 'cd90fbc7-1975-4405-b6b0-e7ca8f54d81f';

const URL = `${baseUrl}?key=${key}`;

const initialState = {
  country: [],
  status: 'idle',
  error: null,
};

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (thunkAPI) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      return data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  },
);

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.country = action.payload;
      })

      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default countrySlice.reducer;
