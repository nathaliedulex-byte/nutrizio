import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
export default function SignupPage() {
  const [form, setForm] = useState({ name: '', age: 25, gender: '', weight: 70, height: 170, email: '', password: '' });
  const { setToken, setUser } = useAuth();
  const navigate = useNavigate();
  const handle = (key, value) => setForm({ ...form, [key]: ['age', 'weight', 'height'].includes(key) ? Number(value) : value });
  const submit = async (e) => {
    e.preventDefault();
    const { data } = await api.post('/auth/signup', form);
    setToken(data.token); setUser(data.user); navigate('/dashboard');
  };
  return (
    <section className="auth-wrap"><form className="auth-card wide" onSubmit={submit}><h1>Create account</h1>
      <div className="row g-3">
        {['name','age','gender','weight','height','email','password'].map((field) => (
          <div className="col-md-6" key={field}><input className="form-control" type={field==='password'?'password':field==='age'||field==='weight'||field==='height'?'number':'text'} placeholder={field[0].toUpperCase()+field.slice(1)} onChange={(e)=>handle(field,e.target.value)} /></div>
        ))}
      </div>
      <button className="btn btn-success mt-3">Sign up</button>
    </form></section>
  );
}
