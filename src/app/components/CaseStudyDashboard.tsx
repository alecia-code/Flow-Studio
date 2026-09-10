import { AreaChart, Area, ResponsiveContainer, BarChart, Bar, XAxis } from 'recharts';
import { motion } from 'motion/react';

const attendanceData = [
  { month: 'Jan', v: 1240 }, { month: 'Feb', v: 1380 }, { month: 'Mar', v: 1510 },
  { month: 'Apr', v: 1420 }, { month: 'May', v: 1680 }, { month: 'Jun', v: 1820 },
  { month: 'Jul', v: 1760 },
];

const revenueByLocation = [
  { location: 'Midtown', v: 68 },
  { location: 'Heights', v: 54 },
  { location: 'River Oaks', v: 81 },
];

const classTypes = [
  { name: 'Reformer', pct: 62, color: '#003D80' },
  { name: 'Tower', pct: 22, color: '#AECCEF' },
  { name: 'Mat', pct: 16, color: '#AECCEF' },
];

export function CaseStudyDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.25, 0, 0, 1] }}
      style={{
        backgroundColor: '#E3EEF8',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 24px 60px rgba(0, 61, 128, 0.08), 0 4px 12px rgba(0, 61, 128, 0.04)',
        border: '1px solid #AECCEF',
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: '#003D80',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.1rem',
              color: '#ffffff',
              fontWeight: 400,
            }}
          >
            Lumen Pilates Collective
          </div>
          <div
            style={{
              fontSize: '0.65rem',
              color: '#AECCEF',
              fontFamily: "'DM Sans', sans-serif",
              marginTop: '2px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            3 Locations · Operations Dashboard · 2026
          </div>
        </div>
        <div style={{ display: 'flex', gap: '5px' }}>
          {['#5A8CC0', '#AECCEF', '#D4E5F5'].map((c, i) => (
            <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: c }} />
          ))}
        </div>
      </div>

      {/* KPI Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          borderBottom: '1px solid #D4E5F5',
        }}
      >
        {[
          { label: 'Monthly Revenue', value: '$94,200', change: '+23%' },
          { label: 'Active Clients', value: '847', change: '↑ 112 new' },
          { label: 'Avg Retention', value: '91%', change: '+6pts' },
        ].map(({ label, value, change }, i) => (
          <div
            key={label}
            style={{
              padding: '20px 22px',
              borderRight: i < 2 ? '1px solid #D4E5F5' : 'none',
            }}
          >
            <div
              style={{
                fontSize: '0.6rem',
                fontFamily: "'DM Sans', sans-serif",
                color: '#1A5296',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              {label}
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.875rem',
                color: '#003D80',
                lineHeight: 1,
                fontWeight: 400,
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontSize: '0.65rem',
                color: '#5A8CC0',
                fontFamily: "'DM Sans', sans-serif",
                marginTop: '4px',
              }}
            >
              {change}
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
          gap: '0',
          borderBottom: '1px solid #D4E5F5',
        }}
      >
        {/* Attendance Chart */}
        <div style={{ padding: '20px 22px', borderRight: '1px solid #D4E5F5' }}>
          <div
            style={{
              fontSize: '0.6rem',
              fontFamily: "'DM Sans', sans-serif",
              color: '#1A5296',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            Monthly Class Attendance
          </div>
          <div style={{ height: 80 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={attendanceData} margin={{ top: 2, right: 4, bottom: 16, left: 0 }}>
                <defs>
                  <linearGradient id="attGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#003D80" stopOpacity={0.15} />
                    <stop offset="100%" stopColor="#003D80" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 8, fill: '#AECCEF', fontFamily: "'DM Sans', sans-serif" }}
                />
                <Area
                  type="monotone"
                  dataKey="v"
                  stroke="#003D80"
                  strokeWidth={1.5}
                  fill="url(#attGrad)"
                  dot={false}
                  isAnimationActive
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue by Location */}
        <div style={{ padding: '20px 22px' }}>
          <div
            style={{
              fontSize: '0.6rem',
              fontFamily: "'DM Sans', sans-serif",
              color: '#1A5296',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            Revenue by Location
          </div>
          <div style={{ height: 80 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueByLocation} margin={{ top: 2, right: 0, bottom: 16, left: 0 }} barSize={14}>
                <XAxis
                  dataKey="location"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 7, fill: '#AECCEF', fontFamily: "'DM Sans', sans-serif" }}
                />
                <Bar dataKey="v" fill="#AECCEF" radius={[3, 3, 0, 0]} isAnimationActive />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Class Mix */}
      <div style={{ padding: '18px 22px' }}>
        <div
          style={{
            fontSize: '0.6rem',
            fontFamily: "'DM Sans', sans-serif",
            color: '#1A5296',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          Class Type Breakdown
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {classTypes.map(({ name, pct, color }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#1A5296',
                  width: '52px',
                  flexShrink: 0,
                }}
              >
                {name}
              </span>
              <div
                style={{
                  flex: 1,
                  height: '4px',
                  backgroundColor: '#D4E5F5',
                  borderRadius: '100px',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + classTypes.findIndex(c => c.name === name) * 0.1, ease: [0.25, 0, 0, 1] }}
                  style={{ height: '100%', backgroundColor: color, borderRadius: '100px' }}
                />
              </div>
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#003D80',
                  width: '28px',
                  textAlign: 'right',
                }}
              >
                {pct}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
