function Dashboard() {
  const { useState } = React;
  const rows = [
    { tech: 'Spring Framework',    bel: 0.993, pl: 0.999, trend: +0.12, rule: 'Увеличить',   cat: 'Backend' },
    { tech: 'Kotlin Coroutines',    bel: 0.941, pl: 0.988, trend: +0.31, rule: 'Добавить',    cat: 'Backend' },
    { tech: 'React Server Comp.',   bel: 0.812, pl: 0.934, trend: +0.44, rule: 'Добавить',    cat: 'Frontend' },
    { tech: 'Apache Kafka',         bel: 0.918, pl: 0.977, trend: +0.09, rule: 'Сохранить',   cat: 'Data' },
    { tech: 'PostgreSQL 16',        bel: 0.951, pl: 0.992, trend: +0.07, rule: 'Сохранить',   cat: 'Data' },
    { tech: 'Vue 3 Composition',    bel: 0.875, pl: 0.951, trend: +0.06, rule: 'Сохранить',   cat: 'Frontend' },
    { tech: 'gRPC',                 bel: 0.702, pl: 0.889, trend: +0.18, rule: 'Добавить',    cat: 'Backend' },
    { tech: 'Docker / k8s',         bel: 0.973, pl: 0.996, trend: +0.04, rule: 'Сохранить',   cat: 'DevOps' },
    { tech: 'jQuery',               bel: 0.082, pl: 0.210, trend: -0.41, rule: 'Исключить',   cat: 'Frontend' },
    { tech: 'AngularJS (1.x)',      bel: 0.035, pl: 0.128, trend: -0.56, rule: 'Исключить',   cat: 'Frontend' },
    { tech: 'Flask',                bel: 0.412, pl: 0.680, trend: -0.12, rule: 'Конфликт',    cat: 'Backend' },
    { tech: 'Rust (systems)',       bel: 0.518, pl: 0.772, trend: +0.28, rule: 'Опционально', cat: 'Systems' },
  ];

  const [active, setActive] = useState('Все');
  const cats = ['Все', 'Backend', 'Frontend', 'Data', 'DevOps', 'Systems'];
  const filtered = active === 'Все' ? rows : rows.filter(r => r.cat === active);

  const ruleColor = r =>
    r === 'Увеличить' || r === 'Добавить' ? 'var(--success)' :
    r === 'Сохранить' ? 'var(--accent)' :
    r === 'Исключить' ? 'var(--danger)' :
    r === 'Конфликт'  ? 'var(--warn)' :
    r === 'Опционально' ? 'var(--accent)' : 'var(--violet)';

  return (
    <section id="dashboard" className="section" style={{ borderTop: '1px solid var(--line)', background: 'var(--panel-3)' }}>
      <div className="wrap">
        <div style={{ maxWidth: 780, marginBottom: 40 }}>
          <span className="eyebrow"><span className="dot"></span> Продукт</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>
            Рабочее место преподавателя. <span className="serif italic" style={{ color: 'var(--accent)' }}>Всё отраслевое знание на одном экране.</span>
          </h2>
        </div>

        <div className="panel" style={{ overflow: 'hidden', boxShadow: '0 40px 80px -40px rgba(0,0,0,0.8)' }}>
          {/* Window chrome */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 18px', borderBottom: '1px solid var(--line)', background: 'var(--panel-2)' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#D97757' }}></span>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#F0B863' }}></span>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#8B6F4E' }}></span>
            <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)', marginLeft: 16 }}>
              spros.edu / программы / 09.03.04 · «Программная инженерия»
            </span>
            <span style={{ flex: 1 }}></span>
            <span className="tag" style={{ fontSize: 10 }}>синхронизировано 03:14 назад</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: 540 }}>
            {/* Sidebar */}
            <div style={{ borderRight: '1px solid var(--line)', padding: 20 }}>
              <div className="h-mono-label" style={{ fontSize: 10, marginBottom: 12 }}>РПД</div>
              {['09.03.04 ПрИнж', '09.03.01 Информатика', '01.03.02 ПМиИ', '38.03.05 БИ'].map((p, i) => (
                <div key={p} style={{
                  padding: '9px 10px', borderRadius: 8, marginBottom: 2, fontSize: 13,
                  background: i === 0 ? 'rgba(0, 217, 217, 0.12)' : 'transparent',
                  color: i === 0 ? 'var(--text)' : 'var(--text-2)',
                  border: i === 0 ? '1px solid rgba(0, 217, 217, 0.30)' : '1px solid transparent'
                }}>
                  {p}
                </div>
              ))}

              <div className="hr-dotted" style={{ margin: '20px 0' }}></div>

              <div className="h-mono-label" style={{ fontSize: 10, marginBottom: 12 }}>Итого по программе</div>
              <Mini label="Покрытие рынка" val="87%" color="var(--accent)"/>
              <Mini label="Актуальных тем" val="42 / 48"/>
              <Mini label="К правке" val="6" color="var(--warn)"/>
              <Mini label="Исключить" val="2" color="var(--danger)"/>
            </div>

            {/* Main */}
            <div style={{ padding: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {cats.map(c => (
                    <button key={c} onClick={() => setActive(c)} style={{
                      background: active === c ? 'var(--text)' : 'transparent',
                      color: active === c ? 'var(--bg)' : 'var(--text-2)',
                      border: '1px solid var(--line-strong)',
                      padding: '6px 12px', borderRadius: 999, cursor: 'pointer',
                      fontSize: 12, fontFamily: 'inherit'
                    }}>
                      {c}
                    </button>
                  ))}
                </div>
                <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>
                  {filtered.length} технологий · сортировка: Bel ↓
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.2fr', gap: '0 16px', paddingBottom: 10, borderBottom: '1px solid var(--line)', marginBottom: 4 }} className="mono">
                <span className="h-mono-label">Технология</span>
                <span className="h-mono-label">Bel (доверие)</span>
                <span className="h-mono-label">Pl (правдоп.)</span>
                <span className="h-mono-label">ΔГод</span>
                <span className="h-mono-label" style={{ textAlign: 'right' }}>Рекомендация</span>
              </div>

              <div style={{ maxHeight: 420, overflowY: 'auto' }}>
                {filtered.map(r => (
                  <div key={r.tech} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.2fr', gap: '0 16px', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--line)' }}>
                    <span style={{ fontSize: 14 }}>{r.tech}</span>
                    <Bar val={r.bel} color="var(--accent)"/>
                    <Bar val={r.pl} color="var(--accent-2)"/>
                    <span className="mono" style={{ fontSize: 12, color: r.trend > 0 ? 'var(--success)' : 'var(--danger)' }}>
                      {r.trend > 0 ? '+' : ''}{(r.trend * 100).toFixed(0)}%
                    </span>
                    <span style={{ textAlign: 'right' }}>
                      <span style={{ color: ruleColor(r.rule), fontSize: 13, fontWeight: 500 }}>{r.rule}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mini({ label, val, color = 'var(--text)' }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--line)' }}>
      <span style={{ fontSize: 12, color: 'var(--text-2)' }}>{label}</span>
      <span className="mono" style={{ fontSize: 13, color }}>{val}</span>
    </div>
  );
}

function Bar({ val, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
        <div style={{ width: `${val * 100}%`, height: '100%', background: color, borderRadius: 2 }}></div>
      </div>
      <span className="mono" style={{ fontSize: 11, color: 'var(--text-2)', width: 40, textAlign: 'right' }}>
        {val.toFixed(2)}
      </span>
    </div>
  );
}

window.Dashboard = Dashboard;
