import { useNavigate } from 'react-router';

function FlowCurve() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <circle
        cx="1370"
        cy="-90"
        r="900"
        fill="none"
        stroke="#AECCEF"
        strokeWidth="1.5"
        opacity="0.45"
      />
      <circle
        cx="1370"
        cy="-90"
        r="660"
        fill="rgba(174, 204, 239, 0.08)"
        stroke="#AECCEF"
        strokeWidth="0.5"
        opacity="0.55"
      />
    </svg>
  );
}

function EditorialSignal() {
  return (
    <div style={{ paddingTop: '44px' }}>

      {/* Eyebrow */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '20px',
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
            fontSize: '0.62rem',
            fontFamily: "'DM Sans', sans-serif",
            color: '#1A5296',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          The Signal
        </span>
      </div>

      {/* Thin rule */}
      <div
        style={{
          height: '1px',
          backgroundColor: '#D4E5F5',
          marginBottom: '40px',
        }}
      />

      {/* Two metrics — large editorial analytical numerals */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          marginBottom: '44px',
        }}
      >
        {/* Revenue */}
        <div style={{ flex: 1, paddingRight: '28px' }}>
          <div
            style={{
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 200,
              color: '#003D80',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              marginBottom: '10px',
            }}
          >
            ↓ 21%
          </div>
          <div
            style={{
              fontSize: '0.6rem',
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#5A8CC0',
            }}
          >
            Revenue
          </div>
        </div>

        {/* Thin vertical divider */}
        <div
          style={{
            width: '1px',
            backgroundColor: '#D4E5F5',
            alignSelf: 'stretch',
            flexShrink: 0,
          }}
        />

        {/* Customers */}
        <div style={{ flex: 1, paddingLeft: '28px' }}>
          <div
            style={{
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 200,
              color: '#003D80',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              marginBottom: '10px',
            }}
          >
            ↓ 4%
          </div>
          <div
            style={{
              fontSize: '0.6rem',
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#5A8CC0',
            }}
          >
            Customers
          </div>
        </div>
      </div>

      {/* Thin rule */}
      <div
        style={{
          height: '1px',
          backgroundColor: '#D4E5F5',
          marginBottom: '40px',
        }}
      />

      {/* Interpretive hook */}
      <div>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.875rem, 3vw, 2.75rem)',
            color: '#003D80',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            margin: '0 0 1px',
          }}
        >
          But that wasn't
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.875rem, 3vw, 2.75rem)',
            color: '#003D80',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            margin: 0,
          }}
        >
          the real problem.
        </p>
      </div>

    </div>
  );
}

export function HeroSection() {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const goToFieldNote = () => {
    navigate('/field-note');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#E3EEF8',
        padding: '140px 32px 64px',
      }}
    >
      <FlowCurve />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >

        {/* Two-column: headline left, signal right — tighter gap to read as one story */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-10 items-start">

          {/* LEFT: eyebrow · headline · subtitle · body */}
          <div>
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
                  width: '28px',
                  height: '1px',
                  backgroundColor: '#003D80',
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
                Business Intelligence · Systems · Operations
              </span>
            </div>

            {/* Primary headline */}
            <h1
              style={{
                fontSize: 'clamp(3.75rem, 8.5vw, 6.75rem)',
                color: '#003D80',
                lineHeight: 1.07,
                fontWeight: 400,
                fontStyle: 'normal',
                letterSpacing: '-0.02em',
                marginBottom: '28px',
              }}
            >
              Your business is<br />
              telling you<br />
              something.
            </h1>

            {/* Italic serif subtitle */}
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#1A5296',
                lineHeight: 1.4,
                margin: '0 0 36px',
              }}
            >
              Flow helps you see it.
            </p>

            {/* Body copy */}
            <p
              style={{
                fontSize: '1.0625rem',
                fontFamily: "'DM Sans', sans-serif",
                color: '#1A5296',
                lineHeight: 1.85,
                maxWidth: '480px',
                margin: 0,
              }}
            >
              Find what's hiding in your business, understand why it matters,
              and build a simpler way forward.
            </p>
          </div>

          {/* RIGHT: editorial signal — no card, no box */}
          <div>
            <EditorialSignal />
          </div>

        </div>

        {/* CTAs — below both columns (correct mobile order) */}
        <div
          style={{
            marginTop: '56px',
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={goToFieldNote}
            style={{
              backgroundColor: '#003D80',
              color: '#ffffff',
              border: 'none',
              borderRadius: '100px',
              padding: '15px 34px',
              fontSize: '0.8rem',
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background-color 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#002D5F';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#003D80';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Bring Me One Messy Problem
          </button>

          <button
            onClick={() => scrollTo('work')}
            style={{
              backgroundColor: 'transparent',
              color: '#1A5296',
              border: 'none',
              padding: 0,
              fontSize: '0.8rem',
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#003D80')}
            onMouseLeave={e => (e.currentTarget.style.color = '#1A5296')}
          >
            See What Flow Found
            <span style={{ fontSize: '1rem', lineHeight: 1 }}>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
