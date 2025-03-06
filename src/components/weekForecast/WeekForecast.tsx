import { useSelector } from "react-redux";
import { generateWeekDay, weekDataWithTimes } from "../../services/functions";
import styles from "./WeekForecast.module.scss";
import { selectWeather } from "../../store/slices/weatherSlice/weatherSlice";

const WeekForecast = () => {
  const { currentWeather } = useSelector(selectWeather);
  const weekData = generateWeekDay(currentWeather.current_weather.time); //!!! start generating from the next day ;?
  const weekDates = currentWeather.hourly.time; //weekDates.length = 168
  // console.log(weekData);

  //filtered data from 7 days x 24 hours array of dateTimes for night and day;
  const filteredDatesForDay = weekDates
    .map((date: any, i: any) => ({ date, index: i }))
    .filter(({ date }: any) => weekData.map((obj) => obj.day).includes(date));

  const filteredDatesForNight = weekDates
    .map((date: any, i: any) => ({ date, index: i }))
    .filter(({ date }: any) => weekData.map((obj) => obj.night).includes(date));

  //indexes for night and day;
  const dayIndexes = filteredDatesForDay.map((obj: any) => obj.index);
  const nightIndexes = filteredDatesForNight.map((obj: any) => obj.index);

  const dayTemperatures = currentWeather.hourly.temperature_2m.filter(
    (elem: any, i: any) => dayIndexes.includes(i)
  );
  const dayWeatherCodes = currentWeather.hourly.weathercode.filter(
    (elem: any, i: any) => dayIndexes.includes(i)
  );
  const nightTemperatures = currentWeather.hourly.temperature_2m.filter(
    (elem: any, i: any) => nightIndexes.includes(i)
  );

  const nightWeatherCodes = currentWeather.hourly.weathercode.filter(
    (elem: any, i: any) => nightIndexes.includes(i)
  );

  //is_day = 0 kam is_day = 1 kariq ka avelacnelu datai mej?
  const weekTimeForDay = weekDataWithTimes(
    filteredDatesForDay,
    dayTemperatures,
    dayWeatherCodes,
    weekData
  );
  const weekTimeForNight = weekDataWithTimes(
    filteredDatesForNight,
    nightTemperatures,
    nightWeatherCodes,
    weekData
  );
  console.log(weekTimeForDay, weekTimeForNight);

  return (
    <div className={styles.container}>
      <p>7-Day Forecast</p>
    </div>
  );
};

export default WeekForecast;
