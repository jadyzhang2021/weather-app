import { createContext, useState, useEffect } from "react";
const apikey = "5d50cb77a4d850371ce5a430e31c9b24";

export const DataContext = createContext({
  weatherData: {
    icon: "",
    id: "",
    windspeed: "",
    humidity: "",
    temp: "",
    weather: "",
    feel: "",
    name: "",
    temp_max: 0,
    temp_min: 0,
  },
  setWeatherData: () => {},
  fetchWeatherData: () => {},
});

const DataContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});

  const ctxValue = {
    weatherData: weatherData,
    setWeatherData: setWeatherData,
    fetchWeatherData: fetchWeatherData,
  };

  async function fetchWeatherData(city = "sydney") {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try {
      const response = await fetch(url);
      console.log({ response });
      const resData = await response.json();
      console.log(resData);
      const data = {
        icon: resData.weather[0].icon,
        id: resData.weather[0].id,
        weather: resData.weather[0].main,
        windspeed: resData.wind.speed,
        humidity: resData.main.humidity,
        temp: resData.main.temp,
        temp_max: resData.main.temp_max,
        temp_min: resData.main.temp_min,
        feel: resData.main.feels_like,
        name: resData.name,
      };
      console.log({ resData });
      console.log({ data });
      if (!response.ok) {
        throw new Error("Fetch the data fail");
      }
      return setWeatherData(data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <DataContext.Provider value={ctxValue}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider;
