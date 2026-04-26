import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
export default function ProgressChart({ data }) {
  return (
    <div className="panel-card h-100">
      <div className="section-head"><h2>Daily progress</h2></div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="calories" stroke="#A0C878" strokeWidth={3} />
          <Line type="monotone" dataKey="protein" stroke="#6d8f4e" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
