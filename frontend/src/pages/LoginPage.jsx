import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { setToken, setUser } = useAuth();
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    const { data } = await api.post('/auth/login', form);
    setToken(data.token); setUser(data.user); navigate('/dashboard');
  };
  return (
    <section className="auth-wrap"><form className="auth-card" onSubmit={submit}><h1>Login</h1>
      <input className="form-control" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="form-control" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button className="btn btn-success">Sign in</button>
    </form></section>
  );
}
