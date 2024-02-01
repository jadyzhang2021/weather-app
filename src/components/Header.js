import { useContext } from "react";
import HeaderDeatil from "./HeaderDeatil";
import Search from "./Search";
import { DataContext } from "../store/DataContext";
import WeatherDetail from "./WeatherDetail";
import TemperatureData from "./temperature/TemperatureData";
import BarData from "./BarData";
const Header = () => {
  const ctx = useContext(DataContext);
  const data = ctx.weatherData;
  console.log({ data });

  return (
    <div className="header">
      <Search name={data.name} />
      <HeaderDeatil
        icon={data.icon}
        tem={data.temp}
        hum={data.humidity}
        wind={data.windspeed}
        weather={data.weather}
        feel={data.feel}
      />
      <WeatherDetail />
      <TemperatureData />
      <BarData />
    </div>
  );
};

export default Header;
