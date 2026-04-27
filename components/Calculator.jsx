function Calculator() {
  const { useState } = React;
  // DST calculator with 4 sliders for the four sources
  const [market, setMarket]   = useState(0.95);  // x
  const [comp, setComp]       = useState(1.00);  // y (ФГОС/Топ-ИТ)
  const [expert, setExpert]   = useState(0.90);  // z
  const [forecast, setForecast] = useState(0.85);// w
  const [kMarket, setKMarket]   = useState(0.8);
  const [kComp, setKComp]       = useState(0.7);
  const [kExpert, setKExpert]   = useState(0.9);
  const [kForecast, setKForecast] = useState(0.6);
  const [tech, setTech] = useState('Spring Framework');

  // DST step by step
  function evidence(k, x) {
    return { T: +(k * x).toFixed(4), U: +(1 - k * x).toFixed(4), F: 0 };
  }
  function combine(a, b) {
    const K = a.T * b.F + a.F * b.T;
    const denom = 1 - K;
    if (denom <= 0) return { T: 0, U: 1, F: 0, K: 1 };
    const T = (a.T * b.T + a.T * b.U + a.U * b.T) / denom;
    const F = (a.F * b.F + a.F * b.U + a.U * b.F) / denom;
    const U = (a.U * b.U) / denom;
    return { T: +T.toFixed(4), U: +U.toFixed(4), F: +F.toFixed(4), K: +K.toFixed(4) };
  }

  const m1 = evidence(kMarket, market);
  const m2 = evidence(kComp, comp);
  const m3 = evidence(kExpert, expert);
  const m4 = evidence(kForecast, forecast);
  const m12 = combine(m1, m2);
  const m123 = combine(m12, m3);
  const mFinal = combine(m123, m4);

  let verdict, hours, verdictColor, rule;
  if (mFinal.T > 0.8 && mFinal.F < 0.1) { verdict = 'Увеличить часы на 50–100%'; hours = '+45…60 ч'; verdictColor = 'var(--success)'; rule = 'ТРИГГЕР 1 · сильная рекомендация'; }
  else if (mFinal.T > 0.6 && mFinal.F < 0.3) { verdict = 'Сохранить текущие часы'; hours = '≈ без изменений'; verdictColor = 'var(--accent)'; rule = 'ТРИГГЕР 2 · стандартная'; }
  else if (mFinal.U > 0.4 || (mFinal.T > 0.4 && mFinal.F > 0.4)) { verdict = 'Требуется разбор комиссии'; hours = 'в резерв'; verdictColor = 'var(--warn)'; rule = 'ТРИГГЕР 3 · конфликт'; }
  else if (mFinal.F > 0.6 && mFinal.T < 0.3) { verdict = 'Сократить на 50–70%'; hours = '−20 ч'; verdictColor = 'var(--danger)'; rule = 'ТРИГГЕР 4 · падение'; }
  else if (mFinal.F > 0.8 && mFinal.T < 0.1) { verdict = 'Исключить из программы'; hours = '0 ч'; verdictColor = 'var(--danger)'; rule = 'ТРИГГЕР 5 · жёсткое исключение'; }
  else { verdict = 'Пограничный случай — ручной обзор'; hours = '?'; verdictColor = 'var(--text-2)'; rule = 'Нет явного триггера'; }

  const presets = [
    { name: 'Spring Framework', m: 0.95, c: 1.00, e: 0.90, f: 0.85 },
    { name: 'Kotlin Coroutines', m: 0.78, c: 0.60, e: 0.88, f: 0.90 },
    { name: 'jQuery',            m: 0.15, c: 0.20, e: 0.10, f: 0.05, F: true },
    { name: 'Rust (system)',     m: 0.40, c: 0.30, e: 0.75, f: 0.80 },
    { name: 'Apache Kafka',      m: 0.72, c: 0.50, e: 0.85, f: 0.80 },
  ];

  function applyPreset(p) {
    setTech(p.name); setMarket(p.m); setComp(p.c); setExpert(p.e); setForecast(p.f);
  }

  return (
    <section id="demo" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div style={{ maxWidth: 780, marginBottom: 44 }}>
          <span className="eyebrow"><span className="dot"></span> Интерактивное демо</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>
            Подвигайте <span className="serif italic" style={{ color: 'var(--accent)' }}>четыре ползунка</span> — увидите, как рождается рекомендация.
          </h2>
          <p style={{ color: 'var(--text-2)', marginTop: 16, fontSize: 16 }}>
            То же самое, что происходит внутри «Спроса» каждые 48 часов. Только у нас входы берутся не руками, а из HH API и публикаций.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
          {presets.map(p => (
            <button key={p.name} onClick={() => applyPreset(p)} className="btn" style={{
              padding: '8px 14px', fontSize: 12,
              background: tech === p.name ? 'var(--accent)' : 'transparent',
              color: tech === p.name ? '#1C140E' : 'var(--text-2)',
              borderColor: tech === p.name ? 'var(--accent)' : 'var(--line-strong)'
            }}>
              {p.name}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }} className="calc-grid">
          {/* Sliders */}
          <div style={{ background: 'var(--panel)', padding: 32 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
              <div>
                <div className="h-mono-label">Технология</div>
                <input type="text" value={tech} onChange={e => setTech(e.target.value)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text)', fontFamily: 'Instrument Serif, serif', fontSize: 26, padding: 0, marginTop: 4, width: '100%' }}/>
              </div>
              <span className="tag mono" style={{ color: verdictColor, borderColor: verdictColor }}>
                {rule}
              </span>
            </div>

            <Slider label="Рынок (HH)"        icon="■" color="var(--accent-2)" val={market}    setVal={setMarket}    k={kMarket}    setK={setKMarket}/>
            <Slider label="Компетенции (ФГОС/Топ-ИТ)" icon="◆" color="var(--accent)"   val={comp}      setVal={setComp}      k={kComp}      setK={setKComp}/>
            <Slider label="Эксперты"           icon="●" color="var(--violet)"   val={expert}    setVal={setExpert}    k={kExpert}    setK={setKExpert}/>
            <Slider label="Прогнозы"           icon="▲" color="var(--warn)"     val={forecast}  setVal={setForecast}  k={kForecast}  setK={setKForecast}/>
          </div>

          {/* Results */}
          <div style={{ background: 'var(--panel-2)', padding: 32 }}>
            <div className="h-mono-label">Результат агрегации DST</div>
            <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              <ResultCell label="m(T) — включить" val={mFinal.T} color="var(--accent)"/>
              <ResultCell label="m(U) — неопред." val={mFinal.U} color="var(--warn)"/>
              <ResultCell label="m(F) — исключить" val={mFinal.F} color="var(--danger)"/>
            </div>

            <div className="hr-dotted" style={{ margin: '28px 0 22px' }}></div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="h-mono-label">Вердикт системы</span>
              <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>конфликт K₁₂₃₄ = {mFinal.K || '0.0000'}</span>
            </div>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 30, marginTop: 10, letterSpacing: '-0.01em', color: verdictColor }}>
              {verdict}
            </div>
            <div className="mono" style={{ fontSize: 13, color: 'var(--text-2)', marginTop: 8 }}>
              Рекомендация по часам: <span style={{ color: 'var(--text)' }}>{hours}</span>
            </div>

            <div className="hr-dotted" style={{ margin: '22px 0' }}></div>

            <div className="h-mono-label" style={{ marginBottom: 10 }}>Цепочка агрегации</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr 1fr', gap: '6px 12px', fontSize: 12 }} className="mono">
              <span style={{ color: 'var(--text-3)' }}></span>
              <span style={{ color: 'var(--text-3)' }}>m(T)</span>
              <span style={{ color: 'var(--text-3)' }}>m(U)</span>
              <span style={{ color: 'var(--text-3)' }}>m(F)</span>
              <ChainRow label="m₁ рынок"  v={m1}/>
              <ChainRow label="m₂ комп."  v={m2}/>
              <ChainRow label="m₃ эксп."  v={m3}/>
              <ChainRow label="m₄ прогн." v={m4}/>
              <ChainRow label="m₁₂"       v={m12}    hi/>
              <ChainRow label="m₁₂₃"      v={m123}   hi/>
              <ChainRow label="m итог"    v={mFinal} hi final/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, icon, color, val, setVal, k, setK }) {
  return (
    <div style={{ marginTop: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 13.5, color: 'var(--text)' }}>
          <span style={{ color, marginRight: 8 }}>{icon}</span>{label}
        </span>
        <span className="mono" style={{ fontSize: 12, color: 'var(--text-2)' }}>
          x = {val.toFixed(2)} &nbsp;·&nbsp; <span style={{ color: 'var(--text-3)' }}>k =</span> {k.toFixed(1)}
        </span>
      </div>
      <input type="range" min="0" max="1" step="0.01" value={val} onChange={e => setVal(+e.target.value)}
        style={{ width: '100%', accentColor: color }}/>
      <div style={{ marginTop: 6 }}>
        <input type="range" min="0" max="1" step="0.1" value={k} onChange={e => setK(+e.target.value)}
          style={{ width: '100%', accentColor: 'var(--text-3)', opacity: 0.5 }}/>
      </div>
    </div>
  );
}

function ResultCell({ label, val, color }) {
  const pct = (val * 100).toFixed(1);
  return (
    <div className="panel-bare" style={{ padding: 14 }}>
      <div className="h-mono-label" style={{ fontSize: 9.5 }}>{label}</div>
      <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 34, color, marginTop: 6, letterSpacing: '-0.02em' }}>
        {pct}<span style={{ fontSize: 14, color: 'var(--text-3)' }}>%</span>
      </div>
      <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 3, marginTop: 8 }}>
        <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: 3 }}></div>
      </div>
    </div>
  );
}

function ChainRow({ label, v, hi, final }) {
  const cellStyle = {
    color: hi ? 'var(--text)' : 'var(--text-2)',
    fontWeight: final ? 600 : 400
  };
  return (
    <>
      <span style={{ color: hi ? 'var(--accent)' : 'var(--text-3)' }}>{label}</span>
      <span style={cellStyle}>{v.T.toFixed(4)}</span>
      <span style={cellStyle}>{v.U.toFixed(4)}</span>
      <span style={cellStyle}>{v.F.toFixed(4)}</span>
    </>
  );
}

window.Calculator = Calculator;
