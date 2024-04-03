import About from '../pages/SI/Business/About';
import Business from '../pages/SI/Business/Business';
import Process from '../pages/SI/Business/Process';
import Waste from '../pages/SI/Business/Waste';
import Facilities from '../pages/SI/Facilities';
import BusinessPartner from '../pages/SI/Info/BusinessPartner';
import Ceo from '../pages/SI/Info/Ceo';
import History from '../pages/SI/Info/History';
import Info from '../pages/SI/Info/Info';
import Location from '../pages/SI/Info/Location';
import Licenses from '../pages/SI/Licenses';

export const SiRoutes = [
  {
    path: '/si/info',
    element: <Info />,
  },
  {
    path: '/si/info/ceo',
    element: <Ceo />,
  },
  {
    path: '/si/info/history',
    element: <History />,
  },
  {
    path: '/si/info/location',
    element: <Location />,
  },
  {
    path: '/si/info/business-partner',
    element: <BusinessPartner />,
  },

  {
    path: '/si/business',
    element: <Business />,
  },
  {
    path: '/si/business/about',
    element: <About />,
  },
  {
    path: '/si/business/waste',
    element: <Waste />,
  },
  {
    path: '/si/business/process',
    element: <Process />,
  },

  {
    path: '/si/facilities',
    element: <Facilities />,
  },
  {
    path: '/si/licenses',
    element: <Licenses />,
  },
];
