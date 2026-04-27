function HowItWorks() {
  const steps = [
    {
      n: '01', label: 'Сбор',
      title: 'Парсим сырые данные из пяти источников',
      body: 'HH API, ФГОС, Топ‑ИТ, экспертные интервью и публикации приводятся к единому формату «технология + мера свидетельства».',
    },
    {
      n: '02', label: 'Нормализация',
      title: 'Сводим разные формулировки к одной онтологии',
      body: '«Джава», «Java 17», «JDK», «Spring Boot 3» схлопываются в узлы технологического графа. Разрешение синонимов — полуавтоматическое, с ревью эксперта.',
    },
    {
      n: '03', label: 'Агрегация',
      title: 'Применяем правило Демпстера для 4 каналов',
      body: 'Каждое свидетельство mᵢ даёт меру доверия к технологии. Правило m₁ ⊕ m₂ ⊕ m₃ ⊕ m₄ объединяет их, явно выделяя конфликт K.',
    },
    {
      n: '04', label: 'Триггеры',
      title: 'Переводим m(T), m(F), m(U) в действие',
      body: 'Качественные правила: m(T)>0.8 и падение прошлого года → +50% часов. m(U)>0.4 → отправить на ручной разбор экспертной комиссии.',
    },
    {
      n: '05', label: 'Рекомендация',
      title: 'Выдаём конкретную правку в РПД',
      body: 'Преподаватель видит: «Добавить Kotlin Coroutines, 18 часов, обоснование — 3 источника, конфликт 0.04». Применяет одним кликом.',
    },
  ];

  return (
    <section id="how" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', marginBottom: 60 }}>
          <div>
            <span className="eyebrow"><span className="dot"></span> Как это работает</span>
            <h2 className="h-section" style={{ marginTop: 14, maxWidth: '20ch' }}>
              Пять шагов от сырых данных до <span className="serif italic" style={{ color: 'var(--accent)' }}>правки в РПД</span>.
            </h2>
          </div>
          <div className="tag" style={{ padding: '8px 14px', fontSize: 11 }}>
            Цикл: 48 часов на полное пересобирание рекомендаций
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }} className="steps-grid">
          {steps.map((s, i) => (
            <div key={s.n} style={{ background: 'var(--bg)', padding: 24, minHeight: 300, position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--accent)' }}>{s.n}</span>
                <span className="h-mono-label" style={{ fontSize: 10 }}>{s.label}</span>
              </div>
              <div style={{
                height: 1, background: 'linear-gradient(to right, var(--accent), transparent)',
                marginTop: 12, marginBottom: 20, opacity: 0.4
              }}></div>
              <h3 style={{ margin: 0, fontSize: 17, lineHeight: 1.3, fontWeight: 500, letterSpacing: '-0.01em' }}>
                {s.title}
              </h3>
              <p style={{ color: 'var(--text-2)', fontSize: 13.5, marginTop: 12, lineHeight: 1.55 }}>{s.body}</p>
              {i < steps.length - 1 && (
                <svg style={{ position: 'absolute', right: -8, top: 38 }} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8 H12 M9 5 L12 8 L9 11" stroke="var(--text-3)" strokeWidth="1"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.HowItWorks = HowItWorks;
