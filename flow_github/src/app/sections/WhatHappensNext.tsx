const stages = [
  {
    n: '01',
    label: 'Field Note',
    statement: 'See the problem clearly.',
    body: "Find the signal, understand what's driving it, and identify the opportunity.",
    word: 'Insight',
  },
  {
    n: '02',
    label: 'System',
    statement: 'Build around what we learned.',
    body: 'Simplify the workflow, automate the repeatable parts, or create a better way to act on the information.',
    word: 'Action',
  },
  {
    n: '03',
    label: 'Business Pulse',
    statement: "Know whether it's working.",
    body: 'Keep the few signals that matter visible so the business knows what needs attention next.',
    word: 'Intelligence',
  },
];

const editorialLines = [
  { text: 'Sometimes that means automation.', final: false },
  { text: 'Sometimes a dashboard.', final: false },
  { text: 'Sometimes a better workflow.', final: false },
  { text: 'Sometimes the answer is simpler than any of those.', final: true },
];

function ExpansionCurve() {
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
        cx="-100"
        cy="820"
        r="880"
        fill="rgba(255, 255, 255, 0.02)"
        stroke="rgba(255, 255, 255, 0.05)"
        strokeWidth="1"
      />
    </svg>
  );
}

export function WhatHappensNextSection() {
  return (
    <section
      id="what-happens-next"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#003D80',
        padding: '140px 32px 160px',
      }}
    >
      <ExpansionCurve />

      <div
        className="max-w-7xl mx-auto"
        style={{ position: 'relative', zIndex: 1 }}
      >

        {/* ── Section introduction ── */}
        <div style={{ marginBottom: '128px' }}>

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
              What Happens Next
            </span>
          </div>

          {/* Headline — ~15% larger */}
          <div style={{ marginBottom: '36px' }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3.125rem, 6.25vw, 5.5rem)',
                color: '#F4F9FF',
                lineHeight: 1.07,
                fontWeight: 400,
                fontStyle: 'normal',
                letterSpacing: '-0.022em',
                margin: '0 0 3px',
              }}
            >
              Sometimes clarity is enough.
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3.125rem, 6.25vw, 5.5rem)',
                color: '#C2D8EE',
                fontStyle: 'italic',
                fontWeight: 300,
                lineHeight: 1.07,
                letterSpacing: '-0.022em',
                margin: '0 0 2px',
              }}
            >
              Sometimes it reveals
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3.125rem, 6.25vw, 5.5rem)',
                color: '#C2D8EE',
                fontStyle: 'italic',
                fontWeight: 300,
                lineHeight: 1.07,
                letterSpacing: '-0.022em',
                margin: 0,
              }}
            >
              what should be built next.
            </p>
          </div>

          {/* Supporting copy — larger and brighter */}
          <p
            style={{
              fontSize: '1.125rem',
              fontFamily: "'DM Sans', sans-serif",
              color: '#8BBCE0',
              lineHeight: 1.75,
              margin: 0,
              maxWidth: '580px',
            }}
          >
            Flow can turn what we learn into a simpler system for how the business operates, responds, or makes decisions.
          </p>

        </div>

        {/* ── Three-stage progression ── */}
        <div style={{ position: 'relative', marginBottom: '88px' }}>

          {/* Connecting S-curve — threads through the oversized-number level */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1400 100"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              top: '8px',
              left: 0,
              width: '100%',
              height: '100px',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <path
              d="M 0 50 C 220 15, 480 85, 700 50 C 920 15, 1180 85, 1400 50"
              fill="none"
              stroke="rgba(174, 204, 239, 0.28)"
              strokeWidth="1"
            />
          </svg>

          {/* Three columns */}
          <div
            className="grid grid-cols-1 lg:grid-cols-3"
            style={{ position: 'relative', zIndex: 1 }}
          >
            {stages.map((stage, i) => (
              <div
                key={stage.n}
                style={{
                  padding: i === 0
                    ? '0 56px 0 0'
                    : i === 1
                    ? '0 56px 0 56px'
                    : '0 0 0 56px',
                  borderRight: i < 2
                    ? '1px solid rgba(174, 204, 239, 0.15)'
                    : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                className={i > 0 ? 'mt-16 lg:mt-0' : ''}
              >
                {/* Oversized architectural number — whispers */}
                <div
                  style={{
                    fontSize: 'clamp(5rem, 9vw, 8rem)',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 200,
                    color: 'rgba(255, 255, 255, 0.07)',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    marginBottom: '20px',
                    userSelect: 'none',
                  }}
                >
                  {stage.n}
                </div>

                {/* Stage label */}
                <div
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#8BBCE0',
                    marginBottom: '16px',
                  }}
                >
                  {stage.label}
                </div>

                {/* Thin rule */}
                <div
                  style={{
                    height: '1px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    marginBottom: '24px',
                  }}
                />

                {/* Stage statement — ~17% larger, near-full opacity */}
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.75rem, 3.25vw, 2.875rem)',
                    color: '#F4F9FF',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: 1.18,
                    letterSpacing: '-0.015em',
                    margin: '0 0 18px',
                  }}
                >
                  {stage.statement}
                </p>

                {/* Supporting text — brighter and slightly larger */}
                <p
                  style={{
                    fontSize: '1rem',
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#8BBCE0',
                    lineHeight: 1.72,
                    margin: 0,
                    flexGrow: 1,
                  }}
                >
                  {stage.body}
                </p>

                {/* Bottom word: INSIGHT / ACTION / INTELLIGENCE */}
                <div
                  style={{
                    marginTop: '40px',
                    paddingTop: '18px',
                    borderTop: '1px solid rgba(174, 204, 239, 0.15)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.62rem',
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#C2D8EE',
                    }}
                  >
                    {stage.word}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* ── Key statement — asymmetric two-column ── */}
        <div>

          {/* Wide rule */}
          <div
            style={{
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              marginBottom: '64px',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-20 items-start">

            {/* LEFT: eyebrow + large serif headline */}
            <div>
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
                  The Goal Isn't More Software.
                </span>
              </div>

              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  color: '#F4F9FF',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  margin: '0 0 3px',
                }}
              >
                It's a business that
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  color: '#AECCEF',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                works more clearly.
              </p>
            </div>

            {/* RIGHT: four editorial lines */}
            <div style={{ paddingTop: '6px' }}>
              {editorialLines.map((item, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: item.final ? '1.0625rem' : '1rem',
                    fontFamily: "'DM Sans', sans-serif",
                    color: item.final ? '#C8DFF0' : '#8BBCE0',
                    fontStyle: item.final ? 'italic' : 'normal',
                    lineHeight: 1.6,
                    margin: i < editorialLines.length - 1 ? '0 0 18px' : 0,
                  }}
                >
                  {item.text}
                </p>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
