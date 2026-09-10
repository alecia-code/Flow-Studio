function AhaCurve() {
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
        cx="-60"
        cy="960"
        r="880"
        fill="rgba(255, 255, 255, 0.025)"
        stroke="rgba(255, 255, 255, 0.065)"
        strokeWidth="1"
      />
    </svg>
  );
}

export function AhaMomentSection() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#003D80',
        padding: '128px 32px 140px',
      }}
    >
      <AhaCurve />

      <div
        className="max-w-7xl mx-auto"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-10 items-start">

          {/* ── LEFT: narrative + evidence ── */}
          <div>

            {/* Label */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '36px',
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
                  color: '#8BBCE0',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                The Real Problem
              </span>
            </div>

            {/* Narrative headline */}
            <div style={{ marginBottom: '72px' }}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.875rem, 3.25vw, 2.875rem)',
                  color: '#F4F9FF',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                  margin: '0 0 2px',
                }}
              >
                The business didn't need
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.875rem, 3.25vw, 2.875rem)',
                  color: '#AECCEF',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                  margin: 0,
                }}
              >
                more customers first.
              </p>
            </div>

            {/* Comparison evidence */}
            <div style={{ marginBottom: '72px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>

                {/* Customers */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 'clamp(1.75rem, 2.75vw, 2.5rem)',
                      fontWeight: 300,
                      color: '#F4F9FF',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                      marginBottom: '12px',
                    }}
                  >
                    50{' '}
                    <span style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.8em' }}>→</span>
                    {' '}48
                  </div>
                  <div
                    style={{
                      fontSize: '0.6rem',
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#8BBCE0',
                      marginBottom: '6px',
                    }}
                  >
                    Customers
                  </div>
                  <div
                    style={{
                      fontSize: '0.8125rem',
                      fontFamily: "'DM Sans', sans-serif",
                      color: '#6FA3D0',
                      fontStyle: 'italic',
                    }}
                  >
                    Only a 4% decline
                  </div>
                </div>

                {/* Vertical divider */}
                <div
                  style={{
                    width: '1px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    alignSelf: 'stretch',
                    margin: '0 24px',
                    flexShrink: 0,
                  }}
                />

                {/* Visits */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 'clamp(1.75rem, 2.75vw, 2.5rem)',
                      fontWeight: 300,
                      color: '#F4F9FF',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                      marginBottom: '12px',
                    }}
                  >
                    1.72{' '}
                    <span style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.8em' }}>→</span>
                    {' '}1.46
                  </div>
                  <div
                    style={{
                      fontSize: '0.6rem',
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#8BBCE0',
                      marginBottom: '6px',
                    }}
                  >
                    Visits / Customer
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      fontFamily: "'DM Sans', sans-serif",
                      color: '#8BBCE0',
                      fontStyle: 'italic',
                      fontWeight: 500,
                    }}
                  >
                    A 15% decline
                  </div>
                </div>

              </div>
            </div>

            {/* Flow interpretation */}
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1rem, 1.75vw, 1.3125rem)',
                  color: '#6FA3D0',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  margin: '0 0 8px',
                }}
              >
                More customers weren't the first opportunity.
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                  color: '#C8DFF0',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  margin: 0,
                  letterSpacing: '-0.005em',
                }}
              >
                More visits from existing customers were.
              </p>
            </div>

          </div>

          {/* ── RIGHT: dominant reveal + 69% ── */}
          <div>

            {/* IT NEEDED prelude */}
            <div
              style={{
                fontSize: '0.8rem',
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#6FA3D0',
                marginBottom: '10px',
              }}
            >
              It needed
            </div>

            {/* MORE VISITS. — dominant visual statement */}
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(4.5rem, 10.5vw, 9rem)',
                fontWeight: 400,
                color: '#FFFFFF',
                lineHeight: 0.92,
                letterSpacing: '-0.025em',
                marginBottom: '64px',
              }}
            >
              More<br />Visits.
            </div>

            {/* Thin rule */}
            <div
              style={{
                height: '1px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                marginBottom: '28px',
              }}
            />

            {/* 69% finding — unified block */}
            <div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 'clamp(3.75rem, 7vw, 6.25rem)',
                  fontWeight: 200,
                  color: '#C8DFF0',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '10px',
                }}
              >
                69%
              </div>
              <div
                style={{
                  fontSize: '0.62rem',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8BBCE0',
                  marginBottom: '8px',
                }}
              >
                Of the Revenue Decline
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.125rem',
                  fontStyle: 'italic',
                  color: '#8BBCE0',
                  lineHeight: 1.6,
                  margin: 0,
                  maxWidth: '320px',
                }}
              >
                was tied to reduced booking frequency.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
