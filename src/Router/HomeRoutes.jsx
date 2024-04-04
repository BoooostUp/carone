import HomeCeo from '../pages/Home/HomeCeo';
import HomeHistory from '../pages/Home/HomeHistory';
import HomeLocation from '../pages/Home/HomeLocation';
import HomeMain from '../pages/Home/HomeMain';
import HomeRecruit from '../pages/Home/HomeRecruit';

export const HomeRoutes = [
  {
    path: '/home',
    element: <HomeMain />,
  },
  {
    path: '/home/ceo',
    element: <HomeCeo />,
  },
  {
    path: '/home/history',
    element: <HomeHistory />,
  },
  {
    path: '/home/location',
    element: <HomeLocation />,
  },
  {
    path: '/home/recruit',
    element: <HomeRecruit />,
  },
];
