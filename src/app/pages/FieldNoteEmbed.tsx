import { motion } from 'motion/react';

const TALLY_EMBED_URL =
  'https://tally.so/embed/PdeLB5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';

function SectionTagline({ children }: { children: string }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
      <div style={{ width: '24px', height: '1px', backgroundColor: '#AECCEF' }} />
      <span
        style={{
          fontSize: '0.7rem',
          fontFamily: "'DM Sans', sans-serif",
          color: '#1A5296',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </span>
    </div>
  );
}

export function FieldNoteEmbed() {
  const scrollToForm = () => {
    document.getElementById('field-note-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#E3EEF8' }}>
      <section
        style={{
          minHeight: '82vh',
          display: 'flex',
          alignItems: 'center',
          padding: '148px 32px 96px',
        }}
      >
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
          >
            <SectionTagline>Field Note Assessment</SectionTagline>
            <h1
              style={{
                color: '#003D80',
                marginBottom: '24px',
                fontStyle: 'italic',
                maxWidth: '680px',
              }}
            >
              Request Your Field Note
            </h1>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.2rem, 2.5vw, 1.625rem)',
                color: '#003D80',
                fontWeight: 400,
                fontStyle: 'italic',
                marginBottom: '42px',
              }}
            >
              Find the opportunities hiding inside your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0, 0, 1] }}
            style={{ maxWidth: '610px', marginBottom: '48px' }}
          >
            <p style={{ fontSize: '1.0625rem', color: '#1A5296', lineHeight: 1.85, margin: '0 0 18px' }}>
              A Field Note is a personalized review of your business operations designed to uncover opportunities to simplify workflows, improve visibility, and build smarter systems.
            </p>
            <p style={{ fontSize: '1.0625rem', color: '#1A5296', lineHeight: 1.85, margin: 0, fontStyle: 'italic' }}>
              Bring me one messy problem. We’ll start there.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.25, 0, 0, 1] }}
            style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}
          >
            <button
              onClick={scrollToForm}
              style={{
                backgroundColor: '#003D80',
                color: '#ffffff',
                border: 'none',
                borderRadius: '100px',
                padding: '16px 44px',
                fontSize: '0.9375rem',
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.03em',
                cursor: 'pointer',
              }}
            >
              Start My Field Note
            </button>
            <span style={{ fontSize: '0.8125rem', color: '#5A8CC0', fontFamily: "'DM Sans', sans-serif" }}>
              Estimated completion: 5–7 minutes
            </span>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '24px 32px 104px' }}>
        <div className="max-w-5xl mx-auto">
          <div
            style={{
              borderTop: '1px solid #AECCEF',
              borderBottom: '1px solid #AECCEF',
              padding: '42px 0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '32px',
            }}
          >
            {[
              ['01', 'Tell me what feels messy.'],
              ['02', 'I look for the pattern underneath it.'],
              ['03', 'You get a clear place to start.'],
            ].map(([number, text]) => (
              <div key={number}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: '#AECCEF' }}>
                  {number}
                </span>
                <p style={{ color: '#003D80', fontSize: '0.95rem', lineHeight: 1.7, margin: '10px 0 0' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="field-note-form" style={{ padding: '32px 24px 140px' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '38px' }}
          >
            <SectionTagline>Begin</SectionTagline>
            <h2 style={{ color: '#003D80', marginBottom: '14px' }}>Tell Me What’s Going On</h2>
            <p style={{ color: '#1A5296', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto' }}>
              Your answers feed directly into Flow’s existing intake system, so your submission reaches the same Airtable and automation workflow already used for Field Notes.
            </p>
          </motion.div>

          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #AECCEF',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 18px 50px rgba(0, 61, 128, 0.06)',
            }}
          >
            <iframe
              title="Flow Studio Field Note Request"
              src={TALLY_EMBED_URL}
              loading="lazy"
              width="100%"
              height="1100"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style={{ display: 'block', width: '100%', minHeight: '900px', backgroundColor: '#ffffff' }}
            />
          </div>

          <p
            style={{
              textAlign: 'center',
              color: '#5A8CC0',
              fontSize: '0.78rem',
              lineHeight: 1.7,
              margin: '20px auto 0',
              maxWidth: '520px',
            }}
          >
            If the embedded form does not load, open the Field Note directly at{' '}
            <a href="https://tally.so/r/PdeLB5" target="_blank" rel="noreferrer" style={{ color: '#003D80' }}>
              tally.so/r/PdeLB5
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}
