import { weatherTypes } from "./data.service";

export const getWeatherType = (wcode: number) => {
  return weatherTypes.find((obj) => obj.weatherCodes.includes(wcode));
};

// 2025-02-28T00:00

export const getTimes = (timeData: any, validTimes: any) => {
  const times: Array<any> = [];
  for (let i = 0; i < timeData.length; i++) {
    if (validTimes.includes(timeData[i].split("T")[1])) {
      times.push({ time: timeData[i], index: i });
    }
  }

  return times;
};

export const weatherDataWithTimes = (
  times: any,
  isDay: any,
  temperatures: any
) => {
  const mergedArrays = times.map((elem: any, i: any) => ({time: elem.time, isDay: isDay[i], temperature: temperatures[i]}));
  return mergedArrays;
  
};
