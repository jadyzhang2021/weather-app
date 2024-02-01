import { format } from "date-fns";
import { useEffect, useState } from "react";
const HeaderDeatil = ({ icon, tem, hum, wind, weather, feel }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = format(currentDate, "h:mmaaa").toUpperCase();
  const formattedDay = format(currentDate, "EEEE");

  const tems = Math.round(tem);
  const hums = Math.floor(hum);
  const winds = Math.floor(wind);
  const feels = Math.floor(feel);

  return (
    <div className="headerDeatil">
      <div className="box1 box">
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="icon"
          className="icon"
        />
        <div className="tem-box">
          <div className="tem">{tems}</div>
          <span className="tem-o">。</span>
          <span className="tem-c">C</span>
          <span className="tem-t">{formattedTime}</span>
        </div>
      </div>
      <div className="box2 box">
        <p>Humidity : {hums}%</p>
        <p>Feels_Like : {feels}%</p>
        <p>Wind Speed : {winds}%</p>
      </div>
      <div className="box3 box">
        <p>Weather</p>
        <p>{formattedDay}</p>
        <p>{weather}</p>
      </div>
    </div>
  );
};

export default HeaderDeatil;
