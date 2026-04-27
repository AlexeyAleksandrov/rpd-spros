function Metrics() {
  const stats = [
    { n: '13 000', l: 'вакансий с HeadHunter',         s: 'ноябрь 2025 — апрель 2026' },
    { n: '21 000', l: 'уникальных навыков',            s: 'после дедупликации и нормализации' },
    { n: '12',     l: 'экспертов отрасли',             s: 'CTO, лиды, руководители обучения' },
    { n: '15',     l: 'прогнозных публикаций',         s: 'РБК · WEF · Gartner и др.' },
    { n: '48 ч',   l: 'на полный цикл расчёта',        s: 'от парсинга до готового diff' },
    { n: '99.3%',  l: 'уверенность по Spring',         s: 'результат первого пилотного расчёта' },
  ];
  return (
    <section className="section-sm" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div style={{ marginBottom: 28 }}>
          <span className="eyebrow"><span className="dot"></span> Цифры MVP · апрель 2026</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }} className="metrics-grid">
          {stats.map(s => (
            <div key={s.l} style={{ background: 'var(--bg)', padding: 32, minHeight: 200 }}>
              <div className="big-num" style={{ fontSize: 72, color: 'var(--text)' }}>{s.n}</div>
              <div style={{ fontSize: 15, color: 'var(--text)', marginTop: 8 }}>{s.l}</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-3)', marginTop: 6 }}>{s.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Metrics = Metrics;
