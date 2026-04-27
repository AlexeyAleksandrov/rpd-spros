function Nav() {
  const { useState, useEffect } = React;
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '#problem', label: 'Проблема' },
    { href: '#how', label: 'Как работает' },
    { href: '#demo', label: 'Демо' },
    { href: '#science', label: 'Наука' },
    { href: '#for-whom', label: 'Кому' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 50,
      padding: scrolled ? '12px 0' : '20px 0',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      background: scrolled ? 'rgba(11,16,21,0.82)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'all .25s ease'
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Logo />
          <span style={{ fontFamily: 'Instrument Serif, serif', fontSize: 22, letterSpacing: '-0.01em' }}>Спрос</span>
          <span className="mono" style={{ fontSize: 10, color: 'var(--text-3)', marginLeft: 4, marginTop: 6 }}>v0.9 · MVP</span>
        </a>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="nav-desktop">
          {navItems.map(i => (
            <a key={i.href} href={i.href} style={{
              color: 'var(--text-2)', textDecoration: 'none', fontSize: 14,
              fontWeight: 500
            }} onMouseEnter={e => e.target.style.color = 'var(--text)'} onMouseLeave={e => e.target.style.color = 'var(--text-2)'}>
              {i.label}
            </a>
          ))}
        </div>
        <a href="#cta" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 13.5 }}>
          Стать партнёром
          <Arrow />
        </a>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="var(--accent)" strokeWidth="1.2"/>
      <circle cx="16" cy="16" r="8" stroke="var(--accent-2)" strokeWidth="1" strokeDasharray="2 3"/>
      <circle cx="16" cy="16" r="2.5" fill="var(--accent)"/>
      <path d="M16 2 L16 8 M16 24 L16 30 M2 16 L8 16 M24 16 L30 16" stroke="var(--line-strong)" strokeWidth="0.8"/>
    </svg>
  );
}

function Arrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M3 7 H11 M8 4 L11 7 L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

window.Nav = Nav;
window.Logo = Logo;
window.Arrow = Arrow;
