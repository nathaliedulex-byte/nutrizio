export default function StatsCards({ today }) {
  const cards = [
    ['Calories', today?.calories || 0],
    ['Protein (g)', today?.protein || 0],
    ['Carbs (g)', today?.carbs || 0],
    ['Fat (g)', today?.fat || 0]
  ];
  return (
    <div className="row g-3 mb-4">
      {cards.map(([label, value]) => (
        <div className="col-sm-6 col-xl-3" key={label}>
          <div className="metric-card">
            <span>{label}</span>
            <h3>{Math.round(value)}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
