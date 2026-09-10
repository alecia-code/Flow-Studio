import { useNavigate } from 'react-router';

const maybeLines = [
  "Maybe customers aren't coming back.",
  "Maybe the numbers don't make sense.",
  'Maybe too much still depends on you.',
];

function ClosingCurve() {
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
        cx="1500"
        cy="-100"
        r="1400"
        fill="rgba(174, 204, 239, 0.05)"
        stroke="#AECCEF"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}

export function ClosingSection() {
  const navigate = useNavigate();

  const goToFieldNote = () => {
    navigate('/field-note');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="closing"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#E3EEF8',
        padding: '160px 32px 0',
      }}
    >
      <ClosingCurve />

      <div
        className="max-w-7xl mx-auto"
        style={{ position: 'relative', zIndex: 1 }}
      >

        {/* Opening — headline */}
        <div style={{ marginBottom: '96px' }}>

          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '52px',
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
              Start With What You Know
            </span>
          </div>

          {/* Primary headline */}
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3.75rem, 9vw, 7.5rem)',
                color: '#003D80',
                lineHeight: 1.06,
                fontWeight: 400,
                fontStyle: 'normal',
                letterSpacing: '-0.025em',
                margin: '0 0 4px',
              }}
            >
              You don't need to know
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3.75rem, 9vw, 7.5rem)',
                color: '#003D80',
                lineHeight: 1.06,
                fontWeight: 400,
                fontStyle: 'normal',
                letterSpacing: '-0.025em',
                margin: '0 0 16px',
              }}
            >
              what needs to be built.
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                color: '#5A8CC0',
                fontStyle: 'italic',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: '0 0 2px',
              }}
            >
              You just need to know
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                color: '#5A8CC0',
                fontStyle: 'italic',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              something feels off.
            </p>
          </div>

        </div>

        {/* Secondary thought */}
        <div style={{ marginBottom: '104px' }}>

          {/* Three maybe lines */}
          <div style={{ marginBottom: '72px' }}>
            {maybeLines.map((line, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.3125rem, 2.5vw, 2rem)',
                  fontStyle: 'italic',
                  color: '#1A5296',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  margin: '0 0 4px',
                }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* "Bring me that." */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(3.25rem, 6.5vw, 5.5rem)',
              color: '#003D80',
              fontWeight: 400,
              fontStyle: 'normal',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Bring me that.
          </p>

        </div>

        {/* Final CTA composition */}
        <div style={{ marginBottom: '128px' }}>

          <div
            style={{
              height: '1px',
              backgroundColor: '#D4E5F5',
              marginBottom: '72px',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-center">

            {/* LEFT: invitation */}
            <div>
              <p
                style={{
                  fontSize: '0.65rem',
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#1A5296',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  margin: '0 0 18px',
                }}
              >
                One Messy Problem.
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.75rem, 5.5vw, 4.75rem)',
                  color: '#003D80',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  margin: '0 0 2px',
                }}
              >
                One clear
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.75rem, 5.5vw, 4.75rem)',
                  color: '#003D80',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                place to start.
              </p>
            </div>

            {/* RIGHT: CTA block */}
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
                  padding: '20px 60px',
                  fontSize: '0.9375rem',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontWeight: 500,
                  marginBottom: '22px',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1A5296'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#003D80'; }}
              >
                Request a Field Note →
              </button>

              <p
                style={{
                  fontSize: '0.8125rem',
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#1A5296',
                  fontStyle: 'italic',
                  lineHeight: 1.65,
                  margin: '0 0 12px',
                }}
              >
                No polished brief required.<br />
                Start with the thing that's been on your mind.
              </p>

              <p
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#5A8CC0',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Flow will take it from there.
              </p>
            </div>

          </div>
        </div>

        {/* Brand sign-off */}
        <div style={{ paddingBottom: '96px' }}>

          <div
            style={{
              height: '1px',
              backgroundColor: '#D4E5F5',
              marginBottom: '68px',
            }}
          />

          {/* FLOW STUDIO label */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '24px',
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
              Flow Studio
            </span>
          </div>

          {/* Three-line editorial closing */}
          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.625rem, 3vw, 2.625rem)',
                color: '#003D80',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
                margin: '0 0 2px',
              }}
            >
              See what's happening.
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.625rem, 3vw, 2.625rem)',
                color: '#1A5296',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
                margin: '0 0 2px',
              }}
            >
              Understand why.
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.625rem, 3vw, 2.625rem)',
                color: '#003D80',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
                margin: 0,
              }}
            >
              Do something about it.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
