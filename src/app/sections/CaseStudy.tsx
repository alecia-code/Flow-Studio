import { useNavigate } from 'react-router';

const trendData = [
  { label: 'Jun', amount: '$5,053', value: 5053 },
  { label: 'Jul', amount: '$4,543', value: 4543 },
  { label: 'Aug', amount: '$3,980', value: 3980 },
];

const metrics = [
  { value: '↓ 21%', label: 'Revenue' },
  { value: '↓ 4%', label: 'Customers' },
  { value: '$1,700', label: 'Revenue at Risk' },
];

function RevenueTrend() {
  const W = 300;
  const H = 84;
  const min = 3600;
  const max = 5300;
  const range = max - min;

  const pts = trendData.map((d, i) => ({
    x: (i / (trendData.length - 1)) * W,
    y: H - ((d.value - min) / range) * H,
  }));

  const linePath = pts
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(' ');
  const areaPath = `${linePath} L ${pts[pts.length - 1].x} ${H} L 0 ${H} Z`;

  return (
    <div>
      <div
        style={{
          fontSize: '0.6rem',
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#5A8CC0',
          marginBottom: '14px',
        }}
      >
        Revenue Trend
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: '100%', height: H, display: 'block', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="csAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#AECCEF" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#AECCEF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#csAreaGrad)" />
        <path d={linePath} fill="none" stroke="#003D80" strokeWidth="2" />
        {pts.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4.5"
            fill="#E3EEF8"
            stroke="#003D80"
            strokeWidth="2"
          />
        ))}
      </svg>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
        }}
      >
        {trendData.map(d => (
          <div key={d.label} style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '0.58rem',
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#5A8CC0',
              }}
            >
              {d.label}
            </div>
            <div
              style={{
                fontSize: '0.8125rem',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                color: '#003D80',
                marginTop: '3px',
              }}
            >
              {d.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseCurve() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <circle
        cx="1080"
        cy="260"
        r="380"
        fill="rgba(174, 204, 239, 0.11)"
        stroke="#AECCEF"
        strokeWidth="1"
        opacity="0.48"
      />
    </svg>
  );
}

export function CaseStudySection() {
  const navigate = useNavigate();

  return (
    <section
      id="work"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#E3EEF8',
        padding: '160px 32px 180px',
      }}
    >
      <CaseCurve />

      <div
        className="max-w-7xl mx-auto"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── LEFT: editorial narrative ── */}
          <div>

            {/* Labels */}
            <div style={{ marginBottom: '52px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '14px',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '1px',
                    backgroundColor: '#AECCEF',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#1A5296',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  Featured Work
                </span>
              </div>
              <div
                style={{
                  fontSize: '0.65rem',
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#5A8CC0',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  paddingLeft: '34px',
                }}
              >
                Flow Case Study 01 / Customer Retention
              </div>
            </div>

            {/* Headline */}
            <div style={{ marginBottom: '36px' }}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                  color: '#003D80',
                  lineHeight: 1.1,
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.01em',
                  margin: '0 0 10px',
                }}
              >
                Revenue was falling.
              </h2>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 5vw, 4.375rem)',
                  color: '#003D80',
                  lineHeight: 1.07,
                  fontWeight: 400,
                  fontStyle: 'italic',
                  letterSpacing: '-0.015em',
                  margin: 0,
                }}
              >
                More customers weren't the answer.
              </p>
            </div>

            {/* Supporting copy */}
            <p
              style={{
                fontSize: '1.0625rem',
                fontFamily: "'DM Sans', sans-serif",
                color: '#1A5296',
                lineHeight: 1.8,
                margin: '0 0 56px',
                maxWidth: '420px',
              }}
            >
              Flow analyzed three months of customer and transaction data to uncover what was actually driving the decline.
            </p>

            {/* CTA */}
            <div>
              <button
                onClick={() => {
                  navigate('/field-note/lumen-pilates');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: '#003D80',
                  fontSize: '0.8125rem',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.55'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
              >
                See What Flow Found →
              </button>

              <p
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#5A8CC0',
                  fontStyle: 'italic',
                  letterSpacing: '0.02em',
                  margin: '14px 0 0',
                }}
              >
                Concept case study using simulated business data.
              </p>
            </div>

          </div>

          {/* ── RIGHT: data composition ── */}
          <div style={{ paddingTop: '4px' }}>

            {/* Three oversized metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                paddingBottom: '36px',
                borderBottom: '1px solid #D4E5F5',
              }}
            >
              {metrics.map(({ value, label }, i) => (
                <div
                  key={label}
                  style={{
                    paddingLeft: i === 1 ? '18px' : i === 2 ? '28px' : 0,
                    paddingRight: i === 0 ? '18px' : i === 1 ? '28px' : 0,
                    borderRight: i < 2 ? '1px solid #D4E5F5' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: i < 2
                        ? 'clamp(2.5rem, 4.25vw, 4rem)'
                        : 'clamp(1.875rem, 3vw, 2.75rem)',
                      fontWeight: 300,
                      color: '#003D80',
                      lineHeight: 1,
                      letterSpacing: '-0.025em',
                      marginBottom: '10px',
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.58rem',
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#5A8CC0',
                      lineHeight: 1.5,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Revenue trend */}
            <div
              style={{
                padding: '32px 0',
                borderBottom: '1px solid #D4E5F5',
              }}
            >
              <RevenueTrend />
            </div>

            {/* THE SIGNAL */}
            <div style={{ paddingTop: '32px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px',
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#5A8CC0',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '0.62rem',
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#003D80',
                    fontWeight: 600,
                  }}
                >
                  The Signal
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.625rem',
                  fontStyle: 'italic',
                  color: '#003D80',
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                Existing customers were booking less frequently.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
