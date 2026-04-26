import { useEffect, useState } from 'react';
import api, { withToken } from '../services/api';
import { useAuth } from '../context/AuthContext';
import StatsCards from '../components/StatsCards';
import ProgressChart from '../components/ProgressChart';
import ChatbotWidget from '../components/ChatbotWidget';
export default function DashboardPage() {
  const { token } = useAuth();
  const [dashboard, setDashboard] = useState({ today: {}, weekly: [], recentMeals: [] });
  useEffect(() => { api.get('/dashboard', withToken(token)).then(({ data }) => setDashboard(data)); }, [token]);
  return (
    <section className="container py-4">
      <div className="section-head"><h1>Dashboard</h1><p>Your daily nutrition overview and recent meals.</p></div>
      <StatsCards today={dashboard.today} />
      <div className="row g-4">
        <div className="col-lg-8"><ProgressChart data={dashboard.weekly} /></div>
        <div className="col-lg-4"><ChatbotWidget /></div>
      </div>
      <div className="panel-card mt-4">
        <div className="section-head"><h2>Recent food log</h2></div>
        <div className="table-responsive"><table className="table align-middle">
          <thead><tr><th>Meal</th><th>Calories</th><th>Logged</th></tr></thead>
          <tbody>{dashboard.recentMeals.map((meal) => <tr key={meal._id}><td>{meal.name}</td><td>{Math.round(meal.totals?.calories || 0)}</td><td>{new Date(meal.loggedAt).toLocaleString()}</td></tr>)}</tbody>
        </table></div>
      </div>
    </section>
  );
}
