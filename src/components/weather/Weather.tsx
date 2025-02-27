import styles from "./Weather.module.scss";
import Search from "../search/Search";
// import WeatherItem from "../items/WeatherItem";
import { useSelector } from "react-redux";
import { selectWeather } from "../../store/slices/weatherSlice/weatherSlice";
import CurrentWeather from "../currentWeather/CurrentWeather";
import TodaysForecast from "../todaysForcast/TodaysForecast";


const Weather = () => {
  const {currentLocationSearch} = useSelector(selectWeather);
  
  
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Search/>
        <div className={styles.searchItemBox}>
          {Object.keys(currentLocationSearch).length > 0 && <CurrentWeather/>}
         {Object.keys(currentLocationSearch).length > 0 && <TodaysForecast/>}
        </div>
        <div className={styles.favouritesItemBox}>

        </div>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
};

export default Weather;
