import HomeCeo from '../pages/Home/HomeCeo';
import HomeHistory from '../pages/Home/HomeHistory';
import HomeLocation from '../pages/Home/HomeLocation';
import HomeMain from '../pages/Home/HomeMain';
import HomeRecruit from '../pages/Home/HomeRecruit';

export const HomeRoutes = [
  {
    path: '',
    element: <HomeMain />,
  },
  {
    path: 'ceo',
    element: <HomeCeo />,
  },
  {
    path: 'history',
    element: <HomeHistory />,
  },
  {
    path: 'location',
    element: <HomeLocation />,
  },
  {
    path: 'recruit',
    element: <HomeRecruit />,
  },
];
