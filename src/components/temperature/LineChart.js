import Tempicon from "../../store/Tempicon";

const LineChart = ({ label, barFillHeight }) => {
  return (
    <>
      <li className="line-chart-bar">
        <span className="chart-bar__label">{barFillHeight}</span>
        <span>
          <Tempicon />
        </span>
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight, backgroundColor: " #076c7e" }}
        ></div>
        <div className="chart-bar_container">
          <span className="chart-bar__label">{label} </span>
        </div>
      </li>
    </>
  );
};

export default LineChart;
