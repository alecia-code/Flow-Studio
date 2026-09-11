import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { FieldNoteLumen } from './pages/FieldNote';
import { FieldNoteEmbed } from './pages/FieldNoteEmbed';
import { FieldNoteThanks } from './pages/FieldNoteThanks';

// Vite exposes the configured deployment base as BASE_URL. Using it as the
// router basename lets the same code run locally at / and on a GitHub Pages
// project URL such as /flow-studio/ without hard-coding Jenna's GitHub name.
const routerBase = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: [
        { index: true, Component: Home },
        { path: 'about', Component: About },
        { path: 'field-note', Component: FieldNoteEmbed },
        { path: 'field-note/lumen-pilates', Component: FieldNoteLumen },
        { path: 'field-note/thanks', Component: FieldNoteThanks },
      ],
    },
  ],
  { basename: routerBase },
);
