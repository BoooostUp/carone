import { createBrowserRouter } from 'react-router-dom';
import { HomeRoutes } from './HomeRoutes';
import { SiRoutes } from './SiRoutes';
import CertificationComponent from '../components/Certification/CertificationComponent';
import Carone from '../pages/Carone/Carone';
import Ce from '../pages/CE/Ce';
import Home from '../pages/Home/Home';
import Root from '../pages/Root';
import Sg from '../pages/Sg/Sg';
import Si from '../pages/SI/Si';
import Total from '../pages/Total';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/home',
    element: <Home />,
    children: [...HomeRoutes],
  },
  {
    path: '/ce',
    element: <Ce />,
  },
  {
    path: '/carone',
    element: <Carone />,
  },
  {
    path: '/sg',
    element: <Sg />,
  },
  {
    path: '/total',
    element: <Total />,
  },
  {
    path: '/si',
    element: <Si />,
    children: [...SiRoutes],
  },
  {
    path: '/test',
    element: <CertificationComponent />,
  },
]);

export default Router;
