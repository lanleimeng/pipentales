
import { summaryCards } from '../utils/mockData';

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryCards.map((card, idx) => (
        <div
          key={idx}
          className="p-6 rounded-lg shadow-md flex items-center justify-between"
          style={{ backgroundColor: 'var(--card-maple)', color: 'var(--text-primary)' }}
        >
          <div>
            <p className="text-[var(--text-secondary)]">{card.title}</p>
            <p className="text-2xl font-bold mt-1">{card.value}</p>
          </div>
          <div className="text-4xl">{card.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
