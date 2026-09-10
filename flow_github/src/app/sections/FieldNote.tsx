import { useNavigate } from 'react-router';

const steps = [
  {
    n: '01',
    label: 'You Share the Question',
    body: "Tell Flow what's been taking up mental space.",
  },
  {
    n: '02',
    label: 'Flow Looks Underneath',
    body: 'We review the information, behavior, and systems surrounding it.',
  },
  {
    n: '03',
    label: 'You Get Clarity',
    body: 'A focused Field Note shows what stands out and where to start.',
  },
];

const drivers = [
  { pct: 69, label: 'Booking frequency' },
  { pct: 17, label: 'Customer count' },
  { pct: 14, label: 'Appointment value' },
];

function FieldNoteCurve() {
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
        cx="1380"
        cy="960"
        r="780"
        fill="rgba(174, 204, 239, 0.06)"
        stroke="#AECCEF"
        strokeWidth="1"
        opacity="0.32"
      />
    </svg>
  );
}

function FieldNoteMockup() {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #D4E5F5',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 6px 32px rgba(0, 48, 128, 0.07)',
      }}
    >
      {/* Document header band */}
      <div
        style={{
          backgroundColor: '#003D80',
          padding: '18px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontSize: '0.6rem',
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            fontWeight: 600,
          }}
        >
          Flow Field Note
        </span>
        <span
          style={{
            fontSize: '0.55rem',
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#AECCEF',
          }}
        >
          Customer Retention / 01
        </span>
      </div>

      {/* Document body */}
      <div style={{ padding: '40px 44px' }}>

        {/* Main finding */}
        <div style={{ marginBottom: '28px' }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.875rem',
              color: '#003D80',
              fontWeight: 400,
              fontStyle: 'normal',
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
              margin: '0 0 3px',
            }}
          >
            Customers aren't disappearing.
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.875rem',
              color: '#1A5296',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
              margin: 0,
            }}
          >
            They're coming less often.
          </p>
        </div>

        {/* Rule */}
        <div style={{ height: '1px', backgroundColor: '#E8F2FB', marginBottom: '28px' }} />

        {/* Large metric */}
        <div style={{ marginBottom: '28px' }}>
          <div
            style={{
              fontSize: '4rem',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 200,
              color: '#003D80',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              marginBottom: '8px',
            }}
          >
            69%
          </div>
          <div
            style={{
              fontSize: '0.55rem',
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#5A8CC0',
              marginBottom: '7px',
            }}
          >
            Of the Revenue Decline
          </div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.0625rem',
              fontStyle: 'italic',
              color: '#1A5296',
              fontWeight: 300,
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            was tied to reduced booking frequency.
          </p>
        </div>

        {/* Rule */}
        <div style={{ height: '1px', backgroundColor: '#E8F2FB', marginBottom: '24px' }} />

        {/* Three drivers */}
        <div style={{ marginBottom: '28px' }}>
          <div
            style={{
              fontSize: '0.55rem',
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#AECCEF',
              marginBottom: '18px',
            }}
          >
            Three Drivers
          </div>
          {drivers.map((d, i) => (
            <div
              key={d.label}
              style={{ marginBottom: i < drivers.length - 1 ? '12px' : 0 }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '36px 1fr auto',
                  gap: '0 10px',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#003D80',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {d.pct}%
                </span>
                {/* Bar track */}
                <div
                  style={{
                    height: '2px',
                    backgroundColor: '#E8F2FB',
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${d.pct}%`,
                      height: '100%',
                      backgroundColor: d.pct >= 60 ? '#003D80' : '#AECCEF',
                      borderRadius: '2px',
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: '0.575rem',
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#5A8CC0',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {d.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Rule */}
        <div style={{ height: '1px', backgroundColor: '#E8F2FB', marginBottom: '24px' }} />

        {/* Flow Recommends */}
        <div style={{ marginBottom: '28px' }}>
          <div
            style={{
              fontSize: '0.55rem',
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#003D80',
              fontWeight: 700,
              marginBottom: '12px',
            }}
          >
            Flow Recommends
          </div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.125rem',
              color: '#1A5296',
              fontWeight: 300,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Restore booking frequency among existing customers before increasing acquisition spend.
          </p>
        </div>

        {/* Disclosure */}
        <div style={{ borderTop: '1px solid #E8F2FB', paddingTop: '16px' }}>
          <p
            style={{
              fontSize: '0.55rem',
              fontFamily: "'DM Sans', sans-serif",
              color: '#C2D8EE',
              fontStyle: 'italic',
              margin: 0,
              letterSpacing: '0.04em',
            }}
          >
            Concept example using simulated business data.
          </p>
        </div>

      </div>
    </div>
  );
}

export function FieldNoteSection() {
  const navigate = useNavigate();

  const goToFieldNote = () => {
    navigate('/field-note');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="field-note"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#E3EEF8',
        padding: '160px 32px 180px',
      }}
    >
      <FieldNoteCurve />

      <div
        className="max-w-7xl mx-auto"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-20 items-start">

          {/* ── LEFT COLUMN ── */}
          <div>

            {/* Eyebrow */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '44px',
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
                The Field Note
              </span>
            </div>

            {/* Headline */}
            <div style={{ marginBottom: '28px' }}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 4.75vw, 4.25rem)',
                  color: '#003D80',
                  lineHeight: 1.08,
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.02em',
                  margin: '0 0 2px',
                }}
              >
                One messy problem.
              </h2>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 4.75vw, 4.25rem)',
                  color: '#003D80',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                One clear place to start.
              </p>
            </div>

            {/* Supporting copy */}
            <p
              style={{
                fontSize: '1.0625rem',
                fontFamily: "'DM Sans', sans-serif",
                color: '#1A5296',
                lineHeight: 1.75,
                margin: '0 0 64px',
                maxWidth: '380px',
              }}
            >
              A focused review of what's happening, what may be driving it, and where I'd look next.
            </p>

            {/* Three-step process */}
            <div style={{ marginBottom: '64px' }}>
              {steps.map((step, i) => (
                <div
                  key={step.n}
                  style={{
                    borderTop: '1px solid #D4E5F5',
                    borderBottom: i === steps.length - 1 ? '1px solid #D4E5F5' : 'none',
                    padding: '20px 0',
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '28px 1fr',
                      gap: '0 14px',
                      alignItems: 'start',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.6rem',
                        fontFamily: "'DM Sans', sans-serif",
                        color: '#AECCEF',
                        letterSpacing: '0.06em',
                        paddingTop: '1px',
                      }}
                    >
                      {step.n}
                    </span>
                    <div>
                      <div
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: "'DM Sans', sans-serif",
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#003D80',
                          fontWeight: 600,
                          marginBottom: '6px',
                        }}
                      >
                        {step.label}
                      </div>
                      <p
                        style={{
                          fontSize: '0.9375rem',
                          fontFamily: "'DM Sans', sans-serif",
                          color: '#1A5296',
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Value statement */}
            <div style={{ marginBottom: '56px' }}>
              <p
                style={{
                  fontSize: '0.65rem',
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#003D80',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  margin: '0 0 14px',
                }}
              >
                Not a Data Dump.
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.375rem, 2.5vw, 2rem)',
                  color: '#003D80',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                  margin: '0 0 2px',
                }}
              >
                The thing you need to know,
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.375rem, 2.5vw, 2rem)',
                  color: '#003D80',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                  margin: 0,
                }}
              >
                without everything you don't.
              </p>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={goToFieldNote}
                style={{
                  backgroundColor: '#003D80',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '100px',
                  padding: '18px 48px',
                  fontSize: '0.875rem',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontWeight: 500,
                  display: 'block',
                  marginBottom: '16px',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1A5296'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#003D80'; }}
              >
                Request a Field Note →
              </button>
              <p
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#5A8CC0',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Start with the question that's been on your mind.
              </p>
            </div>

          </div>

          {/* ── RIGHT COLUMN: mockup ── */}
          <FieldNoteMockup />

        </div>
      </div>
    </section>
  );
}
