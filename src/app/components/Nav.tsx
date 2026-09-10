import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router';

type NavItem =
  | { label: string; action: 'scroll'; target: string }
  | { label: string; action: 'navigate'; path: string };

const navItems: NavItem[] = [
  { label: 'Work', action: 'scroll', target: 'work' },
  { label: 'Field Note', action: 'navigate', path: '/field-note' },
  { label: 'About', action: 'navigate', path: '/about' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu after route changes.
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Honor homepage hash navigation after React Router completes a route change.
  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return;
    const id = location.hash.replace('#', '');
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  // Mobile menu accessibility: lock page scroll, focus first control, trap Tab, close on Escape.
  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const menu = mobileMenuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== 'Tab' || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (location.hash !== `#${id}`) {
        window.history.replaceState(null, '', `/#${id}`);
      }
    }
  };

  const handleNavItem = (item: NavItem) => {
    setMobileOpen(false);
    if (item.action === 'scroll') {
      scrollToSection(item.target);
    } else {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCTA = () => {
    setMobileOpen(false);
    navigate('/field-note');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWordmark = () => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(227, 238, 248, 0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #AECCEF' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <button
          onClick={handleWordmark}
          aria-label="Flow Studio, return to homepage"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.35rem',
            color: '#003D80',
            letterSpacing: '0.02em',
            fontWeight: 400,
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Flow Studio
        </button>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-10">
          {navItems.map(item => (
            <button
              key={item.label}
              onClick={() => handleNavItem(item)}
              aria-current={item.action === 'navigate' && location.pathname === item.path ? 'page' : undefined}
              style={{
                fontSize: '0.8125rem',
                color: '#1A5296',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#003D80')}
              onMouseLeave={e => (e.currentTarget.style.color = '#1A5296')}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={handleCTA}
          className="hidden md:block"
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#ffffff',
            backgroundColor: '#003D80',
            border: 'none',
            borderRadius: '100px',
            padding: '10px 22px',
            cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#002D5F')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#003D80')}
        >
          Request a Field Note
        </button>

        <button
          ref={menuButtonRef}
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
        >
          <div aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '22px' }}>
            {[
              mobileOpen ? 'translateY(6px) rotate(45deg)' : 'none',
              undefined,
              mobileOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            ].map((transform, i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  height: '1px',
                  backgroundColor: '#003D80',
                  transition: 'all 0.3s',
                  transform: transform ?? 'none',
                  opacity: i === 1 && mobileOpen ? 0 : 1,
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          ref={mobileMenuRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-8 pb-8 pt-2"
          style={{ backgroundColor: '#E3EEF8', borderTop: '1px solid #AECCEF' }}
        >
          {navItems.map(item => (
            <button
              key={item.label}
              onClick={() => handleNavItem(item)}
              className="block w-full text-left py-4"
              aria-current={item.action === 'navigate' && location.pathname === item.path ? 'page' : undefined}
              style={{
                fontSize: '1.5rem',
                fontFamily: "'Cormorant Garamond', serif",
                color: '#003D80',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid #AECCEF',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={handleCTA}
            className="mt-6 block w-full text-center py-3 rounded-full"
            style={{
              backgroundColor: '#003D80',
              color: '#ffffff',
              fontSize: '0.8125rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontFamily: "'DM Sans', sans-serif",
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Request a Field Note
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
