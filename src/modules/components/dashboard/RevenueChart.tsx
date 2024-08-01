import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "January",
    revenue: 30,
  },
  {
    name: "February",
    revenue: 20,
  },
  {
    name: "March",
    revenue: 12,
  },
  {
    name: "April",
    revenue: 18,
  },
  {
    name: "May",
    revenue: 19,
  },
  {
    name: "June",
    revenue: 23,
  },
  {
    name: "July",
    revenue: 34,
  },
  {
    name: "August",
    revenue: 34,
  },
  {
    name: "September",
    revenue: 34,
  },
  {
    name: "October",
    revenue: 34,
  },
  {
    name: "November",
    revenue: 34,
  },
  {
    name: "December",
    revenue: 34,
  },
];

function RevenueChart() {
  return (
    <ResponsiveContainer width="80%" height="80%">
      <BarChart
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
        <Legend />
        <Bar
          dataKey="revenue"
          fill="#8884d8"
          //   activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default RevenueChart;
