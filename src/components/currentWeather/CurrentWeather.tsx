import styles from "./CurrentWeather.module.scss";
import img from "../../assets/images/sun.svg";
import { useSelector } from "react-redux";
import { selectWeather } from "../../store/slices/weatherSlice/weatherSlice";

const CurrentWeather = () => {
  const { currentWeather, currentLocationSearch } = useSelector(selectWeather);
  const currentWeatherCode = currentWeather.current_weather?.weathercode;
  // console.log(currentWeatherCode );

  const chooseWeatherCode = (wcode: number) => {
    console.log("mtav");

    if (wcode === 0) {
      return "Clear sky";
    } else if ([1, 2, 3].includes(wcode)) {
      return "Mainly clear, partly cloudy";
    } else if ([45, 48].includes(wcode)) {
      return "Fog and depositing rime fog";
    } else if ([51, 53, 55, 56, 57].includes(wcode)) {
      return "Drizzle: Light, moderate, and dense intensity";
    } else if ([61, 63, 65, 66, 67].includes(wcode)) {
      return "Rain: Slight, moderate and heavy intensity";
    } else if ([71, 73, 75, 77].includes(wcode)) {
      return "Snow fall: Slight, moderate, and heavy intensity";
    } else if ([80, 81, 82].includes(wcode)) {
      return "Rain showers: Slight, moderate, and violent";
    } else if ([85, 86].includes(wcode)) {
      return "Snow showers slight and heavy";
    } else if ([95, 96, 99].includes(wcode)) {
      return "Thunderstorm: Slight or moderate";
    } else {
      return " ";
    }
  };
  console.log(chooseWeatherCode(currentWeatherCode));

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
