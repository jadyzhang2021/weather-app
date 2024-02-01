import { useContext, useState } from "react";
import { DataContext } from "../store/DataContext";
import img from "../store/weather-forecast.png";

const Search = ({ name }) => {
  const [inputValue, setInputValue] = useState("sydney");

  const ctx = useContext(DataContext);

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmitHandler = () => {
    ctx.fetchWeatherData(inputValue);
  };

  return (
    <div className="search">
      <div className="searcharea">
        <input
          type="text"
          className="inputvalue"
          value={inputValue}
          onChange={onChangeHandler}
        />
        <button
          type="submit"
          className="searchbutton"
          onClick={onSubmitHandler}
        >
          Search
        </button>
      </div>
      <div className="result">
        <img src={img} alt="forcast" className="farcastImg" />
        <p className="resultValue">location : {name}</p>
      </div>
    </div>
  );
};

export default Search;
