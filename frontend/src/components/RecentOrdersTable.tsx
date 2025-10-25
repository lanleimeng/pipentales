
import { recentOrders } from '../utils/mockData';

const RecentOrdersTable = () => (
  <div className="p-6 rounded-lg shadow-md overflow-x-auto" style={{ backgroundColor: 'var(--card-maple)' }}>
    <h3 className="text-[var(--text-secondary)] mb-4">Recent Orders</h3>
    <table className="w-full text-left min-w-[600px]">
      <thead>
        <tr style={{ borderBottom: `1px solid var(--border-maple)` }}>
          <th className="py-2">Order ID</th>
          <th className="py-2">Customer</th>
          <th className="py-2">Total</th>
          <th className="py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {recentOrders.map((order, idx) => (
          <tr key={idx} style={{ borderBottom: `1px solid var(--border-maple)` }}>
            <td className="py-2">{order.id}</td>
            <td className="py-2">{order.customer}</td>
            <td className="py-2">{order.total}</td>
            <td className="py-2">
              <span
                className={`px-2 py-1 rounded font-semibold ${
                  order.status === 'Completed'
                    ? 'text-[var(--success)]'
                    : order.status === 'Pending'
                    ? 'text-yellow-600'
                    : 'text-[var(--error)]'
                }`}
              >
                {order.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RecentOrdersTable;
