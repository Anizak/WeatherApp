import styles from "./WeekWeatherItem.module.scss"
import { getWeatherType } from "../../../services/functions"


const WeekWeatherItem = ({data} : any) => {
  const weatherType = getWeatherType(data.weatherCode);
  return (
    <div className={styles.box}>
      <p>{data.weekDay}</p>
      <div className={styles.weather}>
      <img src={weatherType.icon}/>
      <p className={styles.weatherType}>{weatherType.shortName}</p>
      </div>
      <p className={styles.temperature}><span>{Math.round(data.temperature)}</span>/{Math.round(data.nightTemperature)}</p>
    </div>
  )
}

export default WeekWeatherItem