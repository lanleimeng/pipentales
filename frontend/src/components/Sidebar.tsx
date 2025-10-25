
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Products', path: '/products' },
  ];

  return (
    <div
      className="w-64 min-h-screen p-6 flex flex-col fixed md:static z-20 transform -translate-x-full md:translate-x-0 transition-transform duration-300"
      style={{ backgroundColor: 'var(--primary-maple)' }}
    >
      <h1 className="text-2xl font-bold mb-10 text-white">PipenTales Admin</h1>
      {links.map(link => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `mb-4 p-2 rounded hover:bg-[var(--accent-glow)] ${
              isActive ? 'bg-[var(--accent-glow)] text-[var(--text-primary)] font-semibold' : 'text-white'
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
