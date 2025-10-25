
import { activityFeed } from '../utils/mockData';

const ActivityFeed = () => (
  <div className="p-6 rounded-lg shadow-md mt-6" style={{ backgroundColor: 'var(--card-maple)' }}>
    <h3 className="text-[var(--text-secondary)] mb-4">Activity Feed</h3>
    <ul className="space-y-3">
      {activityFeed.map((item, idx) => (
        <li key={idx} className="flex justify-between">
          <span>{item.activity}</span>
          <span className="text-sm text-[var(--text-secondary)]">{item.time}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ActivityFeed;
