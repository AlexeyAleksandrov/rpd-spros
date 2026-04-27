function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line-strong)', padding: '48px 0 32px', background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32 }} className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Logo/>
              <span style={{ fontFamily: 'Instrument Serif, serif', fontSize: 22 }}>Спрос</span>
            </div>
            <p style={{ color: 'var(--text-2)', fontSize: 13, marginTop: 14, maxWidth: 340, lineHeight: 1.55 }}>
              Исследовательский MVP кафедры индустриального программирования РТУ МИРЭА.
              Модель Демпстера–Шафера для согласования рабочих программ с рынком труда.
            </p>
          </div>
          <FooterCol h="Продукт" items={['Как работает','Демо','Дашборд','Источники данных','Научная основа']}/>
          <FooterCol h="Для вуза" items={['Ректорам','Преподавателям','Пилот','FAQ']}/>
          <FooterCol h="Контакты" items={['hi@spros.mirea.ru','Институт ИИТиИП','г. Москва','ИНПРО‑2026']}/>
        </div>
        <div style={{ borderTop: '1px solid var(--line)', marginTop: 40, paddingTop: 20, display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
            © 2026 РТУ МИРЭА. Исследовательский MVP · v0.9
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
            Москва, проспект Вернадского, 78
          </div>
        </div>
      </div>
    </footer>
  );
}
function FooterCol({ h, items }) {
  return (
    <div>
      <div className="h-mono-label" style={{ fontSize: 10, marginBottom: 14 }}>{h}</div>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(i => (
          <li key={i} style={{ color: 'var(--text-2)', fontSize: 13 }}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
window.Footer = Footer;
