function Sources() {
  const sources = [
    { name: 'HeadHunter API',   kind: 'Рынок',     k: 0.8, count: '13 000 вакансий', note: 'ключевые навыки, уровень Junior/Стажёр', color: 'var(--accent-2)' },
    { name: 'ФГОС 3++',         kind: 'Стандарт',  k: 0.7, count: '09.03.04 · 09.03.01', note: 'компетенции, индикаторы, результаты обучения', color: '#94A3B8' },
    { name: 'Топ‑ИТ стандарт',  kind: 'Отрасль',   k: 0.9, count: 'Сбер · 1С · Астра · Т‑Банк', note: 'связка «компетенция → технология»', color: 'var(--accent)' },
    { name: 'Эксперты отрасли', kind: 'Мнение',    k: 0.9, count: '12 интервью', note: 'CTO, тимлиды, руководители обучения', color: 'var(--violet)' },
    { name: 'Аналитика',        kind: 'Прогноз',   k: 0.6, count: 'РБК · WEF · Gartner', note: 'горизонт 1–3 года, отчёты и публикации', color: 'var(--warn)' },
  ];
  return (
    <section id="sources" className="section-sm" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', marginBottom: 36 }}>
          <div>
            <span className="eyebrow"><span className="dot"></span> Источники данных</span>
            <h2 className="h-section" style={{ marginTop: 14, maxWidth: '18ch' }}>
              Пять голосов о том, что <span className="serif italic" style={{ color: 'var(--accent)' }}>нужно отрасли</span>.
            </h2>
          </div>
          <p style={{ color: 'var(--text-2)', maxWidth: 420, fontSize: 15 }}>
            Каждому источнику присваивается коэффициент доверия <span className="mono">k ∈ [0, 1]</span>. Значения откалиброваны
            на пилотных кейсах и могут быть перенастроены под политику конкретного вуза.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }} className="sources-grid">
          {sources.map(s => (
            <div key={s.name} className="panel-bare" style={{ padding: 20, minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: s.color }}></span>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--text-3)', textTransform: 'uppercase' }}>{s.kind}</span>
                </div>
                <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 22, marginTop: 14, letterSpacing: '-0.01em' }}>{s.name}</div>
                <div style={{ color: 'var(--text-2)', fontSize: 13, marginTop: 8, lineHeight: 1.45 }}>{s.note}</div>
              </div>
              <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{s.count}</span>
                <span className="mono" style={{ fontSize: 12, color: s.color, fontWeight: 600 }}>k = {s.k}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Sources = Sources;
