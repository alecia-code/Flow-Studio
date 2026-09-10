import { useNavigate } from 'react-router';

// ── Trend chart: dual-normalized, two lines, direct labels ──────────────────
function TrendMini() {
  const W = 400;
  const H = 52;
  const xs = [0, 133, 267, 400];
  const monthLabels = ['Jun', 'Jul', 'Aug', 'Sep'];

  // Risk declining — high risk = near top (small y)
  const riskRaw = [1700, 1650, 1590, 1390];
  const rMin = 1390, rMax = 1700;
  const riskY = riskRaw.map(v => 4 + ((rMax - v) / (rMax - rMin)) * (H - 8));

  // Recovery growing — high recovery = near top (small y)
  const recovRaw = [0, 0, 210, 420];
  const recovY = recovRaw.map(v => H - 4 - (v / 420) * (H - 8));

  const toPath = (ys: number[]) =>
    xs.map((x, i) => `${i === 0 ? 'M' : 'L'} ${x} ${ys[i].toFixed(1)}`).join(' ');

  return (
    <svg
      viewBox={`0 -4 490 ${H + 22}`}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      {/* Risk line */}
      <path d={toPath(riskY)} fill="none" stroke="#1A5296" strokeWidth="1.5" />
      <circle cx={400} cy={riskY[3]} r="2.5" fill="#1A5296" />
      <text x={408} y={riskY[3] + 3} fontSize="6.5" fill="#1A5296" fontFamily="DM Sans, sans-serif">
        At Risk
      </text>

      {/* Recovery line */}
      <path d={toPath(recovY)} fill="none" stroke="#AECCEF" strokeWidth="1.5" />
      <circle cx={400} cy={recovY[3]} r="2.5" fill="#AECCEF" />
      <text x={408} y={recovY[3] + 3} fontSize="6.5" fill="#5A8CC0" fontFamily="DM Sans, sans-serif">
        Recovered
      </text>

      {/* Month labels */}
      {xs.map((x, i) => (
        <text
          key={i}
          x={x}
          y={H + 16}
          textAnchor="middle"
          fontSize="7"
          fill="#5A8CC0"
          fontFamily="DM Sans, sans-serif"
        >
          {monthLabels[i]}
        </text>
      ))}
    </svg>
  );
}

// ── Business Pulse mockup ───────────────────────────────────────────────────
function BusinessPulseMockup() {
  const primaryMetrics = [
    { value: '$3,980', label: 'Current Revenue' },
    { value: '12', label: 'Customers Overdue' },
    { value: '$1,700', label: 'Revenue at Risk' },
    { value: '$420', label: 'Recovered Revenue' },
  ];

  const customers = [
    { id: 'Customer 018', days: 11, value: '$85', priority: 'HIGH' },
    { id: 'Customer 027', days: 8, value: '$65', priority: 'HIGH' },
    { id: 'Customer 041', days: 6, value: '$55', priority: 'MEDIUM' },
  ];

  const cellLabel: React.CSSProperties = {
    fontSize: '0.5625rem',
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: '0.09em',
    textTransform: 'uppercase' as const,
    color: '#5A8CC0',
    lineHeight: 1.4,
  };

  const sectionHeading: React.CSSProperties = {
    fontSize: '0.5625rem',
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: '#003D80',
    fontWeight: 600 as const,
  };

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #D4E5F5',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 28px',
          borderBottom: '1px solid #EAF2FA',
          backgroundColor: '#FAFCFE',
        }}
      >
        <span
          style={{
            fontSize: '0.625rem',
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#003D80',
            fontWeight: 600,
          }}
        >
          Flow Business Pulse
        </span>
        <span
          style={{
            fontSize: '0.6875rem',
            fontFamily: "'DM Sans', sans-serif",
            color: '#5A8CC0',
          }}
        >
          Customer Retention
        </span>
      </div>

      {/* Primary metrics row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderBottom: '1px solid #EAF2FA',
        }}
      >
        {primaryMetrics.map(({ value, label }, i) => (
          <div
            key={label}
            style={{
              padding: '24px 20px',
              borderRight: i < 3 ? '1px solid #EAF2FA' : 'none',
            }}
          >
            <div
              style={{
                fontSize: '2.375rem',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                color: '#003D80',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginBottom: '8px',
              }}
            >
              {value}
            </div>
            <div style={cellLabel}>{label}</div>
          </div>
        ))}
      </div>

      {/* Needs Attention */}
      <div style={{ borderBottom: '1px solid #EAF2FA' }}>
        <div
          style={{
            padding: '14px 28px',
            borderBottom: '1px solid #EAF2FA',
            backgroundColor: '#FAFCFE',
          }}
        >
          <span style={sectionHeading}>Needs Attention</span>
        </div>

        {customers.map(({ id, days, value, priority }, i) => (
          <div
            key={id}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto auto auto',
              gap: '20px',
              alignItems: 'center',
              padding: '13px 28px',
              borderBottom: i < customers.length - 1 ? '1px solid #F4F8FC' : 'none',
            }}
          >
            <span
              style={{
                fontSize: '0.8125rem',
                fontFamily: "'DM Sans', sans-serif",
                color: '#003D80',
                fontWeight: 500,
              }}
            >
              {id}
            </span>
            <span
              style={{
                fontSize: '0.6875rem',
                fontFamily: "'DM Sans', sans-serif",
                color: '#5A8CC0',
                whiteSpace: 'nowrap',
              }}
            >
              {days} days overdue
            </span>
            <span
              style={{
                fontSize: '0.6875rem',
                fontFamily: "'DM Sans', sans-serif",
                color: '#1A5296',
                whiteSpace: 'nowrap',
              }}
            >
              {value} expected
            </span>
            <span
              style={{
                fontSize: '0.5625rem',
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: priority === 'HIGH' ? '#003D80' : '#5A8CC0',
                fontWeight: priority === 'HIGH' ? 600 : 400,
                whiteSpace: 'nowrap',
              }}
            >
              {priority}
            </span>
          </div>
        ))}
      </div>

      {/* Today's Signal */}
      <div
        style={{
          padding: '18px 28px',
          borderBottom: '1px solid #EAF2FA',
          borderLeft: '3px solid #1A5296',
          backgroundColor: '#F7FBFE',
        }}
      >
        <div style={{ ...sectionHeading, color: '#1A5296', marginBottom: '10px' }}>
          Today's Signal
        </div>
        <p
          style={{
            fontSize: '1rem',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            color: '#003D80',
            lineHeight: 1.5,
            margin: '0 0 5px',
          }}
        >
          5 priority customers need outreach.
        </p>
        <p
          style={{
            fontSize: '0.75rem',
            fontFamily: "'DM Sans', sans-serif",
            color: '#5A8CC0',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          $310 in near-term revenue opportunity.
        </p>
      </div>

      {/* Revenue trend */}
      <div style={{ padding: '18px 28px', borderBottom: '1px solid #EAF2FA' }}>
        <div style={{ ...cellLabel, color: '#5A8CC0', marginBottom: '10px' }}>
          Revenue Trend
        </div>
        <TrendMini />
      </div>

      {/* Disclosure */}
      <div
        style={{
          padding: '10px 28px',
          backgroundColor: '#FAFCFE',
          borderTop: '1px solid #F0F6FC',
        }}
      >
        <span
          style={{
            fontSize: '0.5rem',
            fontFamily: "'DM Sans', sans-serif",
            color: '#AECCEF',
            fontStyle: 'italic',
            letterSpacing: '0.03em',
          }}
        >
          Illustrative recovery tracking
        </span>
      </div>
    </div>
  );
}

