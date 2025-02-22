import Weather from "../weather/Weather"
import style from "./Home.module.scss"

const Home = () => {
  return (
    <div className={style.container}>
      <Weather/>
    </div>
  )
}

export default Home