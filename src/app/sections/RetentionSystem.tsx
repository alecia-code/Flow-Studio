const flowSteps = [
  { label: ['Customer', 'Behavior'] },
  { label: ['Expected', 'Next Visit'] },
  { label: ['Overdue', 'Detection'] },
  { label: ['Economic', 'Priority'] },
  { label: ['Outreach', 'Queue'] },
  { label: ['Rebooking', ''] },
  { label: ['Recovered', 'Revenue'] },
];

const signals = [
  { q: 'When should they return?', a: 'Customer-specific booking cadence' },
  { q: 'Who is actually overdue?', a: 'Expected visit vs. actual behavior' },
  { q: 'Who should be prioritized?', a: 'Customer value + revenue at risk' },
];

function RetentionFlow() {
  const W = 1000;
  const H = 120;
  const nx = [71, 214, 357, 500, 643, 786, 929];
  const ny = [56, 28, 70, 22, 68, 30, 56];

  const pathD = nx
    .map((x, i) => {
      if (i === 0) return `M ${x} ${ny[i]}`;
      const px = nx[i - 1];
      const py = ny[i - 1];
      const cp1x = (px + (x - px) / 3).toFixed(1);
      const cp2x = (px + ((x - px) * 2) / 3).toFixed(1);
      return `C ${cp1x} ${py}, ${cp2x} ${ny[i]}, ${x} ${ny[i]}`;
    })
    .join(' ');

  const arrowMids = nx.slice(0, -1).map((x, i) => ({
    x: (x + nx[i + 1]) / 2,
    y: (ny[i] + ny[i + 1]) / 2,
  }));

  return (
    <div>
      {/* Mobile: readable vertical sequence */}
      <div className="md:hidden border-t border-[#D4E5F5]">
        {flowSteps.map((step, i) => (
          <div
            key={i}
            className="grid grid-cols-[42px_1fr_24px] items-center gap-3 py-4 border-b border-[#D4E5F5]"
          >
            <span
              style={{
                fontSize: '0.66rem',
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.1em',
                color: '#7AB0D9',
                fontWeight: 500,
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              style={{
                fontSize: '0.78rem',
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                color: '#1A5296',
                fontWeight: 600,
                lineHeight: 1.35,
              }}
            >
              {step.label.filter(Boolean).join(' ')}
            </span>
            {i < flowSteps.length - 1 ? (
              <span aria-hidden="true" style={{ color: '#AECCEF', fontSize: '1rem', textAlign: 'right' }}>↓</span>
            ) : null}
          </div>
        ))}
      </div>

      {/* Tablet/desktop: original flowing diagram */}
      <div className="hidden md:block">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: '8px' }}>
          {flowSteps.map((step, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '0 6px' }}>
              {step.label.map((line, li) =>
                line ? (
                  <div
                    key={li}
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: '0.09em',
                      textTransform: 'uppercase',
                      color: '#1A5296',
                      fontWeight: 500,
                      lineHeight: 1.55,
                    }}
                  >
                    {line}
                  </div>
                ) : null
              )}
            </div>
          ))}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
          <path d={pathD} fill="none" stroke="#AECCEF" strokeWidth="2" />
          {arrowMids.map((m, i) => (
            <text
              key={i}
              x={m.x}
              y={m.y + 5}
              textAnchor="middle"
              fontSize="14"
              fontWeight="500"
              fill="rgba(26,82,150,0.55)"
              fontFamily="DM Sans, sans-serif"
            >
              →
            </text>
          ))}
          {nx.map((x, i) => (
            <circle key={i} cx={x} cy={ny[i]} r="7" fill="#E3EEF8" stroke="#1A5296" strokeWidth="1.75" />
          ))}
        </svg>
      </div>
    </div>
  );
}

function SystemCurve() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
      <circle cx="700" cy="-260" r="720" fill="none" stroke="#AECCEF" strokeWidth="1" opacity="0.22" />
    </svg>
  );
}

