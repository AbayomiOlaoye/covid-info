import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'https://disease.sh/v3/covid-19/continents';

export const fetchCovidData = createAsyncThunk('countries/fetchData', async () => {
  const retrieveData = await fetch(BASE_URL);
  const response = await retrieveData.json();
  return response;
});

const covidSlicer = createSlice({
  name: 'country',
  initialState: {
    countries: [],
    status: null,
  },

  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchCovidData.pending, (state) => {
      const isPending = state;
      isPending.status = 'loading';
    });
    builder.addCase(fetchCovidData.fulfilled, (state, action) => {
      const isFulfilled = state;
      isFulfilled.status = 'fulfilled';
      isFulfilled.countries = action.payload;
    });
    builder.addCase(fetchCovidData.rejected, (state) => {
      const isRejected = state;
      isRejected.status = 'rejected';
    });
  },
});

export default covidSlicer.reducer;
