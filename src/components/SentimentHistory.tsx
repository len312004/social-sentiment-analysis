import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface SentimentHistoryProps {
  history: { id: number; text: string; polarity: number; sentiment: string }[];
}

const SentimentHistory: React.FC<SentimentHistoryProps> = ({ history }) => {
  return (
    <div className="w-full max-w-3xl mt-10">
      <h2 className="text-lg font-semibold text-center mb-4">Sentiment History</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={history}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="id" label={{ value: "Analysis #", position: "insideBottom", offset: -5 }} />
          <YAxis domain={[-1, 1]} label={{ value: "Polarity", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="polarity" stroke="#2563eb" name="Polarity" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimentHistory;
