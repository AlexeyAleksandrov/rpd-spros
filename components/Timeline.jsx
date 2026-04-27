function Timeline() {
  const phases = [
    { q: 'Неделя 1', title: 'Пилот стартовал', items: ['Подключение HH API','Загрузка РПД 1 дисциплины','Калибровка коэффициентов'] },
    { q: 'Неделя 2', title: 'Первый прогон',   items: ['Сбор 2–3k вакансий','Сопоставление с ФГОС','Отчёт с противоречиями'] },
    { q: 'Неделя 3', title: 'Экспертный раунд',items: ['Интервью 3–5 экспертов','Доверительные веса','Правила-триггеры'] },
    { q: 'Неделя 4', title: 'Проект РПД',      items: ['Готовый diff к РПД','Обоснование по каждой правке','Экспорт в формат УМО'] },
    { q: 'Квартал',  title: 'Регулярный цикл', items: ['Пересборка 48 ч','Алерты по дрейфу','API для ЛК преподавателя'] },
  ];
  return (
    <section id="timeline" className="section-sm" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div style={{ maxWidth: 780, marginBottom: 40 }}>
          <span className="eyebrow"><span className="dot"></span> Цикл актуализации</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>
            От подключения до первой правки в РПД — <span className="serif italic" style={{ color: 'var(--accent)' }}>30 дней</span>.
          </h2>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: 18, left: 0, right: 0, height: 1, background: 'var(--line-strong)' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }} className="timeline-grid">
            {phases.map((p, i) => (
              <div key={p.q}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative' }}>
                  <span style={{ width: 14, height: 14, borderRadius: '50%', background: i < 4 ? 'var(--accent)' : 'var(--bg)', border: '2px solid var(--accent)', position: 'relative', zIndex: 2 }}></span>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{p.q}</span>
                </div>
                <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 22, marginTop: 18, letterSpacing: '-0.01em' }}>{p.title}</div>
                <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', color: 'var(--text-2)', fontSize: 13.5 }}>
                  {p.items.map(it => <li key={it} style={{ padding: '5px 0', display: 'flex', gap: 8 }}><span style={{ color: 'var(--accent)' }}>—</span>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Timeline = Timeline;
