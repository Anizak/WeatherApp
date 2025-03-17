import styles from "./Weather.module.scss";
import Search from "../search/Search";
// import WeatherItem from "../items/WeatherItem";
import { useSelector } from "react-redux";
import { selectWeather } from "../../store/slices/weatherSlice/weatherSlice";
import CurrentWeather from "../currentWeather/CurrentWeather";
import TodaysForecast from "../todaysForcast/TodaysForecast";
import AirConditions from "../airConditions/AirConditions";
import WeekForecast from "../weekForecast/WeekForecast";
import skyVideo from "../../assets/videos/skyBackground.mp4";

const Weather = () => {
  const { currentLocationSearch } = useSelector(selectWeather);

  return (
    <div className={styles.container}>
      {Object.keys(currentLocationSearch).length > 0 ? (
        <>
          <div className={styles.leftSide}>
            <Search isTransparent={false} />
            <div className={styles.searchItemBox}>
              <CurrentWeather />
              <TodaysForecast />
            </div>
            <div className={styles.airConditionsBox}>
              <AirConditions />
            </div>
          </div>

          <div className={styles.rightSide}>
            <WeekForecast />
          </div>
        </>
      ) : (
        <>
          <video autoPlay loop muted className={styles.video}>
            <source src={skyVideo}></source>
          </video>
          <div className={styles.searchBox}>
            <div className={styles.searchField}>
              <Search isTransparent={true} />
              <h1>Welcome to our Weather Forecast App</h1>
              <p>Stay one step ahead of the weather!</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
