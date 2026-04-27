function PREPARE_APP() {
  const { createRoot } = ReactDOM;
  const { useEffect } = React;
function App() {
  useEffect(() => {
    const m = window.__TWEAKS?.mode || 'bold';
    const a = window.__TWEAKS?.accent || 'mint';
    document.documentElement.setAttribute('data-mode', m);
    document.documentElement.setAttribute('data-accent', a);
  }, []);

  return (
    <>
      <Nav/>
      <Hero/>
      <Problem/>
      <Sources/>
      <HowItWorks/>
      <Calculator/>
      <Dashboard/>
      <Science/>
      <SpringCase/>
      <Timeline/>
      <Personas/>
      <Metrics/>
      <FAQ/>
      <Team/>
      <CTA/>
      <Footer/>
      <TweaksPanel/>
    </>
  );
}

  const mount = document.getElementById('root');
  if (mount) createRoot(mount).render(<App/>);
  else window.addEventListener('DOMContentLoaded', () => createRoot(document.getElementById('root')).render(<App/>));
}
PREPARE_APP();
