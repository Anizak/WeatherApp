import styles from "./WeatherItem.module.scss";
import icon from "../../assets/images/sun.svg";
import { useSelector } from "react-redux";
import { selectWeather } from "../../store/slices/weatherSlice/weatherSlice";

const WeatherItem = ({ data }: any) => {
  const { currentWeather } = useSelector(selectWeather);

  return (
    <div className={styles.container}>
      <p className={styles.time}>{data.time.split("T")[1]}</p>
      <img src={icon} alt="sun" />
      <p className={styles.temperature}>
        {data.temperature} {currentWeather.current_weather_units.temperature}
      </p>
    </div>
  );
};

export default WeatherItem;
