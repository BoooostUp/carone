import { createBrowserRouter } from 'react-router-dom';
import { Carone2Routes } from './Carone2Routes';
import { CaroneRoutes } from './CaroneRoutes';
import { CeRoutes } from './CeRoutes';
import { HomeRoutes } from './HomeRoutes';
import { SgRoutes } from './SgRoutes';
import { SiRoutes } from './SiRoutes';
import { Total2Routes } from './Total2Routes';
import { TotalRoutes } from './TotalRoutes';
import CertificationComponent from '../components/Certification/CertificationComponent';
import Carone from '../pages/Carone/Carone';
import Carone2 from '../pages/Carone2/Carone2';
import Ce from '../pages/Ce/Ce';
import Home from '../pages/Home/Home';
import Root from '../pages/Root';
import Sg from '../pages/Sg/Sg';
import Si from '../pages/Si/Si';
import Total from '../pages/Total/Total';
import Total2 from '../pages/Total2/Total2';

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
    path: '/carone2',
    element: <Carone2 />,
    children: [...Carone2Routes],
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
    path: '/total2',
    element: <Total2 />,
    children: [...Total2Routes],
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