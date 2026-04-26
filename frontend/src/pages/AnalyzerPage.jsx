import { useState } from 'react';
import api, { withToken } from '../services/api';
import { useAuth } from '../context/AuthContext';
export default function AnalyzerPage() {
  const { token } = useAuth();
  const [result, setResult] = useState(null);
  const submit = async (file) => {
    const formData = new FormData(); formData.append('image', file);
    const { data } = await api.post('/nutrition/analyze-image', formData, { ...withToken(token), headers: { ...withToken(token).headers, 'Content-Type': 'multipart/form-data' } });
    setResult(data);
  };
  return (
    <section className="container py-4">
      <div className="section-head"><h1>Food image analysis</h1><p>Drag and drop or choose a food photo for AI nutrition estimation.</p></div>
      <label className="upload-zone">
        <input type="file" accept="image/*" hidden onChange={(e) => e.target.files?.[0] && submit(e.target.files[0])} />
        <span>Drop image here or click to upload</span>
      </label>
      {result && <div className="panel-card mt-4"><h2>Analysis result</h2>
        {result.items.map((item) => <div key={item.label} className="result-row"><strong>{item.label}</strong><span>{item.grams} g</span><span>{item.calories} kcal</span></div>)}
        <div className="result-total">Total calories: {result.total.calories} kcal</div>
      </div>}
    </section>
  );
}
