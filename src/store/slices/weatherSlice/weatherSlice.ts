import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocation } from "./weatherApi";
import { RootState } from "../../store";

type Weather = {
  currentLocationSearch: any;
  loading: boolean;
  error: string;
  currentWeather: any;
  weekData: any;
};
const initialState: Weather = {
  currentLocationSearch: {},
  loading: false,
  error: "",
  currentWeather: {},
  weekData: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    // addWeather(state, action) {
    //   console.log(state);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLocation.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLocation.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.currentLocationSearch = action.payload.location ? action.payload.location : {};
        state.currentWeather = action.payload.weather ? action.payload.weather : {};
      })
      .addCase(getLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// export const { addWeather } = weatherSlice.actions;
export const selectWeather = (state: RootState) => state.weatherSlice;
export default weatherSlice.reducer;
