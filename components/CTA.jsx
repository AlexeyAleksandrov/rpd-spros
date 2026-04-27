function CTA() {
  const { useState } = React;
  const labelStyle = { display: 'block', fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6, fontFamily: 'JetBrains Mono' };
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', role: 'rector', vuz: '', email: '', direction: '' });
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <section id="cta" className="section" style={{ borderTop: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(201, 151, 90, 0.14), transparent 70%)'
      }}></div>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }} className="cta-grid">
          <div>
            <span className="eyebrow"><span className="dot"></span> Ранние партнёры</span>
            <h2 className="h-display" style={{ marginTop: 18, fontSize: 'clamp(40px, 5vw, 72px)' }}>
              12 вузов — <span className="serif italic" style={{ color: 'var(--accent)' }}>первая волна</span> пилотов 2026/27.
            </h2>
            <p style={{ color: 'var(--text-2)', marginTop: 20, fontSize: 17, maxWidth: 540 }}>
              Подключаем одну кафедру, одну дисциплину. За месяц вы получите первый diff к РПД с полной цепочкой обоснования и готовым пакетом для УМО. Без бюджета, без лицензионных условий — это совместная научная работа в рамках MVP.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 28 }}>
              <span className="tag">4 места осталось</span>
              <span className="tag">старт пилота — июнь 2026</span>
              <span className="tag">on‑premise возможен</span>
            </div>
          </div>

          <div className="panel" style={{ padding: 32 }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'rgba(201, 151, 90, 0.16)', border: '1px solid var(--accent)',
                  margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14 L12 20 L22 8" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 28, letterSpacing: '-0.01em' }}>Заявка принята</div>
                <p style={{ color: 'var(--text-2)', fontSize: 14, marginTop: 10 }}>
                  Свяжемся с {form.vuz || 'вашим вузом'} в течение двух рабочих дней.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="h-mono-label" style={{ marginBottom: 20 }}>Заявка на пилот</div>
                <div style={{ display: 'grid', gap: 14 }}>
                  <div>
                    <label style={labelStyle}>ФИО</label>
                    <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Иванов Иван Иванович"/>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div>
                      <label style={labelStyle}>Роль</label>
                      <select value={form.role} onChange={e => setForm({...form, role: e.target.value})}>
                        <option value="rector">Ректор / проректор</option>
                        <option value="dean">Декан / директор института</option>
                        <option value="head">Зав. кафедрой</option>
                        <option value="prof">Преподаватель</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Направление</label>
                      <input type="text" value={form.direction} onChange={e => setForm({...form, direction: e.target.value})} placeholder="09.03.04"/>
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Вуз</label>
                    <input required type="text" value={form.vuz} onChange={e => setForm({...form, vuz: e.target.value})} placeholder="РТУ МИРЭА"/>
                  </div>
                  <div>
                    <label style={labelStyle}>Рабочая почта</label>
                    <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="i.ivanov@mirea.ru"/>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', marginTop: 8 }}>
                    Отправить заявку
                    <Arrow/>
                  </button>
                  <div className="mono" style={{ fontSize: 10.5, color: 'var(--text-3)', textAlign: 'center' }}>
                    Нажимая «отправить», соглашаюсь на обработку персональных данных
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

window.CTA = CTA;
