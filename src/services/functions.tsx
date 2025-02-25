import { weatherTypes } from "./data.service";

export const getWeatherType = (wcode: number) => {
  return weatherTypes.find((obj) => obj.weatherCodes.includes(wcode));
};
