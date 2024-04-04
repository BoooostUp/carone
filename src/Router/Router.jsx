import { createBrowserRouter } from 'react-router-dom';
import { CaroneRoutes } from './CaroneRoutes';
import { CeRoutes } from './CeRoutes';
import { HomeRoutes } from './HomeRoutes';
import { SgRoutes } from './SgRoutes';
import { SiRoutes } from './SiRoutes';
import { TotalRoutes } from './TotalRoutes';
import CertificationComponent from '../components/Certification/CertificationComponent';
import Carone from '../pages/Carone/Carone';
import Ce from '../pages/Ce/Ce';
import Home from '../pages/Home/Home';
import Root from '../pages/Root';
import Sg from '../pages/Sg/Sg';
import Si from '../pages/SI/Si';
import Total from '../pages/Total/Total';

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
    children: [...CeRoutes],
  },
  {
    path: '/carone',
    element: <Carone />,
    children: [...CaroneRoutes],
  },
  {
    path: '/sg',
    element: <Sg />,
    children: [...SgRoutes],
  },
  {
    path: '/total',
    element: <Total />,
    children: [...TotalRoutes],
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
