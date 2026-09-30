interface StatCardProps {
  title: string;
  value: string;
  change: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, color }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-3xl font-bold mt-2 text-blue-900">{value}</h3>
      <span className={`mt-2 text-sm font-medium ${color}`}>{change}</span>
    </div>
  );
};

export default StatCard;
