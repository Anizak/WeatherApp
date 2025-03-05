import styles from "./AirConditions.module.scss";
import wind from "../../assets/images/wind.png";
import windDirection from "../../assets/images/wind-vane.png";
import uv from "../../assets/images/uv.png";
import surfacePressure from "../../assets/images/pressure.png";
import relativeHumadity from "../../assets/images/humidity.png";
import { useSelector } from "react-redux";
import { selectWeather } from "../../store/slices/weatherSlice/weatherSlice";
import { getTimes } from "../../services/functions";

const AirConditions = () => {
  const { currentWeather } = useSelector(selectWeather);
  const currentTime = currentWeather.current_weather.time.split("T")[1];
  const currentHour = currentTime.split(":")[0];
  const todayTime = getTimes(currentWeather.hourly.time.slice(0, 24), [
    `${currentHour}:00`,
  ]);
  // console.log(todayTime);
  const relative = currentWeather.hourly.relativehumidity_2m.find(
    (elem: any, i: any) => i === todayTime[0].index
  );
  const winddirection = currentWeather.hourly.winddirection_10m.find(
    (elem: any, i: any) => i === todayTime[0].index
  );
  const pressure = currentWeather.hourly.surface_pressure.find(
    (elem: any, i: any) => i === todayTime[0].index
  );
  const windSpeed = currentWeather.hourly.windspeed_10m.find(
    (elem: any, i: any) => i === todayTime[0].index
  );
  const uvIndex = currentWeather.hourly.uv_index.find(
    (elem: any, i: any) => i === todayTime[0].index
  );

  return (
    <div className={styles.container}>
      <p>Air Conditions</p>
      <div className={styles.conditionInfo}>
        <div className={styles.box}>
          <div className={styles.titleBox}>
            <img src={wind} alt="wind" />
            <p>Wind</p>
          </div>
          <p className={styles.info}>
            {windSpeed} {currentWeather.hourly_units.windspeed_10m}
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.titleBox}>
            <img src={windDirection} alt="windDirection" />
            <p>wind direction</p>
          </div>
          <p className={styles.info}>
            {winddirection}
            {currentWeather.hourly_units.winddirection_10m}
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.titleBox}>
            <img src={relativeHumadity} alt="relative" />
            <p>Relative Humidity</p>
          </div>
          <p className={styles.info}>
            {relative} {currentWeather.hourly_units.relativehumidity_2m}
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.titleBox}>
            <img src={surfacePressure} alt="pressure" />
            <p>Surface Pressure</p>
          </div>
          <p className={styles.info}>
            {pressure} {currentWeather.hourly_units.surface_pressure}
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.titleBox}>
            <img src={uv} alt="uv" />
            <p>UV Index</p>
          </div>
          <p className={styles.info}>{uvIndex}</p>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
