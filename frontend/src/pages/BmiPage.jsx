import { useMemo, useState } from 'react';
export default function BmiPage() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const bmi = useMemo(() => weight / ((height / 100) ** 2), [weight, height]);
  return (
    <section className="container py-4">
      <div className="section-head"><h1>BMI calculator</h1><p>Calculate body mass index from your height and weight.</p></div>
      <div className="panel-card d-flex flex-column gap-3">
        <input className="form-control" type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} placeholder="Weight in kg" />
        <input className="form-control" type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} placeholder="Height in cm" />
        <div className="result-total">BMI: {bmi.toFixed(1)}</div>
      </div>
    </section>
  );
}
