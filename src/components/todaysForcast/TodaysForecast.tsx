import WeatherItem from "../items/WeatherItem"
import styles from "./TodaysForcast.module.scss"

const TodaysForecast = () => {
  return (
    <div className={styles.container}>
        <p>Today's Forecast</p>
        <div className={styles.todayFoecast}>
            <WeatherItem/>
        </div>
    </div>
  )
}

export default TodaysForecast