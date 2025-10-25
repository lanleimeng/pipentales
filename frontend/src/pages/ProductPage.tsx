
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProductTable from '../components/ProductTable';

const ProductPage = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 min-h-screen" style={{ backgroundColor: 'var(--background-maple)' }}>
      <Header />
      <div className="p-6">
        <ProductTable />
      </div>
    </div>
  </div>
);

export default ProductPage;
