function Problem() {
  const pains = [
    {
      n: '01',
      title: 'Отставание РПД от рынка — это уже не риск, а норма',
      body: 'Цикл обновления рабочих программ — 1–3 года. Стек Java, Python и фронтенда за это время меняется дважды. Студент приходит на первый курс к одной версии Spring и выпускается к третьей.',
      tag: 'Процессный долг'
    },
    {
      n: '02',
      title: 'Студенты голосуют ногами в пользу внешних курсов',
      body: 'Посещаемость IT-дисциплин падает: Яндекс Практикум, Skillbox и Stepik закрывают разрыв быстрее, чем кафедра. Вуз теряет вовлечённость и репутацию в глазах работодателя.',
      tag: 'Отток внимания'
    },
    {
      n: '03',
      title: 'Данные о требованиях рынка противоречивы',
      body: 'HH говорит одно, ФГОС — другое, Топ‑ИТ — третье, РБК и Gartner прогнозируют четвёртое. Преподаватель вручную пытается свести несводимое — и тратит на это недели.',
      tag: 'Шум без агрегации'
    },
    {
      n: '04',
      title: 'Формальная аккредитация мешает быстрой адаптации',
      body: 'Между «надо поменять» и «можно поменять» — бюрократический цикл в кафедре, УМО, учебном отделе. Без формализованного обоснования изменения откладываются до следующего учебного года.',
      tag: 'Бюрократический лаг'
    },
    {
      n: '05',
      title: 'Потеря доступа к отраслевым программам',
      body: 'Вузы, не попавшие в «Топ‑ИТ» и отраслевые консорциумы, теряют гранты, партнёрства и поток целевых студентов от Сбера, 1С, Т‑Банка, Астры.',
      tag: 'Экосистемный риск'
    },
    {
      n: '06',
      title: 'Преподаватель — не аналитик рынка',
      body: 'Мониторить 1000+ вакансий в неделю, читать отчёты WEF, слушать экспертов и переупаковывать всё это в компетенции ФГОС — работа на полную ставку. Только никто её не оплачивает.',
      tag: 'Нецелевая нагрузка'
    },
  ];

  return (
    <section id="problem" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }} className="prob-head">
          <div style={{ position: 'sticky', top: 120 }}>
            <span className="eyebrow"><span className="dot"></span> Проблема</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Разрыв между <span className="serif italic" style={{ color: 'var(--accent)' }}>учебным планом</span> и <span className="serif italic">живым рынком</span> стал системным.
            </h2>
            <p style={{ color: 'var(--text-2)', fontSize: 16, marginTop: 18, maxWidth: 420 }}>
              Шесть разрывов, с которыми ежедневно сталкиваются кафедры программной инженерии. Мы не придумываем их — они звучат в ТЗ на каждом пилоте.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }}>
            {pains.map(p => (
              <div key={p.n} style={{ background: 'var(--bg)', padding: 28, minHeight: 220 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span className="mono" style={{ fontSize: 12, color: 'var(--text-3)' }}>{p.n}</span>
                  <span className="tag" style={{ fontSize: 10 }}>{p.tag}</span>
                </div>
                <h3 style={{ margin: 0, fontSize: 19, lineHeight: 1.25, fontWeight: 500, letterSpacing: '-0.01em' }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--text-2)', fontSize: 14, marginTop: 10, lineHeight: 1.55 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Problem = Problem;
