
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SummaryCards from '../components/SummaryCards';
import SalesChart from '../components/SalesChart';
import ProductCategoryChart from '../components/ProductCategoryChart';
import RecentOrdersTable from '../components/RecentOrdersTable';
import ActivityFeed from '../components/ActivityFeed';

const DashboardPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 min-h-screen" style={{ backgroundColor: 'var(--background-maple)' }}>
      <Header />
      <div className="p-6 space-y-6">
        <SummaryCards />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesChart />
          <ProductCategoryChart />
        </div>
        <RecentOrdersTable />
        <ActivityFeed />
      </div>
    </div>
  </div>
);

export default DashboardPage;
