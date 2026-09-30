import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

interface ChartCardProps {
  title: string;
  type: "line" | "bar";
  data: any[];
  color: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, type, data, color }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="font-semibold text-lg mb-4 text-blue-900">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        {type === "line" ? (
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#888" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke={color} strokeWidth={3} />
          </LineChart>
        ) : (
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill={color} />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard;
