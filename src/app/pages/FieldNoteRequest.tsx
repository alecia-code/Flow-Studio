import type { CSSProperties, ReactNode } from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Search, Clock, BarChart2, Zap, Compass } from 'lucide-react';

type FormData = {
  fullName: string;
  email: string;
  businessName: string;
  website: string;
  industry: string;
  teamSize: string;
  services: string;
  biggestChallenge: string;
  weeklyTasks: string;
  automationTarget: string;
  sixMonthSuccess: string;
  anythingElse: string;
};

const receiveItems = [
  {
    icon: Search,
    title: 'Business Tools & Workflows Review',
    description:
      "A clear-eyed look at what you're using, how it connects, and where the gaps are quietly costing you.",
  },
  {
    icon: Clock,
    title: 'Manual Work Bottlenecks',
    description:
      'An honest accounting of where your time and team are being spent on tasks that could be automated or streamlined.',
  },
  {
    icon: BarChart2,
    title: 'Reporting & Visibility Opportunities',
    description:
      'Specific recommendations for the metrics you should be tracking and how to make them instantly accessible.',
  },
  {
    icon: Zap,
    title: 'Automation & AI Recommendations',
    description:
      'Practical, tailored suggestions — not generic tech advice. Only what makes sense for your specific business right now.',
  },
  {
    icon: Compass,
    title: 'Suggested Next Steps',
    description:
      "A clear, prioritized direction based on what's most likely to move the needle for your business, stage, and goals.",
  },
];

const whoItsFor = [
  'Your business has grown faster than your systems.',
  "You're spending too much time updating spreadsheets.",
  "You aren't fully confident in your numbers.",
  'Your team repeats the same manual tasks every week.',
  "You know things could run smoother but aren't sure where to begin.",
];

const businessStages = [
  'Just getting started',
  'Growing steadily',
  'Growing quickly',
  'Established and optimizing',
];

const difficultyAreas = [
  'Sales',
  'Customer Communication',
  'Scheduling',
  'Reporting',
  'Operations',
  'Marketing',
  'Inventory',
  'Team Management',
  'Other',
];

const toolOptions = [
  'Google Sheets',
  'Excel',
  'QuickBooks',
  'Shopify',
  'Square',
  'Calendly',
  'HubSpot',
  'Salesforce',
  'Notion',
  'Airtable',
  'Other',
];

const howItWorks = [
  {
    step: '01',
    title: 'Tell me about your business.',
    body: 'Complete a short questionnaire covering your operations, tools, and current challenges.',
    meta: 'Estimated time: 5–7 minutes',
  },
  {
    step: '02',
    title: "I'll look for what matters.",
    body: "I'll review your responses and identify opportunities, friction points, and potential improvements specific to your business.",
    meta: 'Within 1–2 business days',
  },
  {
    step: '03',
    title: "We'll determine the best next step.",
    body: "If we're a good fit, you'll receive recommended next steps — which may include a personalized Field Note or an invitation to a Business Clarity Call.",
    meta: 'Within 2 business days',
  },
];

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

function FormField({
  label,
  children,
  required,
}: {
  label: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label
        style={{
          fontSize: '0.78rem',
          fontFamily: "'DM Sans', sans-serif",
          color: '#1A5296',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        {label}
        {required && <span style={{ color: '#003D80', marginLeft: '4px' }}>*</span>}
      </label>
      {children}
    </div>
  );
}

function FormSectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        paddingBottom: '28px',
        borderBottom: '1px solid #AECCEF',
        marginBottom: '36px',
      }}
    >
      <div
        style={{
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 61, 128, 0.06)',
          border: '1px solid rgba(0, 61, 128, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: '0.7rem',
            fontFamily: "'DM Sans', sans-serif",
            color: '#003D80',
            letterSpacing: '0.05em',
          }}
        >
          {number}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.625rem',
          color: '#003D80',
          fontWeight: 400,
          margin: 0,
        }}
      >
        {title}
      </h3>
    </div>
  );
}

const inputStyle: CSSProperties = {
  width: '100%',
  backgroundColor: '#ffffff',
  border: '1px solid #AECCEF',
  borderRadius: '12px',
  padding: '14px 18px',
  fontSize: '0.9375rem',
  fontFamily: "'DM Sans', sans-serif",
  color: '#003D80',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
};

const textareaStyle: CSSProperties = {
  ...inputStyle,
  resize: 'vertical',
  minHeight: '120px',
  lineHeight: 1.8,
};

function PillButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: '9px 20px',
        borderRadius: '100px',
        border: `1px solid ${selected ? '#003D80' : '#AECCEF'}`,
        backgroundColor: selected ? 'rgba(0, 61, 128, 0.06)' : '#ffffff',
        color: selected ? '#003D80' : '#1A5296',
        fontSize: '0.8125rem',
        fontFamily: "'DM Sans', sans-serif",
        cursor: 'pointer',
        transition: 'all 0.2s',
        letterSpacing: '0.02em',
      }}
    >
      {label}
    </button>
  );
}

