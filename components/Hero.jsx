function Hero() {
  const { useState, useEffect } = React;
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" style={{ position: 'relative', paddingTop: 140, paddingBottom: 100, overflow: 'hidden' }}>
      <div className="aurora"></div>
      <div className="wrap">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
          <span className="eyebrow"><span className="dot"></span> РТУ МИРЭА · Институт перспективных технологий</span>
          <span className="tag">ИНПРО 2026</span>
        </div>

        <h1 className="h-display" style={{ margin: 0, maxWidth: '14ch' }}>
          Рабочая программа, <span className="serif italic" style={{ color: 'var(--accent)' }}>синхронная</span> рынку труда.
        </h1>

        <p style={{
          marginTop: 28, maxWidth: 620, fontSize: 19, lineHeight: 1.5,
          color: 'var(--text-2)'
        }}>
          «Спрос» собирает <b style={{ color: 'var(--text)' }}>вакансии HH, стандарты ФГОС, Топ‑ИТ и прогнозы аналитиков</b>,
          разрешает противоречия между ними по модели Демпстера–Шафера и выдаёт преподавателю
          готовую рекомендацию: какую технологию добавить, усилить или убрать из РПД.
        </p>

        <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#cta" className="btn btn-primary">
            Подать заявку на пилот <Arrow />
          </a>
          <a href="#demo" className="btn btn-ghost">
            Попробовать расчёт <span style={{ color: 'var(--text-3)' }}>·</span> 40 сек
          </a>
        </div>

        <div style={{ marginTop: 72 }}>
          <HeroPreview tick={tick}/>
        </div>
      </div>
    </section>
  );
}

function HeroPreview({ tick }) {
  // Live-updating preview card showing a "recommendation" flowing in
  const techs = [
    { name: 'Spring Framework',   conf: 99.3, delta: '+12%', action: 'Увеличить', color: 'var(--success)' },
    { name: 'Kotlin Coroutines',   conf: 94.1, delta: '+18%', action: 'Добавить',  color: 'var(--success)' },
    { name: 'jQuery',              conf:  8.2, delta: '−41%', action: 'Исключить', color: 'var(--danger)' },
    { name: 'Vue 3 / Composition', conf: 87.5, delta:  '+6%', action: 'Сохранить', color: 'var(--accent)' },
    { name: 'Apache Kafka',        conf: 91.8, delta:  '+9%', action: 'Добавить',  color: 'var(--success)' },
  ];
  const highlight = tick % techs.length;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 1,
      background: 'var(--panel)',
      border: '1px solid var(--line)',
      overflow: 'hidden'
    }} className="hero-preview">
      {/* Left: sources flowing into DST */}
      <div style={{ background: 'var(--panel)', padding: 28, position: 'relative', minHeight: 320 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="h-mono-label">Входные источники</div>
            <div style={{ marginTop: 8, fontFamily: 'Instrument Serif, serif', fontSize: 24, letterSpacing: '-0.01em' }}>
              Агрегация свидетельств
            </div>
          </div>
          <span className="tag pulse">
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }}></span>
            live
          </span>
        </div>

        <SourceFlow tick={tick}/>
      </div>

      {/* Right: recommendation stream */}
      <div style={{ background: 'var(--panel-2)', padding: 28 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div>
            <div className="h-mono-label">Рекомендации к РПД</div>
            <div style={{ marginTop: 8, fontFamily: 'Instrument Serif, serif', fontSize: 24 }}>
              09.04.03 «Программная инженерия»
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {techs.map((t, i) => (
            <div key={t.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.6fr 0.6fr 0.7fr 0.7fr',
                alignItems: 'center',
                gap: 10,
                padding: '12px 14px',
                borderRadius: 10,
                background: i === highlight ? 'var(--panel)' : 'transparent',
                border: i === highlight ? '1px solid rgba(0, 217, 217, 0.38)' : '1px solid transparent',
                transition: 'all .25s ease'
              }}>
              <span style={{ fontSize: 14 }}>{t.name}</span>
              <span className="mono" style={{ fontSize: 12, color: 'var(--text-2)' }}>{t.conf.toFixed(1)}%</span>
              <span className="mono" style={{ fontSize: 12, color: t.delta.startsWith('−') ? 'var(--danger)' : 'var(--success)' }}>
                {t.delta}
              </span>
              <span style={{ fontSize: 12, color: t.color, textAlign: 'right' }}>{t.action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SourceFlow({ tick }) {
  // A small animated sankey-ish: 4 sources → DST node → output
  const sources = [
    { label: 'HeadHunter API',     k: 0.8, y: 40,  color: 'var(--accent-2)' },
    { label: 'ФГОС / Топ-ИТ',      k: 0.9, y: 100, color: 'var(--accent)' },
    { label: 'Эксперты (12)',      k: 0.9, y: 160, color: 'var(--violet)' },
    { label: 'Прогнозы (РБК, WEF)',k: 0.6, y: 220, color: 'var(--warn)' },
  ];
  return (
    <svg viewBox="0 0 520 280" style={{ width: '100%', marginTop: 20 }}>
      <defs>
        <linearGradient id="flow" x1="0" x2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.1"/>
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0.6"/>
        </linearGradient>
      </defs>
      {sources.map((s, i) => (
        <g key={s.label}>
          <rect x="4" y={s.y - 16} width="140" height="32" rx="6"
            fill="rgba(255,255,255,0.03)" stroke="var(--line-strong)"/>
          <circle cx="18" cy={s.y} r="4" fill={s.color}/>
          <text x="28" y={s.y + 4} fill="var(--text)" fontSize="11" fontFamily="JetBrains Mono">
            {s.label}
          </text>
          <path
            d={`M 148 ${s.y} C 220 ${s.y}, 260 130, 340 130`}
            stroke={s.color} strokeOpacity={0.35 + (tick % 4 === i ? 0.5 : 0)}
            strokeWidth={1.2 + s.k}
            fill="none"
          />
          <text x="154" y={s.y - 4} fill="var(--text-3)" fontSize="9" fontFamily="JetBrains Mono">
            k={s.k}
          </text>
        </g>
      ))}
      {/* DST node */}
      <g>
        <circle cx="340" cy="130" r="38" fill="var(--panel)" stroke="var(--accent)" strokeOpacity="0.5"/>
        <circle cx="340" cy="130" r="48" fill="none" stroke="var(--accent)" strokeOpacity="0.15" strokeDasharray="3 4"/>
        <text x="340" y="128" textAnchor="middle" fill="var(--text)" fontSize="11" fontFamily="JetBrains Mono">DST</text>
        <text x="340" y="142" textAnchor="middle" fill="var(--text-3)" fontSize="9" fontFamily="JetBrains Mono">m₁ ⊕ m₂ ⊕ m₃ ⊕ m₄</text>
      </g>
      {/* Out */}
      <path d="M 378 130 L 460 130" stroke="var(--accent)" strokeWidth="1.5" fill="none"/>
      <polygon points="460,126 470,130 460,134" fill="var(--accent)"/>
      <text x="436" y="118" fill="var(--accent)" fontSize="10" fontFamily="JetBrains Mono">Bel(A)</text>
    </svg>
  );
}

window.Hero = Hero;
window.HeroPreview = HeroPreview;
window.SourceFlow = SourceFlow;
