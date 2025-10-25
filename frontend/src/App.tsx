import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/LoginForm';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './routes/ProtectedRoute';
import ProductPage from './pages/ProductPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <ProductPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  </Router>
);

export default App;
