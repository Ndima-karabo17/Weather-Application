import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherData } from '../../../../weather-app/src/types'; 

interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: '',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWeather(state, action: PayloadAction<WeatherData>) {
      state.data = action.payload;
      state.loading = false;
      state.error = '';
    },
    setLoading(state) {
      state.loading = true;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    clearWeather(state) {
      state.data = null;
      state.loading = false;
      state.error = '';
    },
  },
});

export const { getWeather, setLoading, setError, clearWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
