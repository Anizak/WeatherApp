import { useSelector } from "react-redux";
import WeatherItem from "../items/WeatherItem";
import styles from "./TodaysForcast.module.scss";
import { selectWeather } from "../../store/slices/weatherSlice/weatherSlice";
import { getTimes, weatherDataWithTimes } from "../../services/functions";
import { times } from "../../services/data.service";

const TodaysForecast = () => {
  const { currentWeather } = useSelector(selectWeather);
  const timeData = getTimes(currentWeather.hourly.time.slice(0, 24), times);
  const indexes = timeData.map((obj) => obj.index);
  const isDay = currentWeather.hourly.is_day.filter((elem: any, i: any) =>
    indexes.includes(i)
  );
  const temperatures = currentWeather.hourly.temperature_2m.filter(
    (elem: any, i: any) => indexes.includes(i)
  );
  const weatherCodes = currentWeather.hourly.weathercode.filter(
    (elem: any, i: any) => indexes.includes(i)
  );
  const weatherTimeData = weatherDataWithTimes(timeData, isDay, temperatures,weatherCodes);

  return (
    <div className={styles.container}>
      <p>Today's Forecast</p>
      <div className={styles.todayFoecast}>
        {weatherTimeData.map((elem: any) => {
          return <WeatherItem key={elem.time} data={elem}/>;
        })}
      </div>
    </div>
  );
};

export default TodaysForecast;