// ── Section ─────────────────────────────────────────────────────────────────
const editorialPoints = [
  { verb: 'See', body: 'What is happening.' },
  { verb: 'Prioritize', body: 'What needs attention.' },
  { verb: 'Act', body: 'Before the opportunity disappears.' },
];

export function BusinessPulseSection() {
  const navigate = useNavigate();

  return (
    <section
      id="business-pulse"
      style={{
        backgroundColor: '#EFF4FB',
        padding: '160px 32px 180px',
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Full-width intro ── */}
        <div style={{ marginBottom: '60px' }}>

          {/* Label */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '56px',
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
              The Business Pulse
            </span>
          </div>

          {/* Headline + copy side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                  color: '#003D80',
                  lineHeight: 1.1,
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.01em',
                  margin: '0 0 4px',
                }}
              >
                The owner doesn't need
              </h2>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                  color: '#1A5296',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  margin: '0 0 4px',
                }}
              >
                more data.
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                  color: '#003D80',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  margin: '0 0 4px',
                }}
              >
                They need to know
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.875rem, 5.75vw, 5rem)',
                  color: '#003D80',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: '-0.015em',
                  margin: 0,
                }}
              >
                what needs attention.
              </p>
            </div>

            <div>
              <p
                style={{
                  fontSize: '1.0625rem',
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#003D80',
                  lineHeight: 1.8,
                  margin: 0,
                  maxWidth: '440px',
                }}
              >
                The Business Pulse turns the system underneath the business into one clear view of what is happening, what needs attention, and what to do next.
              </p>
            </div>
          </div>
        </div>

        {/* ── Two-column: editorial statements + mockup ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_7fr] gap-10 lg:gap-12 items-start">

          {/* LEFT: SEE / PRIORITIZE / ACT + key statement + CTA */}
          <div>
            {editorialPoints.map(({ verb, body }, i) => (
              <div
                key={verb}
                style={{
                  paddingTop: i === 0 ? 0 : '18px',
                  paddingBottom: '18px',
                  borderBottom: i < editorialPoints.length - 1 ? '1px solid #D4E5F5' : 'none',
                }}
              >
                <div
                  style={{
                    fontSize: '0.6rem',
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#1A5296',
                    fontWeight: 600,
                    marginBottom: '5px',
                  }}
                >
                  {verb}
                </div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1rem, 1.625vw, 1.25rem)',
                    fontStyle: 'italic',
                    color: '#5A8CC0',
                    fontWeight: 300,
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}

            {/* Key statement */}
            <div style={{ marginTop: '44px', marginBottom: '0' }}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.25rem, 2.25vw, 1.75rem)',
                  color: '#5A8CC0',
                  fontWeight: 300,
                  lineHeight: 1.2,
                  margin: '0 0 6px',
                }}
              >
                Not another dashboard.
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.75rem, 3.25vw, 3rem)',
                  color: '#003D80',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.12,
                  letterSpacing: '-0.01em',
                  margin: 0,
                }}
              >
                A clearer way to run the business.
              </p>
            </div>

            {/* CTA + disclosure */}
            <div style={{ marginTop: '48px' }}>
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
                See the Full Case Study →
              </button>
              <p
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#5A8CC0',
                  fontStyle: 'italic',
                  letterSpacing: '0.02em',
                  margin: '12px 0 0',
                }}
              >
                Concept case study using simulated business data.
              </p>
            </div>
          </div>

          {/* RIGHT: Business Pulse mockup */}
          <BusinessPulseMockup />

        </div>
      </div>
    </section>
  );
}
