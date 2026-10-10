import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Carone2Routes } from './Carone2Routes';
import { CaroneRoutes } from './CaroneRoutes';
import { CeRoutes } from './CeRoutes';
import { EsRoutes } from './EsRoutes';
import { HomeRoutes } from './HomeRoutes';
import { HwangjiRoutes } from './HwangjiRoutes';
import { SgRoutes } from './SgRoutes';
import { TotalRoutes } from './TotalRoutes';
import Carone from '../pages/Carone/Carone';
import Carone2 from '../pages/Carone2/Carone2';
import Ce from '../pages/Ce/Ce';
import Es from '../pages/Es/Es';
import Home from '../pages/Home/Home';

import Hwangji from '../pages/Hwangji/Hwangji';
import Sg from '../pages/Sg/Sg';
import Total from '../pages/Total/Total';

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
    path: '/hj',
    element: <Hwangji />,
    children: [...HwangjiRoutes],
  },
  {
    path: '/es',
    element: <Es />,
    children: [...EsRoutes],
  },
  // 없는 주소(예: 운영 종료된 /si)는 홈으로 이동
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

export default Router;
