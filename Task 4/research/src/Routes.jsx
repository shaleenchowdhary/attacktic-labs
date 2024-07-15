import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Layout/Home';
import About from './components/Layout/About';
import Research from './components/Layout/Research';
import Contact from './components/Layout/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'research',
        element: <Research />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
