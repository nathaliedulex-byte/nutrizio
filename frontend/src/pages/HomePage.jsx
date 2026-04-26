import HeroSection from '../components/HeroSection';
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="container py-5">
        <div className="row g-4">
          {[
            ['AI meal analysis', 'Upload food photos to estimate foods, portions, calories, and nutrients.'],
            ['Meal logging', 'Save each meal to your personal history and review only your own recent logs.'],
            ['Manual estimator', 'Retrieve dynamic nutrition data for custom entries and portion sizes.'],
            ['Progress tracking', 'Monitor calories and macro trends with a clean dashboard.']
          ].map(([title, text]) => (
            <div className="col-md-6" key={title}><div className="feature-card"><h2>{title}</h2><p>{text}</p></div></div>
          ))}
        </div>
      </section>
    </>
  );
}
