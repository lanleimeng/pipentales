
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { loginAdmin } from '../features/auth/authThunks';
import { Navigate, useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await dispatch(loginAdmin({ email, password }));
    if (loginAdmin.fulfilled.match(res)) navigate('/dashboard');
  };

  if (token) return <Navigate to="/dashboard" replace />;

  return (
    <div className="h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--background-maple)' }}>
      <form className="p-10 rounded-lg shadow-md w-full max-w-md" style={{ backgroundColor: 'var(--card-maple)' }} onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded border"
          style={{ borderColor: 'var(--border-maple)' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded border"
          style={{ borderColor: 'var(--border-maple)' }}
        />
        <button
          type="submit"
          className="w-full py-3 rounded text-white font-semibold transition"
          style={{ backgroundColor: 'var(--primary-maple)' }}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
