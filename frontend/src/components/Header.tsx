

const Header = () => (
  <div
    className="h-16 flex items-center justify-between px-6 shadow-md"
    style={{ backgroundColor: 'var(--accent-glow)' }}
  >
    <h2 className="text-[var(--text-primary)] font-bold text-xl">Dashboard</h2>
    <div className="flex items-center">
      <span className="mr-4 text-[var(--text-secondary)]">Admin</span>
      <div className="w-10 h-10 bg-[var(--primary-maple)] rounded-full"></div>
    </div>
  </div>
);

export default Header;
