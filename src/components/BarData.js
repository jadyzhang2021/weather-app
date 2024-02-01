/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import TemperatureData from "./temperature/TemperatureData";
import { DataContext } from "../store/DataContext";

const BarData = () => {
  const ctx = useContext(DataContext);
  const data = ctx.weatherData;
  const [dataPoints, setDataPoints] = useState({});

  console.log({ 333: data });
  const chartDataPoints = () => {
    const currentHour = new Date().getHours();
    let myObject = {};

    for (let i = 0; i < 12; i++) {
      const hour24 = (currentHour - i + 24) % 24;

      const label = hour24 < 10 ? `0${hour24}:00` : `${hour24}:00`;

      const randomTemperature =
        Math.random() * (data.temp_max - data.temp_min) + data.temp_min;

      const value = Math.round(randomTemperature);
      console.log({ www: value });
      myObject[label] = value;
    }
    setDataPoints(myObject);
  };

  useEffect(() => {
    chartDataPoints();
  }, [data]);

  console.log({ dataPoints });
  return (
    <>
      <TemperatureData dataPoints={dataPoints} />
    </>
  );
};

export default BarData;
