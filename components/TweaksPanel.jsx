function TweaksPanel() {
  const { useState, useEffect } = React;
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState(window.__TWEAKS?.mode || 'bold');
  const [accent, setAccent] = useState(window.__TWEAKS?.accent || 'mint');

  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') setVisible(true);
      if (e.data.type === '__deactivate_edit_mode') setVisible(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
    document.documentElement.setAttribute('data-accent', accent);
  }, [mode, accent]);

  function update(next) {
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: next }, '*');
  }

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 100,
      background: 'rgba(26,20,16,0.96)', backdropFilter: 'blur(14px)',
      border: '1px solid var(--line-strong)', borderRadius: 14, padding: 18,
      width: 300, color: 'var(--text)', fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <span className="h-mono-label" style={{ fontSize: 10, color: 'var(--accent)' }}>Tweaks</span>
        <span className="mono" style={{ fontSize: 10, color: 'var(--text-3)' }}>spros v0.9</span>
      </div>

      <div className="h-mono-label" style={{ fontSize: 10, marginBottom: 8 }}>Вариант подачи</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 16 }}>
        {[
          { k: 'bold', l: 'Смелый' },
          { k: 'conservative', l: 'Консерват.' }
        ].map(o => (
          <button key={o.k} onClick={() => { setMode(o.k); update({ mode: o.k }); }} style={{
            padding: '8px 10px', borderRadius: 8, border: '1px solid var(--line-strong)',
            background: mode === o.k ? 'var(--accent)' : 'transparent',
            color: mode === o.k ? '#1C140E' : 'var(--text)',
            fontSize: 12, cursor: 'pointer', fontFamily: 'inherit'
          }}>
            {o.l}
          </button>
        ))}
      </div>

      <div className="h-mono-label" style={{ fontSize: 10, marginBottom: 8 }}>Акцент</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
        {[
          { k: 'amber', c: '#E8A766' },
          { k: 'sand',  c: '#C7B89A' },
          { k: 'terra', c: '#D97757' }
        ].map(o => (
          <button key={o.k} onClick={() => { setAccent(o.k); update({ accent: o.k }); }} style={{
            padding: 10, borderRadius: 8,
            border: accent === o.k ? `1px solid ${o.c}` : '1px solid var(--line-strong)',
            background: 'transparent', cursor: 'pointer'
          }}>
            <div style={{ width: '100%', height: 16, borderRadius: 4, background: o.c }}></div>
          </button>
        ))}
      </div>

      <div style={{ marginTop: 14, fontSize: 11, color: 'var(--text-3)', lineHeight: 1.4 }}>
        Смелый — крупная серифная типографика, яркие акценты. Консервативный — спокойнее, серии плотнее, без italic-подсветок.
      </div>
    </div>
  );
}
window.TweaksPanel = TweaksPanel;
