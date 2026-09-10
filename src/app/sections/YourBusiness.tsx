import { useNavigate } from 'react-router';

const observations = [
  {
    n: '01',
    label: 'Something Feels Off',
    body: "Revenue, customers, or operations aren't behaving the way you expected.",
  },
  {
    n: '02',
    label: 'The Answer Exists',
    body: 'The signal may already be hiding in the information your business creates every day.',
  },
  {
    n: '03',
    label: 'Flow Looks Underneath',
    body: "Bring the question. We'll find what's actually driving it.",
  },
];

function InvitationCurve() {
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
        cx="-140"
        cy="640"
        r="720"
        fill="rgba(174, 204, 239, 0.07)"
        stroke="#AECCEF"
        strokeWidth="1"
        opacity="0.38"
      />
    </svg>
  );
}

export function YourBusinessSection() {
  const navigate = useNavigate();

  const goToFieldNote = () => {
    navigate('/field-note');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="your-business"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#E3EEF8',
        padding: '160px 32px 180px',
      }}
    >
      <InvitationCurve />

      <div
        className="max-w-7xl mx-auto"
        style={{ position: 'relative', zIndex: 1 }}
      >

        {/* ── Asymmetric two-column composition ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-16 lg:gap-24 items-start">

          {/* LEFT: headline + supporting thought */}
          <div>
            {/* Eyebrow */}
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
                Your Business, Next
              </span>
            </div>

            {/* Main headline — increased ~25% */}
            <div style={{ marginBottom: '32px' }}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(3.75rem, 8vw, 6.75rem)',
                  color: '#003D80',
                  lineHeight: 1.05,
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.025em',
                  margin: '0 0 2px',
                }}
              >
                Your business has
              </h2>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(3.75rem, 8vw, 6.75rem)',
                  color: '#003D80',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: '-0.025em',
                  margin: 0,
                }}
              >
                a pattern, too.
              </p>
            </div>

            {/* Supporting thought — restrained */}
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.125rem, 1.875vw, 1.5rem)',
                fontStyle: 'italic',
                color: '#7AADD8',
                fontWeight: 300,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              You may just be too close to see it.
            </p>
          </div>

          {/* RIGHT: three observations */}
          <div>
            {observations.map((obs, i) => (
              <div
                key={obs.n}
                style={{
                  paddingTop: i === 0 ? 0 : '40px',
                  paddingBottom: '40px',
                  borderTop: i === 0 ? '1px solid #D4E5F5' : 'none',
                  borderBottom: '1px solid #D4E5F5',
                }}
              >
                {/* Number + rule + label */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '9px',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontFamily: "'DM Sans', sans-serif",
                      color: '#AECCEF',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {obs.n}
                  </span>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '14px',
                      height: '1px',
                      backgroundColor: '#D4E5F5',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#003D80',
                      fontWeight: 600,
                    }}
                  >
                    {obs.label}
                  </span>
                </div>

                {/* Body */}
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.1875rem, 1.875vw, 1.4375rem)',
                    fontStyle: 'italic',
                    color: '#1A5296',
                    fontWeight: 300,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {obs.body}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ── Bottom conversion moment ── */}
        <div style={{ marginTop: '128px' }}>

          {/* Wide horizontal rule */}
          <div
            style={{
              height: '1px',
              backgroundColor: '#D4E5F5',
              marginBottom: '68px',
            }}
          />

          {/* Single unified block: label → headline → CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

            {/* Left: label + invitation */}
            <div>
              <p
                style={{
                  fontSize: '0.65rem',
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#1A5296',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  margin: '0 0 20px',
                }}
              >
                The First Step
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.75rem, 5.5vw, 4.75rem)',
                  color: '#003D80',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: 1.08,
                  letterSpacing: '-0.015em',
                  margin: 0,
                }}
              >
                Bring me one messy problem.
              </p>
            </div>

            {/* Right: CTA + disclosure — vertically centered with headline */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
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
                  marginBottom: '20px',
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
                  color: '#7AADD8',
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  margin: 0,
                  maxWidth: '260px',
                }}
              >
                No polished brief required. Start with the thing that's been on your mind.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
