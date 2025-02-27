import styles from "./WeatherItem.module.scss"
import icon from "../../assets/images/sun.svg"
import { useSelector } from "react-redux"
import { selectWeather } from "../../store/slices/weatherSlice/weatherSlice"

const WeatherItem = () => {
 const  {currentWeather} = useSelector(selectWeather);
console.log(currentWeather.hourly.time);
console.log(new Date(currentWeather.hourly.time[17]).getHours());


  return (
    <div className={styles.container}>
      <p className={styles.time}>12:00PM</p>
      <img src={icon} alt="sun"/>
      <p className={styles.temperature}>25 C</p>
    </div>
  )
}

export default WeatherItem