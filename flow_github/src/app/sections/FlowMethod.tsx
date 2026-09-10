const stages = [
  { n: '01', name: 'See', desc: 'Find the signal.' },
  { n: '02', name: 'Understand', desc: "Find what's driving it." },
  { n: '03', name: 'Act', desc: 'Build the simplest system around it.' },
  { n: '04', name: 'Measure', desc: 'See whether it worked.' },
];

const equationWords = ['Signal', 'Diagnosis', 'System', 'Impact'];

function MethodCurve() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1400 100"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100px',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <path
        d="M -20 70 C 280 10, 560 88, 900 52 S 1200 28, 1420 58"
        fill="none"
        stroke="#AECCEF"
        strokeWidth="1"
        opacity="0.42"
      />
    </svg>
  );
}

export function FlowMethodSection() {
  return (
    <section
      id="method"
      style={{
        backgroundColor: '#E3EEF8',
        padding: '160px 32px 180px',
      }}
    >
      <div className="max-w-7xl mx-auto">

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
            The Flow Method
          </span>
        </div>

        {/* Staggered headline — cascades in size and indent */}
        <div style={{ marginBottom: '16px' }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              color: '#003D80',
              lineHeight: 1.1,
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '-0.01em',
              margin: '0 0 6px',
            }}
          >
            See what's happening.
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.625rem, 3.5vw, 2.75rem)',
              color: '#1A5296',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.15,
              margin: '0 0 6px',
              paddingLeft: 'clamp(12px, 2.5vw, 40px)',
            }}
          >
            Understand why.
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.125rem, 2.25vw, 1.875rem)',
              color: '#5A8CC0',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.2,
              margin: 0,
              paddingLeft: 'clamp(24px, 5vw, 80px)',
            }}
          >
            Do something about it.
          </p>
        </div>

        {/* Supporting line */}
        <p
          style={{
            fontSize: '0.875rem',
            fontFamily: "'DM Sans', sans-serif",
            color: '#5A8CC0',
            letterSpacing: '0.03em',
            margin: '28px 0 0',
            fontStyle: 'italic',
          }}
        >
          Insight should lead somewhere.
        </p>

        {/* Four stages */}
        <div
          style={{
            position: 'relative',
            marginTop: '80px',
            borderTop: '1px solid #D4E5F5',
          }}
        >
          <MethodCurve />

          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-0"
            style={{ position: 'relative', zIndex: 1 }}
          >
            {stages.map((stage, i) => (
              <div
                key={stage.n}
                style={{
                  paddingTop: '32px',
                  paddingBottom: '56px',
                  paddingLeft: i === 0 ? 0 : '28px',
                  paddingRight: i === 3 ? 0 : '28px',
                  borderRight: i < 3 ? '1px solid #D4E5F5' : 'none',
                }}
              >
                {/* Ghost number — large typographic element */}
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(5rem, 8vw, 7.5rem)',
                    color: 'rgba(0, 61, 128, 0.07)',
                    fontWeight: 300,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    userSelect: 'none',
                  }}
                >
                  {stage.n}
                </div>

                {/* Stage name */}
                <div
                  style={{
                    fontSize: '0.9rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#003D80',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    marginBottom: '14px',
                  }}
                >
                  {stage.name}
                </div>

                {/* Short description */}
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.125rem',
                    fontStyle: 'italic',
                    color: '#1A5296',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual equation — aligned to stage columns */}
        <div
          style={{
            marginTop: '0',
            paddingTop: '20px',
            borderTop: '1px solid #D4E5F5',
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {equationWords.map((word, i) => (
              <div
                key={word}
                style={{
                  paddingLeft: i === 0 ? 0 : '28px',
                  paddingRight: i === 3 ? 0 : '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#1A5296',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {word}
                </span>
                {i < equationWords.length - 1 && (
                  <span
                    style={{
                      color: '#5A8CC0',
                      fontSize: '0.75rem',
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div style={{ marginTop: '152px' }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1rem, 1.75vw, 1.25rem)',
              fontStyle: 'italic',
              color: '#5A8CC0',
              fontWeight: 300,
              lineHeight: 1.4,
              margin: '0 0 8px',
            }}
          >
            We don't start with the tool.
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.625rem, 3.25vw, 2.5rem)',
              color: '#003D80',
              fontWeight: 400,
              fontStyle: 'normal',
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: '-0.01em',
            }}
          >
            We start with the problem.
          </p>
        </div>

      </div>
    </section>
  );
}
