import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

// component of chart used in TickerPanel
type Props = {
  color: string;
  title: string; // symbol
  number: number | string; // $
  percentage: number; // %
  chartData: object[];
  dataKey: string;
};

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey} // "price"
                stroke={props.color}
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration"></span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
