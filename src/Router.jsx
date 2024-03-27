import { createBrowserRouter } from 'react-router-dom';
import CertificationCanvas from './components/Certification/CertificationCanvas';
import Carone from './pages/Carone';
import Ce from './pages/Ce';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Root from './pages/Root';
import Sg from './pages/Sg';
import Si from './pages/Si';
import Total from './pages/Total';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'ce',
        element: <Ce />,
      },
      {
        path: 'carone',
        element: <Carone />,
      },
      {
        path: 'sg',
        element: <Sg />,
      },
      {
        path: 'total',
        element: <Total />,
      },
      {
        path: 'si',
        element: <Si />,
      },
      {
        path: 'test',
        element: <CertificationCanvas />,
      },
    ],
  },
]);

export default Router;
