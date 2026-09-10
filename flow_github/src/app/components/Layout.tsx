import { Outlet } from 'react-router';
import { Nav } from './Nav';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E3EEF8' }}>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
