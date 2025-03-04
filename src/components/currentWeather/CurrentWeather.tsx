import styles from "./CurrentWeather.module.scss";
import { useSelector } from "react-redux";
import { selectWeather } from "../../store/slices/weatherSlice/weatherSlice";
import { getWeatherType } from "../../services/functions";

const CurrentWeather = () => {
  const { currentWeather, currentLocationSearch } = useSelector(selectWeather);
  const currentWeatherCode = currentWeather.current_weather?.weathercode;
  const weatherType = getWeatherType(currentWeatherCode);
  console.log(currentWeather);
  
  // const currentWeatherType = getWeatherType()
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <p>{currentLocationSearch.name}</p>
        <span>{currentLocationSearch.address?.country}</span>
        <p className={styles.timetemp}>
          {currentWeather.current_weather?.time.split("T")[1]} {" | "}
          {currentWeather.current_weather?.temperature}{" "}
          {currentWeather.current_weather_units?.temperature}
        </p>
      </div>
      <div className={styles.rightSide}>
        <img src={currentWeather.current_weather.is_day === 0 && weatherType.nightIcon
            ? weatherType.nightIcon
            : weatherType.icon} alt={weatherType.name} />
      </div>
    </div>
  );
};

export default CurrentWeather;
