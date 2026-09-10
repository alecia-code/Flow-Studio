import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CaseStudyDashboard } from '../components/CaseStudyDashboard';

const heroImageUrl = 'https://images.unsplash.com/photo-1717500252297-b09508db7ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600';

function Fade({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay, ease: [0.25, 0, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const metaItems = [
  { label: 'Industry', value: 'Boutique Fitness' },
  { label: 'Focus', value: 'Operational Visibility' },
  { label: 'Scope', value: 'Scheduling · Retention · Revenue' },
  { label: 'Artifacts', value: 'Dashboard · Field Note · Process Map · Executive Summary' },
  { label: 'Read Time', value: '6 min' },
];

const observations = [
  'Nothing seemed broken.',
  'Information existed everywhere.',
  'Attendance lived in one place.',
  'Revenue lived somewhere else.',
  'Scheduling decisions happened from intuition.',
  'Marketing success was measured differently than retention.',
  'Every answer existed.',
  'Just not together.',
];

const annotations = [
  { n: '①', heading: 'Peak demand', body: 'Concentrated on Tuesday and Thursday evenings, consistent across all three locations.' },
  { n: '②', heading: 'Morning retention', body: 'Morning class clients retained at significantly higher rates than evening participants.' },
  { n: '③', heading: 'Revenue health', body: 'Overall revenue remained stable despite uneven utilization across the weekly schedule.' },
  { n: '④', heading: 'Scheduling driver', body: 'Instructor availability was shaping the schedule more than client demand signals.' },
];

const deliverableSteps = [
  {
    step: '01',
    title: 'Field Notes',
    desc: 'A one-page strategic observation delivered within five business days — the first moment of clarity.',
  },
  {
    step: '02',
    title: 'Pattern System',
    desc: 'A custom KPI framework and dashboard built to make the invisible visible, permanently.',
  },
  {
    step: '03',
    title: 'Monthly Insight',
    desc: 'An ongoing partnership that compounds over time — the business gets sharper every month.',
  },
];

export function FieldNoteLumen() {
  return (
    <div style={{ backgroundColor: '#E3EEF8' }}>

      {/* ── Back link ─────────────────────────────────────────────────────────── */}
      <div style={{ padding: '100px 48px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <Link
          to="/"
          style={{
            fontSize: '0.78rem',
            fontFamily: "'DM Sans', sans-serif",
            color: '#5A8CC0',
            textDecoration: 'none',
            letterSpacing: '0.04em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#1A5296')}
          onMouseLeave={e => (e.currentTarget.style.color = '#5A8CC0')}
        >
          ← All Observations
        </Link>
      </div>

      {/* ── Section 1: Hero ───────────────────────────────────────────────────── */}
      <section style={{ padding: '48px 48px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <Fade>
          {/* Metadata strip */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0',
              flexWrap: 'wrap',
              marginBottom: '56px',
              borderTop: '1px solid #AECCEF',
              borderBottom: '1px solid #AECCEF',
              padding: '14px 0',
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.65rem',
                color: '#003D80',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 500,
                marginRight: '28px',
                flexShrink: 0,
              }}
            >
              Field Note 001
            </span>
            {metaItems.map(({ label, value }, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0', flexShrink: 0 }}>
                {i > 0 && <div style={{ width: '1px', height: '12px', backgroundColor: '#AECCEF', margin: '0 20px' }} />}
                <span style={{ fontSize: '0.6rem', color: '#5A8CC0', fontFamily: "'DM Sans', sans-serif", marginRight: '5px', letterSpacing: '0.04em' }}>
                  {label}
                </span>
                <span style={{ fontSize: '0.65rem', color: '#1A5296', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.02em' }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Hero text */}
          <div style={{ maxWidth: '720px', marginBottom: '64px' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontFamily: "'DM Sans', sans-serif",
                color: '#5A8CC0',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Featured Observation
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                color: '#003D80',
                marginBottom: '28px',
                lineHeight: 1.1,
              }}
            >
              Lumen Pilates Collective
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                color: '#1A5296',
                lineHeight: 1.85,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                maxWidth: '600px',
              }}
            >
              Helping a boutique studio uncover hidden operational patterns through thoughtful business intelligence.
            </p>
          </div>
        </Fade>

        {/* Hero image */}
        <Fade delay={0.1}>
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              height: '520px',
              position: 'relative',
            }}
          >
            <ImageWithFallback
              src={heroImageUrl}
              alt="Pilates reformer studio with morning light"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(31,31,31,0.18) 0%, transparent 50%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '28px',
                left: '32px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.68rem',
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '0.05em',
              }}
            >
              Houston, Texas
            </div>
          </div>
        </Fade>
      </section>

      {/* ── Section 2: Before the Numbers ────────────────────────────────────── */}
      <section style={{ padding: '128px 48px', backgroundColor: '#E3EEF8' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Fade>
            <p style={{ fontSize: '0.72rem', fontFamily: "'DM Sans', sans-serif", color: '#5A8CC0', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '40px' }}>
              Before the Numbers
            </p>
          </Fade>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              'Some businesses don\'t look like they\'re struggling.',
              'They look busy.',
              'Classes are full. The community is growing. The instructors know everyone\'s name.',
              'From the outside, everything appears to be working.',
              'Then, over coffee, the owner said something that caught my attention.',
            ].map((text, i) => (
              <Fade key={i} delay={i * 0.06}>
                <p style={{ fontSize: '1.0625rem', color: '#1A5296', lineHeight: 1.85, margin: 0, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                  {text}
                </p>
              </Fade>
            ))}
          </div>

          {/* Pull quote */}
          <Fade delay={0.35}>
            <blockquote
              style={{
                margin: '64px 0',
                padding: '0 0 0 32px',
                borderLeft: '3px solid #003D80',
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  color: '#003D80',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                "We're growing...<br />but I don't always know why."
              </p>
              <footer style={{ marginTop: '16px', fontSize: '0.75rem', color: '#5A8CC0', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.04em' }}>
                — Studio Owner, Lumen Pilates Collective
              </footer>
            </blockquote>
          </Fade>

          <Fade delay={0.4}>
            <p style={{ fontSize: '1.0625rem', color: '#1A5296', lineHeight: 1.85, margin: 0, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              That's the real beginning of the project.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── Section 3: What I Started Noticing ───────────────────────────────── */}
      <section style={{ padding: '128px 48px', backgroundColor: '#E3EEF8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Fade>
            <p style={{ fontSize: '0.72rem', fontFamily: "'DM Sans', sans-serif", color: '#5A8CC0', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '72px' }}>
              What I Started Noticing
            </p>
          </Fade>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Sticky notes */}
            <Fade>
              <div style={{ position: 'relative', height: '400px' }}>
                {[
                  { text: 'Why Tuesday nights?', x: 8, y: 5, rotate: -3, bg: '#FDF2F3', border: '#D4E5F5' },
                  { text: 'Revenue ≠ Utilization', x: 52, y: 12, rotate: 2, bg: '#F5EAEC', border: '#E8C4C8' },
                  { text: 'Retention dip @ 6 months', x: 4, y: 42, rotate: -1.5, bg: '#FDFCFA', border: '#AECCEF' },
                  { text: 'Instructor driving schedule?', x: 44, y: 50, rotate: 3, bg: '#FDF2F3', border: '#D4E5F5' },
                  { text: '← check this pattern', x: 18, y: 72, rotate: 1, bg: '#F5EAEC', border: '#E8C4C8' },
                  { text: 'AM vs PM retention', x: 56, y: 76, rotate: -2, bg: '#FDFCFA', border: '#AECCEF' },
                ].map(({ text, x, y, rotate, bg, border }) => (
                  <div
                    key={text}
                    style={{
                      position: 'absolute',
                      left: `${x}%`,
                      top: `${y}%`,
                      backgroundColor: bg,
                      border: `1px solid ${border}`,
                      padding: '14px 16px',
                      borderRadius: '4px',
                      boxShadow: '0 4px 16px rgba(31,31,31,0.07), 0 1px 4px rgba(31,31,31,0.04)',
                      transform: `rotate(${rotate}deg)`,
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '0.9rem',
                      color: '#1A5296',
                      fontStyle: 'italic',
                      maxWidth: '155px',
                      lineHeight: 1.45,
                      zIndex: 1,
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </Fade>

            {/* Observations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {observations.map((text, i) => (
                <Fade key={i} delay={i * 0.06}>
                  <p
                    style={{
                      fontFamily: i === 6 || i === 7 ? "'Cormorant Garamond', serif" : "'DM Sans', sans-serif",
                      fontSize: i === 6 || i === 7 ? '1.5rem' : '1.0625rem',
                      color: i === 6 || i === 7 ? '#003D80' : '#1A5296',
                      fontStyle: i === 6 || i === 7 ? 'italic' : 'normal',
                      fontWeight: 300,
                      lineHeight: 1.75,
                      margin: 0,
                      paddingBottom: '20px',
                      borderBottom: i < observations.length - 1 ? '1px solid #D4E5F5' : 'none',
                      marginBottom: '20px',
                    }}
                  >
                    {text}
                  </p>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Looking for Patterns ──────────────────────────────────── */}
      <section style={{ padding: '128px 48px', backgroundColor: '#E3EEF8' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Fade>
            <p style={{ fontSize: '0.72rem', fontFamily: "'DM Sans', sans-serif", color: '#5A8CC0', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '40px' }}>
              Looking for Patterns
            </p>
          </Fade>
          <Fade delay={0.1}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                color: '#003D80',
                fontWeight: 300,
                lineHeight: 1.45,
                fontStyle: 'italic',
                marginBottom: '32px',
              }}
            >
              Rather than asking whether attendance was increasing, I wanted to understand how attendance <em>behaved</em>.
            </p>
          </Fade>
          <Fade delay={0.2}>
            <p style={{ fontSize: '1.0625rem', color: '#1A5296', lineHeight: 1.85, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              That changed the questions entirely.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── Section 5: Dashboard Reveal ───────────────────────────────────────── */}
      <section style={{ padding: '0 48px 128px', backgroundColor: '#E3EEF8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Fade>
            <CaseStudyDashboard />
          </Fade>

          {/* Annotations */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            style={{ marginTop: '40px' }}
          >
            {annotations.map(({ n, heading, body }, i) => (
              <Fade key={n} delay={i * 0.08}>
                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                    padding: '24px 28px',
                    backgroundColor: '#E3EEF8',
                    borderRadius: '16px',
                    border: '1px solid #AECCEF',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.5rem',
                      color: '#003D80',
                      lineHeight: 1,
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    {n}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.875rem', color: '#003D80', fontFamily: "'DM Sans', sans-serif", fontWeight: 400, marginBottom: '6px' }}>
                      {heading}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#1A5296', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.65, fontWeight: 300 }}>
                      {body}
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: The Pattern ────────────────────────────────────────────── */}
      <section
        style={{
          padding: '160px 48px',
          backgroundColor: '#002D5F',
          textAlign: 'center',
        }}
      >
        <Fade>
          <p style={{ fontSize: '0.65rem', fontFamily: "'DM Sans', sans-serif", color: '#7AB0D9', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '48px' }}>
            The Pattern
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 7vw, 6rem)',
              color: '#ffffff',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.15,
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            Growth wasn't the problem.
            <br />
            Visibility was.
          </h2>
        </Fade>
      </section>

      {/* ── Section 7: If This Were My Studio ────────────────────────────────── */}
      <section style={{ padding: '128px 48px', backgroundColor: '#E3EEF8' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <Fade>
            <p style={{ fontSize: '0.72rem', fontFamily: "'DM Sans', sans-serif", color: '#5A8CC0', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '56px' }}>
              If This Were My Studio
            </p>
          </Fade>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { text: 'The first thing I wouldn\'t change', size: '1.0625rem', color: '#1A5296', serif: false },
              { text: 'is the schedule.', size: 'clamp(2rem, 4vw, 3rem)', color: '#003D80', serif: true, italic: true },
              { text: ' ', size: '1rem', color: 'transparent', serif: false },
              { text: 'I\'d change what we measure.', size: '1.0625rem', color: '#1A5296', serif: false },
              { text: ' ', size: '1rem', color: 'transparent', serif: false },
              { text: 'Because when visibility improves,', size: '1.0625rem', color: '#1A5296', serif: false },
              { text: 'better scheduling follows naturally.', size: 'clamp(1.5rem, 3vw, 2rem)', color: '#003D80', serif: true, italic: true },
            ].map(({ text, size, color, serif, italic }, i) => (
              <Fade key={i} delay={i * 0.07}>
                <p
                  style={{
                    fontFamily: serif ? "'Cormorant Garamond', serif" : "'DM Sans', sans-serif",
                    fontSize: size,
                    color,
                    fontStyle: italic ? 'italic' : 'normal',
                    fontWeight: 300,
                    lineHeight: 1.35,
                    margin: 0,
                  }}
                >
                  {text}
                </p>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: What I Would Build ────────────────────────────────────── */}
      <section style={{ padding: '128px 48px', backgroundColor: '#E3EEF8' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Fade>
            <p style={{ fontSize: '0.72rem', fontFamily: "'DM Sans', sans-serif", color: '#5A8CC0', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '72px' }}>
              What I Would Build
            </p>
          </Fade>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {deliverableSteps.map(({ step, title, desc }, i) => (
              <div key={step}>
                <Fade delay={i * 0.1}>
                  <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '28px', paddingBottom: '48px' }}>
                    <div style={{ textAlign: 'right', paddingTop: '6px' }}>
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: '2rem',
                          color: '#AECCEF',
                          fontWeight: 300,
                          lineHeight: 1,
                        }}
                      >
                        {step}
                      </span>
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: '1.875rem',
                          color: '#003D80',
                          fontWeight: 400,
                          marginBottom: '10px',
                        }}
                      >
                        {title}
                      </h3>
                      <p style={{ fontSize: '0.9375rem', color: '#1A5296', lineHeight: 1.8, margin: 0, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                </Fade>

                {i < deliverableSteps.length - 1 && (
                  <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '28px', paddingBottom: '48px' }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ width: '1px', height: '32px', backgroundColor: '#AECCEF', marginLeft: 'auto' }} />
                    </div>
                    <div />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: The Bigger Lesson ─────────────────────────────────────── */}
      <section style={{ padding: '128px 48px', backgroundColor: '#E3EEF8' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Fade>
            <p style={{ fontSize: '0.72rem', fontFamily: "'DM Sans', sans-serif", color: '#5A8CC0', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '48px' }}>
              The Bigger Lesson
            </p>
          </Fade>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {[
              { text: 'Most businesses don\'t need another dashboard.', serif: false },
              { text: 'They need someone to ask better questions.', serif: false },
              { text: 'Every spreadsheet already tells a story.', serif: true },
              { text: 'Someone simply has to notice it.', serif: true },
            ].map(({ text, serif }, i) => (
              <Fade key={i} delay={i * 0.08}>
                <p
                  style={{
                    fontFamily: serif ? "'Cormorant Garamond', serif" : "'DM Sans', sans-serif",
                    fontSize: serif ? 'clamp(1.5rem, 3vw, 2.25rem)' : '1.0625rem',
                    color: serif ? '#003D80' : '#1A5296',
                    fontStyle: serif ? 'italic' : 'normal',
                    fontWeight: 300,
                    lineHeight: serif ? 1.35 : 1.85,
                    margin: 0,
                  }}
                >
                  {text}
                </p>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 10: CTA ───────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '160px 48px',
          backgroundColor: '#E3EEF8',
          textAlign: 'center',
          borderTop: '1px solid #AECCEF',
        }}
      >
        <Fade>
          <div style={{ width: '32px', height: '1px', backgroundColor: '#003D80', margin: '0 auto 40px' }} />
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              color: '#003D80',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.3,
              marginBottom: '16px',
            }}
          >
            Have a business that's quietly asking
            <br />
            for better questions?
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: '#1A5296',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              marginBottom: '52px',
            }}
          >
            Let's find the pattern.
          </p>
          <Link
            to="/#intake"
            onClick={() => {
              setTimeout(() => {
                const el = document.getElementById('intake');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            style={{
              display: 'inline-block',
              backgroundColor: '#003D80',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '100px',
              padding: '16px 40px',
              fontSize: '0.875rem',
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.04em',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = '#002D5F')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = '#003D80')}
          >
            Request a Field Note
          </Link>
        </Fade>
      </section>

    </div>
  );
}
