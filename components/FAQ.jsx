function FAQ() {
  const { useState } = React;
  const items = [
    {
      q: 'Как «Спрос» согласуется с ФГОС и аккредитацией?',
      a: 'Система не меняет ФГОС — она предлагает точечные правки внутри тем и часов дисциплины. Каждая рекомендация сопровождается обоснованием, которое вы прикладываете к протоколу кафедры. ФГОС выступает одним из источников свидетельств и имеет свой вес k.'
    },
    {
      q: 'Мы не технический вуз. Работает ли это для экономики, права, медицины?',
      a: 'Архитектура источников универсальна — меняются только парсеры и эксперты. Для не‑ИТ направлений в MVP мы ставим приоритет на экспертные интервью и профстандарты, HH используется как вспомогательный сигнал.'
    },
    {
      q: 'Как вы справляетесь с противоречивыми источниками?',
      a: 'В этом и смысл модели Демпстера–Шафера. Конфликт между источниками не усредняется, а явно выносится как величина K. Если K высок — система сама помечает случай «требуется разбор комиссии», а не даёт ложно уверенную рекомендацию.'
    },
    {
      q: 'Что делать с приватностью наших РПД и стратегий?',
      a: 'Все РПД хранятся в изолированной среде вуза (on‑premise или частный тенант). Наружу уходят только анонимизированные запросы к открытым источникам (HH API, публикации).'
    },
    {
      q: 'Нужны ли для запуска навыки Data Science?',
      a: 'Нет. Преподаватель работает с интерфейсом на уровне Excel: загрузил РПД, получил diff, принял/отклонил правку. Математика скрыта под капотом, но полностью прозрачна в режиме «развернуть цепочку».'
    },
    {
      q: 'Как обновляются коэффициенты доверия k?',
      a: 'По умолчанию используются веса, откалиброванные на первом пилотном исследовании (ИНПРО‑2026). Вуз может перенастроить их под свою политику: например, поднять вес экспертных интервью и снизить вес прогнозных публикаций.'
    },
    {
      q: 'Кто за этим стоит?',
      a: 'Команда кафедры индустриального программирования Института перспективных технологий и индустриального программирования РТУ МИРЭА. Научный руководитель — к.т.н., доцент В. М. Зарипова. Методика представлена на ИНПРО‑2026.'
    },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.4fr', gap: 80 }} className="faq-grid">
          <div style={{ position: 'sticky', top: 120, alignSelf: 'start' }}>
            <span className="eyebrow"><span className="dot"></span> FAQ</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              Сложные вопросы мы <span className="serif italic" style={{ color: 'var(--accent)' }}>любим</span>.
            </h2>
            <p style={{ color: 'var(--text-2)', marginTop: 16, fontSize: 15, maxWidth: 340 }}>
              Не нашли своего — напишите на <a className="inline" href="mailto:hi@spros.mirea.ru">hi@spros.mirea.ru</a>, ответим в течение суток.
            </p>
          </div>
          <div>
            {items.map((it, i) => (
              <div key={it.q} style={{ borderTop: '1px solid var(--line-strong)', padding: '22px 0' }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                  background: 'transparent', border: 'none', color: 'var(--text)',
                  width: '100%', padding: 0, cursor: 'pointer',
                  fontFamily: 'inherit', textAlign: 'left', gap: 20
                }}>
                  <span style={{ fontSize: 19, fontFamily: 'Instrument Serif, serif', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{it.q}</span>
                  <span style={{ color: 'var(--accent)', fontFamily: 'JetBrains Mono', fontSize: 16, marginTop: 4 }}>{open === i ? '—' : '+'}</span>
                </button>
                {open === i && (
                  <p style={{ margin: '16px 0 0', color: 'var(--text-2)', fontSize: 15, lineHeight: 1.6, maxWidth: 620 }}>
                    {it.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
