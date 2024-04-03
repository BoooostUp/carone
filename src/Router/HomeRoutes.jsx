import Ceo from '../pages/Home/Ceo';
import History from '../pages/Home/History';
import Location from '../pages/Home/Location';
import Recruit from '../pages/Home/Recruit';

export const HomeRoutes = [
  {
    path: '/home/ceo',
    element: <Ceo />,
  },
  {
    path: '/home/history',
    element: <History />,
  },
  {
    path: '/home/location',
    element: <Location />,
  },
  {
    path: '/home/recruit',
    element: <Recruit />,
  },
];
