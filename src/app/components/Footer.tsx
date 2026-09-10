export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#E3EEF8',
        borderTop: '1px solid #AECCEF',
        padding: '64px 32px',
      }}
    >
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
      >
        <div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.35rem',
              color: '#003D80',
              marginBottom: '6px',
              fontWeight: 400,
            }}
          >
            Flow Studio
          </div>
          <p style={{ fontSize: '0.8125rem', color: '#1A5296', margin: 0 }}>
            Houston, Texas
          </p>
        </div>

        <div className="flex flex-wrap gap-8">
          {[
            { label: 'LinkedIn', href: '#' },
            { label: 'Instagram', href: '#' },
            { label: 'hello@flowstudio.co', href: 'mailto:hello@flowstudio.co' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: '0.8125rem',
                color: '#1A5296',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#003D80')}
              onMouseLeave={e => (e.currentTarget.style.color = '#1A5296')}
            >
              {label}
            </a>
          ))}
        </div>

        <p
          style={{
            fontSize: '0.75rem',
            color: '#5A8CC0',
            margin: 0,
            letterSpacing: '0.04em',
          }}
        >
          © 2026 Flow Studio
        </p>
      </div>
    </footer>
  );
}
