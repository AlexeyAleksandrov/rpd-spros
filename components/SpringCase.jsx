function SpringCase() {
  // Before / after a la "было — стало"
  const before = [
    { t: 'Java 8',          h: 36 },
    { t: 'Spring MVC',      h: 24 },
    { t: 'XML-конфигурация',h: 12 },
    { t: 'JSP + JSTL',      h:  8 },
    { t: 'Apache Tomcat',   h:  8 },
  ];
  const after = [
    { t: 'Java 21 (LTS)',            h: 36, flag: 'актуализировано' },
    { t: 'Spring Boot 3 + Security', h: 32, flag: '+50% часов' },
    { t: 'Spring Data JPA',          h: 16, flag: 'новое' },
    { t: 'Kotlin + Coroutines',      h: 14, flag: 'новое' },
    { t: 'Docker · PostgreSQL 16',   h: 10, flag: 'новое' },
    { t: 'XML-конфигурация',         h:  0, flag: 'исключено' },
  ];

  const totalBefore = before.reduce((s, x) => s + x.h, 0);
  const totalAfter = after.reduce((s, x) => s + x.h, 0);

  const flagColor = f =>
    f === 'исключено' ? 'var(--danger)' :
    f === '+50% часов' || f === 'новое' ? 'var(--success)' : 'var(--text-2)';

  return (
    <section id="case" className="section-sm" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div style={{ maxWidth: 820, marginBottom: 40 }}>
          <span className="eyebrow"><span className="dot"></span> Кейс</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>
            РПД дисциплины «Enterprise‑разработка на Java». <span className="serif italic" style={{ color: 'var(--accent)' }}>Было — стало.</span>
          </h2>
          <p style={{ color: 'var(--text-2)', marginTop: 16, fontSize: 16 }}>
            Реальный пример: 88‑часовая дисциплина кафедры‑партнёра. После прогона через «Спрос» шесть тем были пересобраны за 2 часа методической работы.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="case-grid">
          {[
            { title: 'До', rows: before, total: totalBefore, muted: true },
            { title: 'После', rows: after, total: totalAfter, muted: false }
          ].map(col => (
            <div key={col.title} className="panel" style={{ padding: 28 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
                <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 30, letterSpacing: '-0.01em' }}>{col.title}</div>
                <span className="mono" style={{ fontSize: 12, color: col.muted ? 'var(--text-3)' : 'var(--accent)' }}>
                  {col.total} ч
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.rows.map(r => (
                  <div key={r.t} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr auto', gap: 12, alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--line)' }}>
                    <span style={{ fontSize: 14, color: r.flag === 'исключено' ? 'var(--text-3)' : 'var(--text)', textDecoration: r.flag === 'исключено' ? 'line-through' : 'none' }}>{r.t}</span>
                    <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
                      <div style={{ width: `${(r.h / 36) * 100}%`, height: '100%', background: col.muted ? 'var(--text-3)' : 'var(--accent)', borderRadius: 2 }}></div>
                    </div>
                    <span className="mono" style={{ fontSize: 12, color: 'var(--text-2)', width: 90, textAlign: 'right' }}>
                      {r.h} ч
                      {r.flag && <span style={{ color: flagColor(r.flag), display: 'block', fontSize: 10 }}>{r.flag}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.SpringCase = SpringCase;
