const statements = [
  {
    text: "Customers aren't coming back like they used to.",
    fontSize: 'clamp(1.5rem, 2.75vw, 2.25rem)',
  },
  {
    text: "Revenue feels more unpredictable than it should.",
    fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
  },
  {
    text: "We're busy. I just don't know what's actually working.",
    fontSize: 'clamp(1.25rem, 2.25vw, 1.875rem)',
  },
  {
    text: 'Everything lives in different places.',
    fontSize: 'clamp(1.625rem, 3.125vw, 2.625rem)',
  },
  {
    text: 'I keep doing the same things manually.',
    fontSize: 'clamp(1.375rem, 2.5vw, 2.125rem)',
  },
];

function BridgeCurve() {
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
        cx="1450"
        cy="460"
        r="860"
        fill="none"
        stroke="rgba(255, 255, 255, 0.05)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function YouDontNeedSection() {
  return (
    <section
      id="you-dont-need"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#003D80',
        padding: '128px 32px 144px',
      }}
    >
      <BridgeCurve />

      <div
        className="max-w-7xl mx-auto"
        style={{ position: 'relative', zIndex: 1 }}
      >

        {/* ── Two-column: headline left, recognition right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-20 items-start">

          {/* LEFT: eyebrow + headline + supporting */}
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
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: '0.65rem',
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#AECCEF',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                You Don't Need the Answer
              </span>
            </div>

            {/* Main headline */}
            <div style={{ marginBottom: '32px' }}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 4.75vw, 4.25rem)',
                  color: '#F4F9FF',
                  lineHeight: 1.08,
                  fontWeight: 400,
                  fontStyle: 'normal',
                  letterSpacing: '-0.02em',
                  margin: '0 0 2px',
                }}
              >
                You don't even need
              </h2>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 4.75vw, 4.25rem)',
                  color: '#F4F9FF',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                to know the problem.
              </p>
            </div>

            {/* Supporting — restrained */}
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.125rem, 1.875vw, 1.5rem)',
                fontStyle: 'italic',
                color: '#6FA3D0',
                fontWeight: 300,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              "Something feels off" is enough.
            </p>
          </div>

          {/* RIGHT: recognition statements */}
          <div>
            {statements.map((s, i) => (
              <div
                key={i}
                style={{
                  paddingTop: i === 0 ? 0 : '28px',
                  paddingBottom: '28px',
                  borderTop: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: s.fontSize,
                    color: '#EAF2FB',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    lineHeight: 1.3,
                    margin: 0,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ── Closing ── */}
        <div style={{ marginTop: '96px' }}>

          {/* Thin rule */}
          <div
            style={{
              height: '1px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              marginBottom: '52px',
            }}
          />

          {/* Label */}
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
                backgroundColor: 'rgba(255,255,255,0.2)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: '0.65rem',
                fontFamily: "'DM Sans', sans-serif",
                color: '#AECCEF',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              That's Enough to Start.
            </span>
          </div>

          {/* Closing headline */}
          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.25rem, 4.5vw, 4rem)',
                color: '#F4F9FF',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: '0 0 2px',
              }}
            >
              Flow starts with the question
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.25rem, 4.5vw, 4rem)',
                color: '#AECCEF',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              behind the question.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
