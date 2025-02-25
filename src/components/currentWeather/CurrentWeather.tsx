import styles from "./CurrentWeather.module.scss";
import img from "../../assets/images/sun.svg";
import { useSelector } from "react-redux";
import { selectWeather } from "../../store/slices/weatherSlice/weatherSlice";
import { getWeatherType } from "../../services/functions";

const CurrentWeather = () => {
  const { currentWeather, currentLocationSearch } = useSelector(selectWeather);
  const currentWeatherCode = currentWeather.current_weather?.weathercode;
  const weatherType = getWeatherType(currentWeatherCode);

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <p>{currentLocationSearch.name}</p>
        <span>{currentLocationSearch.address?.country}</span>
        <p>
          {currentWeather.current_weather?.temperature}{" "}
          {currentWeather.current_weather_units?.temperature}
        </p>
      </div>
      <div className={styles.rightSide}>
        <img src={img} alt="weather_icon" />
      </div>
    </div>
  );
};

export default CurrentWeather;
