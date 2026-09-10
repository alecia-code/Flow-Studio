import { motion } from 'motion/react';
import { Link } from 'react-router';

export function FieldNoteThanks() {
  return (
    <div
      style={{
        backgroundColor: '#E3EEF8',
        minHeight: '100vh',
        padding: '160px 32px 120px',
      }}
    >
      <div className="max-w-2xl mx-auto" style={{ textAlign: 'center' }}>

        {/* Checkmark icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 61, 128, 0.1)',
            border: '1px solid rgba(0, 61, 128, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 52px',
          }}
        >
          <div
            style={{
              width: '26px',
              height: '16px',
              borderLeft: '2px solid #5A8CC0',
              borderBottom: '2px solid #5A8CC0',
              transform: 'rotate(-45deg) translateY(-2px)',
            }}
          />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0, 0, 1] }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '28px',
              justifyContent: 'center',
            }}
          >
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
              Received
            </span>
            <div style={{ width: '24px', height: '1px', backgroundColor: '#AECCEF' }} />
          </div>

          <h1
            style={{
              color: '#003D80',
              marginBottom: '28px',
              fontStyle: 'italic',
            }}
          >
            Your Field Note Request<br />Has Been Received
          </h1>

          <p
            style={{
              fontSize: '1.0625rem',
              color: '#1A5296',
              lineHeight: 1.8,
              maxWidth: '440px',
              margin: '0 auto 72px',
            }}
          >
            Thank you for taking the time to share your business with me.
          </p>
        </motion.div>

        {/* What happens next card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0, 0, 1] }}
          style={{
            backgroundColor: '#E3EEF8',
            borderRadius: '24px',
            border: '1px solid #AECCEF',
            padding: '56px 52px',
            textAlign: 'left',
            marginBottom: '56px',
          }}
        >
          <h2
            style={{
              color: '#003D80',
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            Here's what happens next
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                timeline: 'Within 1 business day',
                body: "I'll review your responses and look for patterns, opportunities, and quick wins that could have an immediate impact on how your business operates.",
              },
              {
                timeline: 'Within 2 business days',
                body: "If your business is a good fit, you'll receive an email with recommended next steps — which may include a personalized Field Note or an invitation to schedule a Business Clarity Call.",
              },
            ].map(({ timeline, body }, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  paddingTop: i === 0 ? '0' : '32px',
                  paddingBottom: '32px',
                  borderBottom: i === 0 ? '1px solid #AECCEF' : 'none',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: '#003D80',
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontStyle: 'italic',
                  }}
                >
                  {timeline}
                </span>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: '#1A5296',
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0, 0, 1] }}
          style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}
        >
          <Link
            to="/field-note/lumen-pilates"
            style={{
              backgroundColor: '#003D80',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '100px',
              padding: '14px 32px',
              fontSize: '0.875rem',
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.03em',
              transition: 'background-color 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#002D5F')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#003D80')}
          >
            View Case Studies
          </Link>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'transparent',
              color: '#003D80',
              textDecoration: 'none',
              border: '1px solid #AECCEF',
              borderRadius: '100px',
              padding: '14px 32px',
              fontSize: '0.875rem',
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.03em',
              transition: 'all 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#E3EEF8';
              e.currentTarget.style.borderColor = '#003D80';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#AECCEF';
            }}
          >
            Connect on LinkedIn
          </a>
        </motion.div>

        {/* Small footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            fontSize: '0.8rem',
            color: '#5A8CC0',
            marginTop: '48px',
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.7,
          }}
        >
          Questions in the meantime?{' '}
          <a
            href="mailto:hello@flowstudio.co"
            style={{ color: '#003D80', textDecoration: 'none' }}
          >
            hello@flowstudio.co
          </a>
        </motion.p>
      </div>
    </div>
  );
}