export function FieldNoteRequest() {
  const navigate = useNavigate();
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [businessStage, setBusinessStage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const toggleArea = (area: string) =>
    setSelectedAreas(prev =>
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );

  const toggleTool = (tool: string) =>
    setSelectedTools(prev =>
      prev.includes(tool) ? prev.filter(t => t !== tool) : [...prev, tool]
    );

  const onSubmit = (_data: FormData) => {
    navigate('/field-note/thanks');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToForm = () => {
    const el = document.getElementById('field-note-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#E3EEF8' }}>

      {/* ── Hero ── */}
      <section
        style={{
          backgroundColor: '#E3EEF8',
          minHeight: '88vh',
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
                marginBottom: '48px',
              }}
            >
              Find the opportunities hiding inside your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0, 0, 1] }}
            style={{ maxWidth: '580px', display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '56px' }}
          >
            {[
              'Every growing business reaches a point where its systems struggle to keep up. Information becomes scattered, manual work increases, and decisions become harder because the full picture isn\'t clear.',
              'A Field Note is a personalized review of your business operations designed to uncover opportunities to simplify workflows, improve visibility, and build smarter systems.',
              'This isn\'t a sales call.',
              'It\'s the first step toward building a business that runs with greater clarity.',
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: i === 2 ? '1.1rem' : '1.0625rem',
                  color: '#1A5296',
                  margin: 0,
                  lineHeight: 1.85,
                  fontStyle: i === 2 ? 'italic' : 'normal',
                }}
              >
                {text}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.25, 0, 0, 1] }}
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
                transition: 'all 0.2s',
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
              Start My Field Note
            </button>
            <span
              style={{
                fontSize: '0.8125rem',
                color: '#5A8CC0',
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.02em',
              }}
            >
              Estimated completion: 5–7 minutes
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── What You'll Receive ── */}
      <section style={{ backgroundColor: '#E3EEF8', padding: '112px 32px' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
            style={{ marginBottom: '72px' }}
          >
            <SectionTagline>Deliverables</SectionTagline>
            <h2 style={{ color: '#003D80', maxWidth: '480px' }}>What You'll Receive</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {receiveItems.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0, 0, 1] }}
                whileHover={{ y: -4 }}
                style={{
                  backgroundColor: '#E3EEF8',
                  borderRadius: '20px',
                  padding: '36px 32px',
                  border: '1px solid #AECCEF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  cursor: 'default',
                  transition: 'box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0, 61, 128, 0.07)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 61, 128, 0.06)',
                    border: '1px solid rgba(0, 61, 128, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color="#003D80" strokeWidth={1.5} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.375rem',
                    color: '#003D80',
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#1A5296',
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section style={{ backgroundColor: '#E3EEF8', padding: '0 32px 112px' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
            style={{
              borderRadius: '24px',
              border: '1px solid #AECCEF',
              padding: '64px 56px',
            }}
          >
            <SectionTagline>Is This For You?</SectionTagline>
            <h2 style={{ color: '#003D80', marginBottom: '8px' }}>Who It's For</h2>
            <p
              style={{
                fontSize: '1rem',
                color: '#1A5296',
                lineHeight: 1.8,
                marginBottom: '48px',
                fontStyle: 'italic',
              }}
            >
              This is a great fit if...
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {whoItsFor.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0, 0, 1] }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    padding: '20px 0',
                    borderBottom: i < whoItsFor.length - 1 ? '1px solid #AECCEF' : 'none',
                  }}
                >
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 61, 128, 0.12)',
                      border: '1px solid rgba(0, 61, 128, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <div
                      style={{
                        width: '8px',
                        height: '5px',
                        borderLeft: '1.5px solid #5A8CC0',
                        borderBottom: '1.5px solid #5A8CC0',
                        transform: 'rotate(-45deg) translateY(-1px)',
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: '1rem',
                      color: '#003D80',
                      lineHeight: 1.75,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ backgroundColor: '#E3EEF8', padding: '0 32px 112px' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
            style={{ marginBottom: '64px' }}
          >
            <SectionTagline>Process</SectionTagline>
            <h2 style={{ color: '#003D80', maxWidth: '360px' }}>How It Works</h2>
          </motion.div>

          <div
            style={{
              border: '1px solid #AECCEF',
              borderRadius: '24px',
              overflow: 'hidden',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3">
              {howItWorks.map(({ step, title, body, meta }, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0, 0, 1] }}
                  style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', gap: '16px' }}
                  className={
                    i < howItWorks.length - 1
                      ? 'border-b border-border md:border-b-0 md:border-r'
                      : ''
                  }
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '2.75rem',
                      color: '#AECCEF',
                      fontWeight: 300,
                      lineHeight: 1,
                      display: 'block',
                    }}
                  >
                    {step}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.375rem',
                      color: '#003D80',
                      fontWeight: 400,
                      margin: 0,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#1A5296',
                      lineHeight: 1.8,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {body}
                  </p>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#003D80',
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: '0.04em',
                      fontStyle: 'italic',
                      marginTop: '8px',
                    }}
                  >
                    {meta}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Form ── */}
      <section
        id="field-note-form"
        style={{ backgroundColor: '#E3EEF8', padding: '64px 32px 160px' }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
            style={{ marginBottom: '56px', textAlign: 'center' }}
          >
            <SectionTagline>Begin</SectionTagline>
            <h2 style={{ color: '#003D80' }}>Field Note Request</h2>
            <p
              style={{
                fontSize: '1rem',
                color: '#1A5296',
                lineHeight: 1.8,
                marginTop: '16px',
                maxWidth: '460px',
                margin: '16px auto 0',
              }}
            >
              Your answers shape the quality of insight you receive. Take the time that feels right.
            </p>
          </motion.div>

          {/* Progress indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ display: 'flex', gap: '8px', marginBottom: '40px' }}
          >
            {[
              { label: 'About You', opacity: 1 },
              { label: 'Your Business', opacity: 0.6 },
              { label: 'Goals & Tools', opacity: 0.3 },
            ].map(({ label, opacity }) => (
              <div
                key={label}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}
              >
                <div
                  style={{
                    height: '2px',
                    backgroundColor: '#003D80',
                    borderRadius: '100px',
                    opacity,
                  }}
                />
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#5A8CC0',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            style={{
              backgroundColor: '#E3EEF8',
              borderRadius: '24px',
              border: '1px solid #AECCEF',
              overflow: 'hidden',
            }}
          >
            {/* ─ Section 01: About You ─ */}
            <div style={{ padding: '52px 52px 44px' }}>
              <FormSectionHeader number="01" title="About You" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField label="Full Name" required>
                    <input
                      {...register('fullName', { required: true })}
                      placeholder="Your name"
                      style={{
                        ...inputStyle,
                        borderColor: errors.fullName ? '#003D80' : '#AECCEF',
                      }}
                      onFocus={e => (e.target.style.borderColor = '#AECCEF')}
                      onBlur={e =>
                        (e.target.style.borderColor = errors.fullName ? '#003D80' : '#AECCEF')
                      }
                    />
                  </FormField>
                  <FormField label="Email Address" required>
                    <input
                      {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                      type="email"
                      placeholder="hello@yourbusiness.com"
                      style={{
                        ...inputStyle,
                        borderColor: errors.email ? '#003D80' : '#AECCEF',
                      }}
                      onFocus={e => (e.target.style.borderColor = '#AECCEF')}
                      onBlur={e =>
                        (e.target.style.borderColor = errors.email ? '#003D80' : '#AECCEF')
                      }
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField label="Business Name" required>
                    <input
                      {...register('businessName', { required: true })}
                      placeholder="Your business name"
                      style={{
                        ...inputStyle,
                        borderColor: errors.businessName ? '#003D80' : '#AECCEF',
                      }}
                      onFocus={e => (e.target.style.borderColor = '#AECCEF')}
                      onBlur={e =>
                        (e.target.style.borderColor = errors.businessName ? '#003D80' : '#AECCEF')
                      }
                    />
                  </FormField>
                  <FormField label="Website or Social Media">
                    <input
                      {...register('website')}
                      placeholder="yourbusiness.com or @handle"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#AECCEF')}
                      onBlur={e => (e.target.style.borderColor = '#AECCEF')}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField label="Industry" required>
                    <input
                      {...register('industry', { required: true })}
                      placeholder="Wellness, retail, professional services..."
                      style={{
                        ...inputStyle,
                        borderColor: errors.industry ? '#003D80' : '#AECCEF',
                      }}
                      onFocus={e => (e.target.style.borderColor = '#AECCEF')}
                      onBlur={e =>
                        (e.target.style.borderColor = errors.industry ? '#003D80' : '#AECCEF')
                      }
                    />
                  </FormField>
                  <FormField label="Current Team Size">
                    <select
                      {...register('teamSize')}
                      style={{
                        ...inputStyle,
                        appearance: 'none',
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234A4642' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="">Select size</option>
                      <option value="solo">Just me</option>
                      <option value="2-5">2–5 people</option>
                      <option value="6-15">6–15 people</option>
                      <option value="16-50">16–50 people</option>
                      <option value="50+">50+ people</option>
                    </select>
                  </FormField>
                </div>
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: '#AECCEF', margin: '0 52px' }} />

            {/* ─ Section 02: About Your Business ─ */}
            <div style={{ padding: '52px 52px 44px' }}>
              <FormSectionHeader number="02" title="About Your Business" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

                <FormField label="How would you describe your business today?">
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '4px' }}>
                    {businessStages.map(stage => (
                      <PillButton
                        key={stage}
                        label={stage}
                        selected={businessStage === stage}
                        onClick={() => setBusinessStage(stage)}
                      />
                    ))}
                  </div>
                </FormField>

                <FormField label="What services or products do you offer?" required>
                  <textarea
                    {...register('services', { required: true })}
                    placeholder="Describe what you offer and who you serve..."
                    style={{
                      ...textareaStyle,
                      borderColor: errors.services ? '#003D80' : '#AECCEF',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#AECCEF')}
                    onBlur={e =>
                      (e.target.style.borderColor = errors.services ? '#003D80' : '#AECCEF')
                    }
                  />
                </FormField>

                <FormField label="What's the biggest operational challenge you're experiencing right now?" required>
                  <textarea
                    {...register('biggestChallenge', { required: true })}
                    placeholder="The thing that keeps coming back to you — be as specific as possible..."
                    style={{
                      ...textareaStyle,
                      minHeight: '140px',
                      borderColor: errors.biggestChallenge ? '#003D80' : '#AECCEF',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#AECCEF')}
                    onBlur={e =>
                      (e.target.style.borderColor = errors.biggestChallenge ? '#003D80' : '#AECCEF')
                    }
                  />
                </FormField>

                <FormField label="Which areas feel the most difficult to manage?">
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '4px' }}>
                    {difficultyAreas.map(area => (
                      <PillButton
                        key={area}
                        label={area}
                        selected={selectedAreas.includes(area)}
                        onClick={() => toggleArea(area)}
                      />
                    ))}
                  </div>
                </FormField>

                <FormField label="Which tools do you currently use?">
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '4px' }}>
                    {toolOptions.map(tool => (
                      <PillButton
                        key={tool}
                        label={tool}
                        selected={selectedTools.includes(tool)}
                        onClick={() => toggleTool(tool)}
                      />
                    ))}
                  </div>
                </FormField>
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: '#AECCEF', margin: '0 52px' }} />

            {/* ─ Section 03: Goals & Habits ─ */}
            <div style={{ padding: '52px 52px 44px' }}>
              <FormSectionHeader number="03" title="Your Habits & Goals" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

                <FormField label="What tasks do you repeat every week?">
                  <textarea
                    {...register('weeklyTasks')}
                    placeholder="The recurring work that takes up your time and energy..."
                    style={textareaStyle}
                    onFocus={e => (e.target.style.borderColor = '#AECCEF')}
                    onBlur={e => (e.target.style.borderColor = '#AECCEF')}
                  />
                </FormField>

                <FormField label="If you could automate one thing tomorrow, what would it be?">
                  <textarea
                    {...register('automationTarget')}
                    placeholder="The task you wish would just... handle itself."
                    style={textareaStyle}
                    onFocus={e => (e.target.style.borderColor = '#AECCEF')}
                    onBlur={e => (e.target.style.borderColor = '#AECCEF')}
                  />
                </FormField>

                <FormField label="What does success look like six months from now?" required>
                  <textarea
                    {...register('sixMonthSuccess', { required: true })}
                    placeholder="Paint me a picture of what's possible for your business..."
                    style={{
                      ...textareaStyle,
                      minHeight: '140px',
                      borderColor: errors.sixMonthSuccess ? '#003D80' : '#AECCEF',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#AECCEF')}
                    onBlur={e =>
                      (e.target.style.borderColor = errors.sixMonthSuccess ? '#003D80' : '#AECCEF')
                    }
                  />
                </FormField>

                <FormField label="Anything else you'd like me to know?">
                  <textarea
                    {...register('anythingElse')}
                    placeholder="Optional — share anything that feels relevant or important..."
                    style={{ ...textareaStyle, minHeight: '100px' }}
                    onFocus={e => (e.target.style.borderColor = '#AECCEF')}
                    onBlur={e => (e.target.style.borderColor = '#AECCEF')}
                  />
                </FormField>
              </div>
            </div>

            {/* ─ Submit ─ */}
            <div
              style={{
                padding: '40px 52px 56px',
                borderTop: '1px solid #AECCEF',
              }}
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                style={{
                  width: '100%',
                  backgroundColor: '#003D80',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '14px',
                  padding: '20px',
                  fontSize: '0.9375rem',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#002D5F')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#003D80')}
              >
                Submit My Field Note Request
              </motion.button>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: '#5A8CC0',
                  textAlign: 'center',
                  marginTop: '20px',
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.7,
                }}
              >
                After submitting, you'll receive a confirmation email. I'll review your responses
                and determine the best next step for your business.
              </p>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
