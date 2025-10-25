
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { productCategoryData } from '../utils/mockData';

const COLORS = ['#F7A54A', '#FFD79A', '#FFE9D6', '#EFD1B8'];

const ProductCategoryChart = () => (
  <div className="p-6 rounded-lg shadow-md mt-6" style={{ backgroundColor: 'var(--card-maple)' }}>
    <h3 className="text-[var(--text-secondary)] mb-4">Product Categories</h3>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={productCategoryData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="var(--primary-maple)"
          label
        >
          {productCategoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default ProductCategoryChart;
