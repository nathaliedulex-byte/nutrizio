import { useState } from 'react';
import api, { withToken } from '../services/api';
import { useAuth } from '../context/AuthContext';
export default function ManualEstimatorPage() {
  const { token } = useAuth();
  const [query, setQuery] = useState('');
  const [grams, setGrams] = useState(100);
  const [result, setResult] = useState(null);
  const submit = async (e) => {
    e.preventDefault();
    const { data } = await api.post('/nutrition/manual-estimate', { query, grams }, withToken(token));
    setResult(data);
  };
  return (
    <section className="container py-4">
      <div className="section-head"><h1>Manual calorie estimator</h1><p>Search for food and estimate calories using dynamic nutrient data.</p></div>
      <form onSubmit={submit} className="panel-card d-flex flex-column gap-3">
        <input className="form-control" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Example: grilled salmon" />
        <input className="form-control" type="number" value={grams} onChange={(e) => setGrams(Number(e.target.value))} />
        <button className="btn btn-success align-self-start">Estimate</button>
      </form>
      {result && <div className="panel-card mt-4"><h2>{result.label}</h2><p>{result.calories} kcal for {result.grams} g</p></div>}
    </section>
  );
}
