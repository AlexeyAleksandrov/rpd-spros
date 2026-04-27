function Science() {
  return (
    <section id="science" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 72, alignItems: 'start' }} className="science-grid">
          <div>
            <span className="eyebrow"><span className="dot"></span> Научная основа</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              Теория свидетельств <span className="serif italic" style={{ color: 'var(--accent)' }}>Демпстера — Шафера</span>
            </h2>
            <p style={{ color: 'var(--text-2)', marginTop: 20, fontSize: 16 }}>
              Вместо точечных вероятностей работаем с интервалами уверенности: <span className="mono" style={{ color: 'var(--text)' }}>[Bel(A), Pl(A)]</span>.
              Это позволяет явно моделировать неполноту и противоречивость источников, не округляя неопределённость до нуля.
            </p>
            <p style={{ color: 'var(--text-2)', marginTop: 12, fontSize: 16 }}>
              Правило Демпстера даёт корректную агрегацию независимых свидетельств с явным выделением конфликта <span className="mono" style={{ color: 'var(--text)' }}>K</span> — величины, которую в «Спросе» мы интерпретируем как сигнал «требуется ручной разбор».
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <span className="tag">Shafer, 1976</span>
              <span className="tag">ИНПРО · РТУ МИРЭА · 2026</span>
              <span className="tag">первая публикация</span>
            </div>
          </div>

          <div className="panel" style={{ padding: 36, position: 'relative' }}>
            <div className="h-mono-label">Формальная модель</div>

            <div style={{ marginTop: 22, fontFamily: 'Instrument Serif, serif', fontSize: 26, lineHeight: 1.5, color: 'var(--text)' }}>
              <div>Bel(A) = ∑<sub style={{fontSize: 14}}>B⊆A</sub> m(B)</div>
              <div style={{ marginTop: 8 }}>Pl(A) = ∑<sub style={{fontSize: 14}}>B∩A≠∅</sub> m(B)</div>
            </div>

            <div className="hr-dotted" style={{ margin: '28px 0' }}></div>

            <div className="h-mono-label">Правило объединения</div>
            <div style={{ marginTop: 16, fontFamily: 'Instrument Serif, serif', fontSize: 24, color: 'var(--text)' }}>
              (m₁ ⊕ m₂)(A) = <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                <span style={{ display: 'block', borderBottom: '1px solid var(--text-2)', padding: '0 12px' }}>
                  ∑<sub style={{fontSize: 12}}>B∩C=A</sub> m₁(B) · m₂(C)
                </span>
                <span style={{ display: 'block', padding: '0 12px' }}>1 − K</span>
              </span>
            </div>
            <div style={{ marginTop: 14, fontFamily: 'Instrument Serif, serif', fontSize: 20, color: 'var(--text-2)' }}>
              K = ∑<sub style={{fontSize: 12}}>B∩C=∅</sub> m₁(B) · m₂(C)
            </div>

            <div className="hr-dotted" style={{ margin: '28px 0' }}></div>

            <div className="h-mono-label">Коэффициенты доверия (по умолчанию)</div>
            <div style={{ marginTop: 12, display: 'grid', gap: 8 }} className="mono">
              <KRow name="k_рынок"   v={0.8} note="агрегаторы вакансий — высокое"/>
              <KRow name="k_компетенции" v={0.7} note="ФГОС/Топ‑ИТ, субъективное сопоставление"/>
              <KRow name="k_эксперт" v={0.9} note="экспертные интервью — очень высокое"/>
              <KRow name="k_прогноз" v={0.6} note="публикации — умеренное"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KRow({ name, v, note }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '130px 60px 1fr', gap: 12, alignItems: 'center', padding: '6px 0' }}>
      <span style={{ color: 'var(--accent)', fontSize: 13 }}>{name}</span>
      <span style={{ color: 'var(--text)', fontSize: 14 }}>{v.toFixed(1)}</span>
      <span style={{ color: 'var(--text-2)', fontSize: 12 }}>{note}</span>
    </div>
  );
}

window.Science = Science;
