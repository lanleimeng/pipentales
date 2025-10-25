
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { salesData } from '../utils/mockData';

const SalesChart = () => {
  return (
    <div className="p-6 rounded-lg shadow-md mt-6" style={{ backgroundColor: 'var(--card-maple)' }}>
      <h3 className="text-[var(--text-secondary)] mb-4">Monthly Sales</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-maple)" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="var(--primary-maple)" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
