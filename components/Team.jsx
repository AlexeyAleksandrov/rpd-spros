function Team() {
  const members = [
    { name: 'Александров А. С.',  role: 'Аспирант · автор модели',           note: 'Кафедра индустриального программирования, РТУ МИРЭА', avatar: 'АА' },
    { name: 'Зарипова В. М.',      role: 'Научный руководитель, к.т.н.',      note: 'Доцент кафедры индустриального программирования',      avatar: 'ВЗ' },
    { name: 'Пилотная кафедра',    role: 'Экспериментальное внедрение',       note: 'Направление 09.03.04 «Программная инженерия»',          avatar: '09' },
  ];
  return (
    <section id="team" className="section-sm" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div style={{ marginBottom: 36 }}>
          <span className="eyebrow"><span className="dot"></span> Кто делает «Спрос»</span>
          <h2 className="h-section" style={{ marginTop: 14, maxWidth: '20ch' }}>
            Исследовательский проект <span className="serif italic" style={{ color: 'var(--accent)' }}>РТУ МИРЭА</span>.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="team-grid">
          {members.map(m => (
            <div key={m.name} className="panel-bare" style={{ padding: 28, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                color: '#1C140E', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Instrument Serif, serif', fontSize: 20, fontWeight: 600, flexShrink: 0
              }}>
                {m.avatar}
              </div>
              <div>
                <div style={{ fontSize: 17, fontFamily: 'Instrument Serif, serif', letterSpacing: '-0.01em' }}>{m.name}</div>
                <div style={{ color: 'var(--accent)', fontSize: 12.5, marginTop: 4 }}>{m.role}</div>
                <div style={{ color: 'var(--text-2)', fontSize: 13, marginTop: 8, lineHeight: 1.5 }}>{m.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Team = Team;