export function RetentionSystemSection() {
  return (
    <section
      id="retention-system"
      style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#E3EEF8', padding: '160px 32px 180px' }}
    >
      <SystemCurve />
      <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '56px' }}>
          <div style={{ width: '24px', height: '1px', backgroundColor: '#AECCEF', flexShrink: 0 }} />
          <span style={{ fontSize: '0.65rem', fontFamily: "'DM Sans', sans-serif", color: '#1A5296', letterSpacing: '0.12em', textTransform: 'uppercase' }}>From Insight to System</span>
        </div>

        <div style={{ marginBottom: '88px' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.75rem, 5.5vw, 4.75rem)', color: '#003D80', lineHeight: 1.08, fontWeight: 400, letterSpacing: '-0.01em', margin: '0 0 4px' }}>Finding the problem</h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.75rem, 5.5vw, 4.75rem)', color: '#1A5296', lineHeight: 1.08, fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.01em', margin: '0 0 36px' }}>was only the beginning.</p>
          <p style={{ fontSize: '1.0625rem', fontFamily: "'DM Sans', sans-serif", color: '#003D80', lineHeight: 1.8, maxWidth: '520px', margin: 0 }}>So Flow designed a simple retention system around the behavior already hiding in the customer data.</p>
        </div>

        <div style={{ marginBottom: '88px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
            <div style={{ width: '24px', height: '1px', backgroundColor: '#AECCEF', flexShrink: 0 }} />
            <span style={{ fontSize: '0.65rem', fontFamily: "'DM Sans', sans-serif", color: '#1A5296', letterSpacing: '0.12em', textTransform: 'uppercase' }}>The Flow Retention Engine</span>
          </div>
          <RetentionFlow />
        </div>

        <div style={{ marginBottom: '100px', borderTop: '1px solid #D4E5F5' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {signals.map((signal, i) => (
              <div key={signal.q} style={{ borderRight: i < 2 ? '1px solid #D4E5F5' : 'none', padding: '52px 40px' }}>
                <div style={{ fontSize: '0.72rem', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.1em', textTransform: 'uppercase', color: '#003D80', fontWeight: 600, marginBottom: '14px' }}>{signal.q}</div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.125rem', fontStyle: 'italic', color: '#1A5296', lineHeight: 1.5, margin: 0 }}>{signal.a}</p>
              </div>
            ))}
          </div>
          <div style={{ height: '1px', backgroundColor: '#D4E5F5' }} />
        </div>

        <div style={{ marginBottom: '100px' }}>
          <div style={{ marginBottom: '36px' }}>
            <p style={{ fontSize: '0.62rem', fontFamily: "'DM Sans', sans-serif", color: '#5A8CC0', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, margin: '0 0 12px' }}>Before</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.5rem, 2.75vw, 2.25rem)', fontStyle: 'italic', color: '#5A8CC0', fontWeight: 300, lineHeight: 1.3, margin: 0 }}>"Who hasn't booked lately?"</p>
          </div>
          <div style={{ fontSize: '1.25rem', fontFamily: "'DM Sans', sans-serif", color: '#AECCEF', margin: '0 0 36px', letterSpacing: '0.05em' }}>→</div>
          <div>
            <p style={{ fontSize: '0.62rem', fontFamily: "'DM Sans', sans-serif", color: '#003D80', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 12px' }}>After</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.75rem, 5.5vw, 4.75rem)', color: '#003D80', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.01em', margin: 0, maxWidth: '680px' }}>"Who should have returned by now?"</p>
          </div>
        </div>

        <div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', color: '#1A5296', fontWeight: 300, lineHeight: 1.5, margin: '0 0 4px' }}>Now the owner knows who needs attention</p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.25rem, 2.25vw, 1.75rem)', fontStyle: 'italic', color: '#003D80', fontWeight: 400, lineHeight: 1.4, margin: 0 }}>before the revenue disappears.</p>
        </div>
      </div>
    </section>
  );
}
