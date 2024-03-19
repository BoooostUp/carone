import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Ce from './pages/Ce';
import Carone from './pages/Carone';
import Sg from './pages/Sg';
import Total from './pages/Total';
import Si from './pages/Si';

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
    ],
  },
]);

export default Router;
