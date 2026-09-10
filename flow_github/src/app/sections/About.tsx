import { motion } from 'motion/react';
import { useNavigate } from 'react-router';

const principles = [
  {
    number: '01',
    title: 'Look underneath the obvious answer.',
    body: 'The first explanation is often only the most visible one. I like to trace the signal back to the pattern underneath it.',
  },
  {
    number: '02',
    title: 'Make the data lead somewhere.',
    body: 'A dashboard is only useful if it changes a decision. The goal is clarity about what matters, why it matters, and what to do next.',
  },
  {
    number: '03',
    title: 'Build for less dependence, not more software.',
    body: 'The right system should make the business easier to understand and easier to run, without adding another layer of noise.',
  },
];

function AboutCurve() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1400 760"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <circle
        cx="1320"
        cy="-120"
        r="760"
        fill="none"
        stroke="#AECCEF"
        strokeWidth="1"
        opacity="0.58"
      />
      <circle
        cx="1320"
        cy="-120"
        r="520"
        fill="none"
        stroke="#D4E5F5"
        strokeWidth="1"
        opacity="0.8"
      />
    </svg>
  );
}

export function AboutSection() {
  const navigate = useNavigate();

  const goToFieldNote = () => {
    navigate('/field-note');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#E3EEF8', color: '#003D80' }}>
      <section
        aria-labelledby="about-heading"
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '176px 32px 144px',
          minHeight: '78vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <AboutCurve />
        <div
          className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-16 lg:gap-24 items-end"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0, 0, 1] }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '38px' }}>
              <div style={{ width: '24px', height: '1px', backgroundColor: '#AECCEF' }} />
              <span
                style={{
                  fontSize: '0.68rem',
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#1A5296',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                About Flow
              </span>
            </div>

            <h1
              id="about-heading"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3.75rem, 8vw, 7rem)',
                lineHeight: 0.98,
                letterSpacing: '-0.035em',
                color: '#003D80',
                fontWeight: 400,
                margin: 0,
                maxWidth: '920px',
              }}
            >
              I build systems for the moment when{' '}
              <em style={{ fontWeight: 300, color: '#5A8CC0' }}>“something feels off”</em>{' '}
              isn&apos;t enough.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.25, 0, 0, 1] }}
            style={{ maxWidth: '430px', paddingBottom: '10px' }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.5rem, 2.6vw, 2.15rem)',
                lineHeight: 1.35,
                fontStyle: 'italic',
                color: '#1A5296',
                margin: '0 0 24px',
              }}
            >
              Flow began with a habit I couldn&apos;t turn off: looking underneath the obvious answer.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#1A5296', lineHeight: 1.8, margin: 0 }}>
              I&apos;m drawn to the point where data, operations, and human behavior meet, because that is often where the real story is hiding.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '136px 32px', borderTop: '1px solid #D4E5F5' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[4fr_8fr] gap-14 lg:gap-24">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <div style={{ width: '24px', height: '1px', backgroundColor: '#AECCEF' }} />
              <span
                style={{
                  fontSize: '0.68rem',
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#1A5296',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                Why I Build Systems
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.25, 0, 0, 1] }}
            style={{ maxWidth: '820px' }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.25rem, 4.5vw, 4rem)',
                lineHeight: 1.13,
                letterSpacing: '-0.02em',
                color: '#003D80',
                margin: '0 0 44px',
              }}
            >
              I&apos;ve spent years working inside complex operations, using data to understand what changed, why it changed, and what people should do next.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <p style={{ fontSize: '1rem', color: '#1A5296', lineHeight: 1.85, margin: 0 }}>
                What kept pulling me in was never the report itself. It was the investigation behind it: finding the discrepancy, connecting the pieces, and turning a messy business question into something people could actually act on.
              </p>
              <p style={{ fontSize: '1rem', color: '#1A5296', lineHeight: 1.85, margin: 0 }}>
                Flow brings that way of thinking to growing businesses. Not enterprise complexity for its own sake, and not technology because it looks impressive. Just a clearer way to see the business and build around what the evidence is telling us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ backgroundColor: '#003D80', padding: '136px 32px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[4fr_8fr] gap-14 lg:gap-24 mb-20">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '24px', height: '1px', backgroundColor: '#5A8CC0' }} />
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#AECCEF',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  How I Think
                </span>
              </div>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.75rem)',
                color: '#FFFFFF',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                margin: 0,
                maxWidth: '820px',
              }}
            >
              The goal isn&apos;t more information.{' '}
              <em style={{ color: '#AECCEF', fontWeight: 300 }}>It&apos;s a better next move.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#5A8CC0]">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0, 0, 1] }}
                className="py-10 md:px-8 first:pl-0 last:pr-0 border-b md:border-b-0 md:border-r last:border-r-0 border-[#5A8CC0]"
              >
                <p
                  style={{
                    fontSize: '0.65rem',
                    color: '#7AB0D9',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    margin: '0 0 32px',
                    fontWeight: 500,
                  }}
                >
                  {principle.number}
                </p>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.75rem, 2.5vw, 2.35rem)',
                    lineHeight: 1.18,
                    color: '#FFFFFF',
                    fontWeight: 400,
                    margin: '0 0 22px',
                  }}
                >
                  {principle.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#AECCEF', lineHeight: 1.8, margin: 0 }}>
                  {principle.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '144px 32px 156px', position: 'relative', overflow: 'hidden' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-14 lg:gap-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
          >
            <p
              style={{
                fontSize: '0.68rem',
                color: '#1A5296',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                margin: '0 0 30px',
                fontWeight: 500,
              }}
            >
              The Flow Perspective
            </p>
            <h2
              style={{
                fontSize: 'clamp(3rem, 6vw, 5.75rem)',
                lineHeight: 1.03,
                letterSpacing: '-0.03em',
                color: '#003D80',
                margin: 0,
                maxWidth: '850px',
              }}
            >
              Every business already contains signals about what&apos;s working, what&apos;s slipping, and what needs attention.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0, 0, 1] }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.6rem, 3vw, 2.45rem)',
                lineHeight: 1.35,
                color: '#1A5296',
                fontStyle: 'italic',
                margin: '0 0 34px',
              }}
            >
              Flow exists to make those patterns visible, then turn the useful ones into something the business can actually use.
            </p>
            <button
              onClick={goToFieldNote}
              style={{
                backgroundColor: '#003D80',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '100px',
                padding: '16px 30px',
                fontSize: '0.78rem',
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              Bring Me One Messy Problem →
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
