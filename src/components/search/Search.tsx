import { useEffect, useState } from "react";
import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../store/slices/weatherSlice/weatherApi";
import { AppDispatch } from "../../store/store";
import { selectWeather } from "../../store/slices/weatherSlice/weatherSlice";
import { CiSearch } from "react-icons/ci";


const Search = ({isTransparent}: any) => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const { currentLocationSearch } = useSelector(selectWeather);
  useEffect(() => {
    if (Object.keys(currentLocationSearch).length > 0) {
      setValue("");
    }
  }, [currentLocationSearch]);

  
  const search = (e: any) => {
    e.preventDefault();
    dispatch(getLocation(value));
  };

  return (
    <div className={styles.searchBox}>
      <form onSubmit={search}>
      <CiSearch className={styles.searchIcon}/>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Check the weather in your area"
          className={isTransparent ? `${styles.searchField} ${styles.transparent}` : styles.searchField}
        />

      </form>
    </div>
  );
};

export default Search;
