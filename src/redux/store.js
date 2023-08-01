// .src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/countrySlice';
import stateReducer from './state/stateSlice';
import cityReducer from './city/citySlice';
import cityDataReducer from './city/cityDataSlice';

const store = configureStore({
  reducer: {
    country: countryReducer,
    states: stateReducer,
    city: cityReducer,
    dataCity: cityDataReducer,
  },
});

export default store;
