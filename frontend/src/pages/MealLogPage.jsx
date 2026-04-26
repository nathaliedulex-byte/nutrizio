import { useEffect, useState } from 'react';
import api, { withToken } from '../services/api';
import { useAuth } from '../context/AuthContext';
export default function MealLogPage() {
  const { token } = useAuth();
  const [meals, setMeals] = useState([]);
  const [name, setName] = useState('');
  useEffect(() => { api.get('/meals', withToken(token)).then(({ data }) => setMeals(data)); }, [token]);
  const addMeal = async (e) => {
    e.preventDefault();
    const payload = { name, source: 'manual', items: [], totals: { calories: 0, protein: 0, carbs: 0, fat: 0 } };
    const { data } = await api.post('/meals', payload, withToken(token));
    setMeals([data, ...meals]); setName('');
  };
  return (
    <section className="container py-4">
      <div className="section-head"><h1>Meal log</h1><p>Save meals and review your intake history.</p></div>
      <form onSubmit={addMeal} className="d-flex gap-2 mb-4"><input className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Meal name" /><button className="btn btn-success">Save meal</button></form>
      <div className="row g-3">{meals.map((meal) => <div className="col-md-6" key={meal._id}><div className="panel-card"><h2>{meal.name}</h2><p>{new Date(meal.loggedAt).toLocaleString()}</p></div></div>)}</div>
    </section>
  );
}
