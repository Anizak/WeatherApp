import { weatherTypes, weekdays } from "./data.service";

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
  temperatures: any,
  weatherCodes: any
) => {
  const mergedArrays = times.map((elem: any, i: any) => ({
    time: elem.time,
    isDay: isDay[i],
    temperature: temperatures[i],
    weatherCode: weatherCodes[i],
  }));
  return mergedArrays;
};

export const weekDataWithTimes = (
  weekData: any,
  temperatures: any,
  weatherCodes: any,
  weekDays: any
) => {
  const mergedData = weekData.map((elem: any, i: any) => ({
    DateTime: elem.date,
    Temperature: temperatures[i],
    WeatherCode: weatherCodes[i],
    weekDay: weekDays[i].weekday,
  }));

  return mergedData;
};

export const generateWeekDay = (date: string) => {
  //"2025-03-06T00:00"
  const weekData = [];
  const currentDay = new Date(date.split("T")[0]); //Wed Mar 05 2025 21:30:00 GMT+0400 (Armenia Standard Time)

  for (let i = 1; i <= 7; i++) {
    const date = new Date(currentDay.setDate(currentDay.getDate() + 1));
    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let obj = {
      weekday: weekdays[date.getDay()],
      day: `${year}-${month}-${day}T15:00`,
      night: `${year}-${month}-${day}T03:00`,
    };

    weekData.push(obj);
  }
  return weekData;
};
