function Personas() {
  const { useState } = React;
  const [role, setRole] = useState('rector');

  const content = {
    rector: {
      title: 'Ректору и проректору',
      kicker: 'Рост в рейтингах, гранты, приток абитуриентов.',
      points: [
        { h: 'Доказательная актуализация', t: 'Каждая правка РПД защищена цифрами из HH и Топ‑ИТ. Готовый аргумент для УМО, Рособрнадзора и отраслевых партнёров.' },
        { h: 'Вход в Топ‑ИТ и отраслевые программы', t: 'Стандарт Топ‑ИТ встроен в систему как первоклассный источник. Синхронизация — это прямой путь к грантам и целевым наборам.' },
        { h: 'Удержание абитуриентов', t: 'Когда программа живая, студент не уходит в онлайн‑школы. Посещаемость и выпускные показатели растут.' },
        { h: 'Снижение нагрузки на кафедру', t: 'Мониторинг рынка больше не съедает ставку методиста. Экономия — минимум 1 ФОТ на направление.' },
      ],
      kpis: [
        { l: '% актуальности РПД',    v: '+34 п.п.' },
        { l: 'Время актуализации',    v: '×5 быстрее' },
        { l: 'Цикл обновления',       v: '48 часов' },
      ]
    },
    prof: {
      title: 'Преподавателю и зав. кафедрой',
      kicker: 'Меньше рутины, больше методической работы.',
      points: [
        { h: 'Готовый diff к вашей РПД', t: 'Не «отчёт на 120 страниц», а конкретный список: что добавить, что сократить, что исключить. С обоснованием и ссылками на источники.' },
        { h: 'Обоснование в 2 клика', t: 'Для каждой правки — выгрузка цепочки свидетельств: сколько вакансий, какие эксперты, какой прогноз. Это закрывает вопросы УМО и ФГОС.' },
        { h: 'Сценарное планирование', t: 'Можно прикинуть «что если» — переставить веса источников под специфику направления (прикладная vs. фундаментальная).' },
        { h: 'Синхронизация с ЛК', t: 'Экспорт в Moodle, 1С:Университет, «Modeus». Правка РПД не требует переписывания в трёх системах.' },
      ],
      kpis: [
        { l: 'Часов на аналитику',    v: '−80%' },
        { l: 'Правок в квартал',      v: '+12'  },
        { l: 'Посещаемость',          v: '+18%' },
      ]
    }
  };
  const c = content[role];

  return (
    <section id="for-whom" className="section" style={{ borderTop: '1px solid var(--line)', background: 'var(--panel-3)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', marginBottom: 40 }}>
          <div>
            <span className="eyebrow"><span className="dot"></span> Под кого сделано</span>
            <h2 className="h-section" style={{ marginTop: 14, maxWidth: '18ch' }}>
              Два трека: <span className="serif italic" style={{ color: 'var(--accent)' }}>стратегический</span> и <span className="serif italic">практический</span>.
            </h2>
          </div>
          <div style={{ display: 'flex', background: 'var(--panel)', border: '1px solid var(--line-strong)', borderRadius: 999, padding: 4 }}>
            {[
              { k: 'rector', l: 'Ректор / проректор' },
              { k: 'prof',   l: 'Преподаватель / завкафедрой' },
            ].map(o => (
              <button key={o.k} onClick={() => setRole(o.k)} style={{
                padding: '10px 18px', borderRadius: 999, border: 'none',
                background: role === o.k ? 'var(--accent)' : 'transparent',
                color: role === o.k ? '#1C140E' : 'var(--text-2)',
                fontWeight: role === o.k ? 600 : 400,
                fontFamily: 'inherit', fontSize: 13, cursor: 'pointer'
              }}>
                {o.l}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className="persona-grid">
          <div>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 40, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              {c.title}.
            </div>
            <div style={{ color: 'var(--accent)', fontSize: 18, marginTop: 10, fontStyle: 'italic', fontFamily: 'Instrument Serif, serif' }}>
              {c.kicker}
            </div>

            <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {c.kpis.map(k => (
                <div key={k.l} className="panel-bare" style={{ padding: 16 }}>
                  <div className="h-mono-label" style={{ fontSize: 9 }}>{k.l}</div>
                  <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 32, color: 'var(--accent)', marginTop: 4, letterSpacing: '-0.02em' }}>
                    {k.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {c.points.map((p, i) => (
              <div key={p.h} style={{ padding: '18px 0', borderBottom: i < c.points.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 4, minWidth: 18 }}>0{i + 1}</span>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 17, fontWeight: 500, letterSpacing: '-0.01em' }}>{p.h}</h3>
                    <p style={{ margin: '6px 0 0', color: 'var(--text-2)', fontSize: 14, lineHeight: 1.55 }}>{p.t}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Personas = Personas;
