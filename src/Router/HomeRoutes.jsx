import HomeBusiness from '../pages/Home/HomeBusiness';
import HomeCeo from '../pages/Home/HomeCeo';
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
    path: 'business',
    element: <HomeBusiness />,
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
