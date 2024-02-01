import LineChart from "./LineChart";

const TemperatureData = ({ dataPoints }) => {
  if (!dataPoints || typeof dataPoints !== "object") {
    return <div></div>;
  }
  return (
    <ul className="line-chart">
      {Object.entries(dataPoints).map(([time, value]) => (
        <LineChart label={time} barFillHeight={value} />
      ))}
    </ul>
  );
};

export default TemperatureData;
