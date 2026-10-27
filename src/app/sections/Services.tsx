import { useNavigate } from 'react-router';

const services = [
  {
    number: '01',
    title: 'Lead-to-Booking Systems',
    description: 'Capture inquiries, organize responses, automate appropriate follow-ups, and see which leads turn into bookings.',
    details: 'Inquiry tracking · Follow-up workflows · Booking visibility',
  },
  {
    number: '02',
    title: 'Business Pulse Dashboards',
    description: 'Connect the operational tools you already use and bring revenue, bookings, customer activity, and trends into one clear view.',
    details: 'Data consolidation · KPI reporting · Decision-ready dashboards',
  },
  {
    number: '03',
    title: 'Retention & Reactivation Systems',
    description: 'Spot customers who may be overdue to return, track package expirations, and support thoughtful, permission-based outreach.',
    details: 'Customer signals · Retention tracking · Targeted follow-up',
  },
];

export function ServicesSection() {
  const navigate = useNavigate();
  return (
    <section id="services" style={{ background: '#F7FBFE', padding: '100px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: 12, color: '#1A5296' }}>What we build</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.75rem, 6vw, 5rem)', fontWeight: 400, color: '#003D80', margin: '20px 0 22px' }}>Thoughtful systems for the work behind your business.</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.8, color: '#1A5296', maxWidth: 720, marginBottom: 52 }}>You don't always need another platform. Sometimes you need the tools you already have to work together.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(service => (
            <article key={service.number} style={{ background: '#E3EEF8', border: '1px solid #D4E5F5', padding: '38px 30px', borderRadius: 12 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#5A8CC0' }}>{service.number}</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 34, lineHeight: 1.1, color: '#003D80', margin: '25px 0' }}>{service.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#1A5296', lineHeight: 1.75, fontSize: 15 }}>{service.description}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#5A8CC0', fontSize: 12, lineHeight: 1.6, marginTop: 28 }}>{service.details}</p>
            </article>
          ))}
        </div>
        <button onClick={() => { navigate('/field-note'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ marginTop: 42, background: '#003D80', color: 'white', padding: '16px 32px', borderRadius: 40, border: 0, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Start with a Field Note</button>
      </div>
    </section>
  );
}
