import { createBrowserRouter } from 'react-router-dom';
import Carone from '../pages/Carone/Carone';
import Carone2 from '../pages/Carone2/Carone2';
import Ce from '../pages/Ce/Ce';
import Es from '../pages/Es/Es';
import Home from '../pages/Home/Home';
import Sg from '../pages/Sg/Sg';
import Si from '../pages/Si/Si';
import Total from '../pages/Total/Total';
import { Carone2Routes } from './Carone2Routes';
import { CaroneRoutes } from './CaroneRoutes';
import { CeRoutes } from './CeRoutes';
import { EsRoutes } from './EsRoutes';
import { HomeRoutes } from './HomeRoutes';
import { SgRoutes } from './SgRoutes';
import { SiRoutes } from './SiRoutes';
import { TotalRoutes } from './TotalRoutes';

const Router = createBrowserRouter([
  {
    path: '/',
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
    path: '/si',
    element: <Si />,
    children: [...SiRoutes],
  },
  {
    path: '/es',
    element: <Es />,
    children: [...EsRoutes],
  },
]);

export default Router;
