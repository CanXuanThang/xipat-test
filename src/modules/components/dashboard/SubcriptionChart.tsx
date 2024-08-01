import { Typography } from "@mui/material";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Monday",
    subcribe: 30,
  },
  {
    name: "Tuesday",
    subcribe: 20,
  },
  {
    name: "Wednesday",
    subcribe: 12,
  },
  {
    name: "Thursday",
    subcribe: 18,
  },
  {
    name: "Friday",
    subcribe: 19,
  },
  {
    name: "Saturday",
    subcribe: 23,
  },
  {
    name: "Sunday",
    subcribe: 34,
  },
];

function SubcriptionChart() {
  return (
    <ResponsiveContainer width="80%" height="80%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend
          content={(_props) => (
            <Typography textAlign="center">
              Number of registrations per day
            </Typography>
          )}
        />
        <Line type="monotone" dataKey="subcribe" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SubcriptionChart;
