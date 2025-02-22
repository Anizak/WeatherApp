import { createAsyncThunk } from "@reduxjs/toolkit";
import { countriesUrl, weatherApi } from "../../../configs/urls.config";

export const getLocation = createAsyncThunk(
  "weather/getLocation",
  async function (location: string, { rejectWithValue }) {
    try {
      const responseLocation = await fetch(
        countriesUrl + `?q=${location}&format=json&addressdetails=1`
      );

      if (!responseLocation.ok) {
        throw new Error("Error accured");
      }
      const resultLocation = await responseLocation.json();

      const { lat, lon } = resultLocation[0];

      const responseWeather = await fetch(
        weatherApi +
          `?latitude=${lat}&longitude=${lon}&current_weather&current_time&hourly=is_day,weathercode,temperature_2m,relativehumidity_2m,surface_pressure,windspeed_10m,winddirection_10m,uv_index&timezone=auto&forecast_days=7`
      );
      if (!responseWeather.ok) {
        throw new Error("Error accured");
      }

      const resultWeather = await responseWeather.json();
      return { weather: resultWeather, location: resultLocation[0] };
    } catch (error: any) {
      rejectWithValue(error.message);
    }
  }
);
