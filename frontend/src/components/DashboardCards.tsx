
interface CardProps {
  title: string;
  value: string;
}

const DashboardCard = ({ title, value }: CardProps) => (
  <div
    className="rounded-lg p-6 shadow-md w-full sm:w-1/2 lg:w-1/3"
    style={{ backgroundColor: 'var(--card-maple)', color: 'var(--text-primary)' }}
  >
    <h3 className="text-[var(--text-secondary)]">{title}</h3>
    <p className="text-2xl font-bold mt-2">{value}</p>
  </div>
);

const DashboardCards = () => {
  const cards = [
    { title: 'Total Sales', value: '$1,200' },
    { title: 'Total Products', value: '24' },
    { title: 'Users', value: '56' },
  ];

  return <div className="flex flex-wrap gap-6">{cards.map(card => <DashboardCard key={card.title} {...card} />)}</div>;
};

export default DashboardCards;
