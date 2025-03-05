import styles from "./Weather.module.scss";
import Search from "../search/Search";
// import WeatherItem from "../items/WeatherItem";
import { useSelector } from "react-redux";
import { selectWeather } from "../../store/slices/weatherSlice/weatherSlice";
import CurrentWeather from "../currentWeather/CurrentWeather";
import TodaysForecast from "../todaysForcast/TodaysForecast";
import AirConditions from "../airConditions/AirConditions";
import WeekForecast from "../weekForecast/WeekForecast";
import { generateWeekDay } from "../../services/functions";


const Weather = () => {
  const {currentLocationSearch} = useSelector(selectWeather);
  generateWeekDay("2025-03-05T21:30");
  
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Search/>
        <div className={styles.searchItemBox}>
          {Object.keys(currentLocationSearch).length > 0 && <CurrentWeather/>}
         {Object.keys(currentLocationSearch).length > 0 && <TodaysForecast/>}
        </div>
        <div className={styles.airConditionsBox}>
         {Object.keys(currentLocationSearch).length > 0 && <AirConditions/>} 
        </div>
      </div>
      <div className={styles.rightSide}>
      {Object.keys(currentLocationSearch).length > 0 && <WeekForecast/>}
      </div>
    </div>
  );
};

export default Weather;
