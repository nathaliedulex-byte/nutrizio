import { Link } from 'react-router-dom';
export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <span className="eyebrow">AI nutrition intelligence</span>
            <h1>Upload meals. Estimate calories. Track progress with confidence.</h1>
            <p>Nutrizio combines food image analysis, meal logging, dynamic calorie estimation, BMI insights, and a nutrition chatbot in one secure platform.</p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Link to="/signup" className="btn btn-success btn-lg">Create account</Link>
              <Link to="/analyze" className="btn btn-outline-success btn-lg">Analyze a meal</Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-card">
              <div className="metric-grid">
                <div><strong>1 photo</strong><span>Food detection</span></div>
                <div><strong>Macro + micro</strong><span>Nutrition details</span></div>
                <div><strong>Daily trends</strong><span>Progress dashboard</span></div>
                <div><strong>Chat support</strong><span>Meal guidance</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
