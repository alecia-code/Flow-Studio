const signals = [
  { n: '01', category: 'Customers', line1: "They're buying...", line2: "but are they coming back?" },
  { n: '02', category: 'Revenue', line1: "The number changed...", line2: "but what actually caused it?" },
  { n: '03', category: 'Follow-Up', line1: "Things get done...", line2: "when somebody remembers." },
  { n: '04', category: 'Reporting', line1: "The data exists...", line2: "in six different places." },
  { n: '05', category: 'Operations', line1: "You're busy...", line2: "but too much still depends on you." },
  { n: '06', category: 'Growth', line1: "You're ready to grow...", line2: "but the backend isn't." },
];

function ClosingCurve() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      style={{
        position: 'absolute',
        left: '-100px',
        bottom: '-60px',
        width: '520px',
        height: '520px',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <circle
        cx="60"
        cy="700"
        r="680"
        fill="none"
        stroke="#AECCEF"
        strokeWidth="1.25"
        opacity="0.38"
      />
      <circle
        cx="60"
        cy="700"
        r="500"
        fill="rgba(174, 204, 239, 0.07)"
        stroke="#AECCEF"
        strokeWidth="0.5"
        opacity="0.35"
      />
    </svg>
  );
}

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#E3EEF8',
        padding: '160px 32px 200px',
      }}
    >
      <ClosingCurve />

      <div
        className="max-w-7xl mx-auto"
        style={{ position: 'relative', zIndex: 1 }}
      >
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
            Sound Familiar?
          </span>
        </div>

        {/* Headline — two-line with editorial contrast */}
        <div style={{ marginBottom: '96px' }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(3rem, 6.5vw, 5rem)',
              color: '#003D80',
              lineHeight: 1.1,
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '-0.01em',
              margin: '0 0 16px',
            }}
          >
            Something feels off.
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              color: '#1A5296',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            You just can't see why yet.
          </p>
        </div>

        {/* Recognition grid — editorial, no heavy cards */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {signals.map((signal, i) => (
              <div
                key={signal.n}
                style={{
                  borderTop: '1px solid #D4E5F5',
                  borderRight: i % 3 < 2 ? '1px solid #D4E5F5' : 'none',
                  padding: '52px 36px',
                }}
              >
                {/* Number + rule + category label */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '9px',
                    marginBottom: '22px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.58rem',
                      color: '#AECCEF',
                      letterSpacing: '0.06em',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {signal.n}
                  </span>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '16px',
                      height: '1px',
                      backgroundColor: '#D4E5F5',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.62rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#1A5296',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {signal.category}
                  </span>
                </div>

                {/* Recognition statement */}
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.25rem, 1.8vw, 1.5625rem)',
                    color: '#003D80',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {signal.line1}
                  <br />
                  <span
                    style={{
                      fontStyle: 'italic',
                      color: '#1A5296',
                      fontWeight: 300,
                    }}
                  >
                    {signal.line2}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* Grid bottom rule */}
          <div style={{ height: '1px', backgroundColor: '#D4E5F5' }} />
        </div>

        {/* Closing statement — asymmetric offset into right two-thirds */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ marginTop: '144px' }}
        >
          <div className="hidden md:block" />
          <div className="md:col-span-2">
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                fontStyle: 'italic',
                color: '#003D80',
                fontWeight: 300,
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              That's where Flow starts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
