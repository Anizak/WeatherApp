import styles from "./WeatherItem.module.scss";
import { useSelector } from "react-redux";
import { selectWeather } from "../../store/slices/weatherSlice/weatherSlice";
import { getWeatherType } from "../../services/functions";

const WeatherItem = ({ data }: any) => {
  const { currentWeather } = useSelector(selectWeather);

  const weatherType = getWeatherType(data.weatherCode);
  return (
    <div className={styles.container}>
      <p className={styles.time}>{data.time.split("T")[1]}</p>
      <img
        src={
          data.isDay === 0 && weatherType.nightIcon
            ? weatherType.nightIcon
            : weatherType.icon
        }
        alt={weatherType.name}
      />
      <p className={styles.temperature}>
        {data.temperature} {currentWeather.current_weather_units.temperature}
      </p>
    </div>
  );
};

export default WeatherItem;
