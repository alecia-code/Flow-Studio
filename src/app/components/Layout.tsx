import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Nav } from './Nav';
import { Footer } from './Footer';

export function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    const pages: Record<string, [string, string]> = {
      '/': ['Systems, Automation & Business Intelligence', 'Lead-to-Booking Systems, Business Pulse Dashboards, and Retention & Reactivation Systems for growing businesses.'],
      '/about': ['About Jenna', 'Meet Jenna, the systems builder behind Jenna Alecia Studios in Houston, Texas.'],
      '/field-note': ['Request a Field Note', 'Share your business challenges and request a personalized operational review from Jenna Alecia Studios.'],
      '/field-note/lumen-pilates': ['Lumen Pilates | Sample Field Note', 'Explore an illustrative Field Note showing how operational data can inform scheduling, retention, and revenue decisions.'],
      '/field-note/thanks': ['Field Note Request Received', 'What happens next after submitting your Field Note request.'],
    };
    const [title, description] = pages[pathname] || ['Page Not Found', 'Jenna Alecia Studios'];
    document.title = `${title} | Jenna Alecia Studios`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="robots"]')?.setAttribute('content', pathname === '/field-note/thanks' ? 'noindex, follow' : 'index, follow');
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  }, [pathname]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E3EEF8' }}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
